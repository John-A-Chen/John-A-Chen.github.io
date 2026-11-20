# Builds a dimension-driven mecanum roller part in the running SolidWorks and adds
# one configuration per row of -Configs. The roller is a revolve of one sketch:
#   Length          length of the roller
#   ArcRadius       radius of the profile arc
#   ArcCentreDrop   arc centre below the roller axis ( = ArcRadius - middle radius )
#   BoreRadius      radius of the through hole
# Nothing else that is open in SolidWorks is touched.
#
# Usage: sw_make_roller.ps1 -Out C:\...\roller.SLDPRT -Configs configs.json -RenderDir C:\...\out
#   configs.json: [{ "name": "10-rollers", "length": 34.37, "arc": 77.76, "mid": 15.0, "bore": 3.2 }]   (mm)
param([Parameter(Mandatory = $true)][string]$Out, [Parameter(Mandatory = $true)][string]$Configs, [string]$RenderDir)

$ErrorActionPreference = "Stop"
$T = [System.__ComObject]
$BF = [Reflection.BindingFlags]
function Call($o, $name, $a) {
    try { $T.InvokeMember($name, $BF::InvokeMethod, $null, $o, $a) }
    catch { throw "$name :: $($_.Exception.InnerException.Message)" }
}
function Get($o, $name) { $T.InvokeMember($name, $BF::GetProperty, $null, $o, $null) }
function PutProp($o, $name, $v) { $T.InvokeMember($name, $BF::SetProperty, $null, $o, @($v)) | Out-Null }
function Step($label, $value) { "{0,-34} {1}" -f $label, $value }

# "Nothing" for COM object arguments; a bare $null is rejected as a type mismatch
$nothing = [Runtime.InteropServices.DispatchWrapper]::new($null)
$rows = Get-Content $Configs -Raw | ConvertFrom-Json
$first = $rows[0]
$mm = 0.001
$sw = [Runtime.InteropServices.Marshal]::GetActiveObject("SldWorks.Application")
$previous = Get $sw "ActiveDoc"
$previousTitle = if ($previous) { Call $previous "GetTitle" $null } else { $null }

$template = Call $sw "GetUserPreferenceStringValue" @(8)      # swDefaultTemplatePart
Step "template" $template
$oldInput = Call $sw "GetUserPreferenceToggle" @(10)          # swInputDimValOnCreate
Call $sw "SetUserPreferenceToggle" @(10, $false) | Out-Null

$doc = Call $sw "NewDocument" @($template, 0, 0.0, 0.0)
if ($null -eq $doc) { throw "NewDocument failed" }
$ext = Get $doc "Extension"
$sm = Get $doc "SketchManager"
$fm = Get $doc "FeatureManager"

try {
    # first reference plane in the tree (Front), whatever it is called
    $feat = Call $doc "FirstFeature" $null
    while ($feat -and (Call $feat "GetTypeName2" $null) -ne "RefPlane") { $feat = Call $feat "GetNextFeature" $null }
    Step "sketch plane" (Get $feat "Name")
    Call $feat "Select2" @($false, 0) | Out-Null
    Call $sm "InsertSketch" @($true) | Out-Null
    PutProp $sm "AddToDB" $true

    $L = $first.length * $mm; $rho = $first.arc * $mm; $r0 = $first.mid / 2 * $mm; $rb = $first.bore / 2 * $mm
    $drop = $rho - $r0
    $rEnd = [math]::Sqrt($rho * $rho - ($L / 2) * ($L / 2)) - $drop
    $axis = Call $sm "CreateCenterLine" @(-$L, 0.0, 0.0, $L, 0.0, 0.0)
    $bore = Call $sm "CreateLine" @((-$L / 2), $rb, 0.0, ($L / 2), $rb, 0.0)
    $right = Call $sm "CreateLine" @(($L / 2), $rb, 0.0, ($L / 2), $rEnd, 0.0)
    $arc = Call $sm "CreateArc" @(0.0, (-$drop), 0.0, ($L / 2), $rEnd, 0.0, (-$L / 2), $rEnd, 0.0, [int16]1)
    $left = Call $sm "CreateLine" @((-$L / 2), $rEnd, 0.0, (-$L / 2), $rb, 0.0)
    Step "entities" ("axis={0} bore={1} right={2} arc={3} left={4}" -f ($null -ne $axis), ($null -ne $bore), ($null -ne $right), ($null -ne $arc), ($null -ne $left))

    function Sel($objs) {
        Call $doc "ClearSelection2" @($true) | Out-Null
        $append = $false
        foreach ($o in $objs) {
            if ($o -is [string]) { Call $doc $(if ($append) { "AndSelectByID" } else { "SelectByID" }) @("Point1@Origin", "EXTSKETCHPOINT", 0.0, 0.0, 0.0) | Out-Null }
            else { Call $o "Select2" @($append, 0) | Out-Null }
            $append = $true
        }
    }
    function Relate($objs, $kind) { Sel $objs; Call $doc "SketchAddConstraints" @($kind) | Out-Null }
    function P($seg, $which) { Call $seg $which $null }

    Relate @($axis) "sgFIXED"
    Relate @($bore) "sgHORIZONTAL2D"
    Relate @($right) "sgVERTICAL2D"
    Relate @($left) "sgVERTICAL2D"
    Relate @($right, $left) "sgSAMELENGTH"
    Relate @((P $bore "GetEndPoint2"), (P $right "GetStartPoint2")) "sgMERGEPOINTS"
    Relate @((P $right "GetEndPoint2"), (P $arc "GetStartPoint2")) "sgMERGEPOINTS"
    Relate @((P $arc "GetEndPoint2"), (P $left "GetStartPoint2")) "sgMERGEPOINTS"
    Relate @((P $left "GetEndPoint2"), (P $bore "GetStartPoint2")) "sgMERGEPOINTS"
    Relate @((P $arc "GetCenterPoint2"), "ORIGIN") "sgVERTICALPOINTS2D"

    function Dim($objs, $x, $y, $name) {
        Sel $objs
        $dd = Call $doc "AddDimension2" @([double]$x, [double]$y, [double]0)
        if ($null -eq $dd) { Step "DIM FAILED" $name; return }
        $d = Call $dd "GetDimension2" @(0)
        PutProp $d "Name" $name
        Step "dimension $name" ("{0:N3} mm" -f ((Get $d "SystemValue") / $mm))
    }
    Dim @($bore) 0.0 (-0.012) "Length"
    Dim @($arc) 0.012 0.02 "ArcRadius"
    Dim @((P $arc "GetCenterPoint2"), "ORIGIN") (-0.03) (-$drop / 2) "ArcCentreDrop"
    Dim @($bore, "ORIGIN") ($L / 2 + 0.012) ($rb / 2) "BoreRadius"

    PutProp $sm "AddToDB" $false
    $sketch = Get $sm "ActiveSketch"
    $sketchName = Get $sketch "Name"
    $axisName = Call $axis "GetName" $null
    Call $doc "ClearSelection2" @($true) | Out-Null
    Call $sm "InsertSketch" @($true) | Out-Null
    Step "sketch" $sketchName

    Call $doc "SelectByID" @($sketchName, "SKETCH", 0.0, 0.0, 0.0) | Out-Null
    Call $doc "AndSelectByMark" @("$axisName@$sketchName", "EXTSKETCHSEGMENT", 0.0, 0.0, 0.0, 16) | Out-Null
    $rev = Call $fm "FeatureRevolve2" @($true, $true, $false, $false, $false, $false, 0, 0, (2 * [math]::PI), 0.0, $false, $false, 0.0, 0.0, 0, 0.0, 0.0, $true, $true, $true)
    Step "revolve" $(if ($rev) { Get $rev "Name" } else { "FAILED" })
    if ($null -eq $rev) { throw "revolve failed" }
    PutProp $rev "Name" "Roller"
    $sk = Call $doc "FeatureByName" @($sketchName)
    if ($sk) { PutProp $sk "Name" "Profile" }
    $sketchName = "Profile"

    # configurations
    foreach ($row in $rows) {
        $cfg = Call $doc "AddConfiguration3" @($row.name, "$($row.length) mm long, arc R$($row.arc)", "", 0)
        Step "configuration" "$($row.name) $(if ($cfg) { 'added' } else { 'FAILED' })"
        $values = @{ Length = $row.length; ArcRadius = $row.arc; ArcCentreDrop = ($row.arc - $row.mid / 2); BoreRadius = ($row.bore / 2) }
        foreach ($k in $values.Keys) {
            $d = Call $doc "Parameter" @("$k@$sketchName")
            if ($null -eq $d) { Step "PARAMETER MISSING" $k; continue }
            Call $d "SetSystemValue3" @(([double]$values[$k] * $mm), 3, [string[]]@($row.name)) | Out-Null
        }
    }
    # drop the template's own configuration so only the generated ones remain
    Call $doc "ShowConfiguration2" @($rows[0].name) | Out-Null
    $names = Call $doc "GetConfigurationNames" $null
    foreach ($n in $names) { if (($rows | ForEach-Object name) -notcontains $n) { Step "removed config" "$n $(Call $doc 'DeleteConfiguration2' @($n))" } }

    foreach ($row in $rows) {
        Call $doc "ShowConfiguration2" @($row.name) | Out-Null
        Call $doc "ForceRebuild3" @($false) | Out-Null
        $box = Call $doc "GetPartBox" @($true)
        $size = 0..2 | ForEach-Object { [math]::Round(($box[$_ + 3] - $box[$_]) / $mm, 3) }
        Step "check $($row.name)" ("box {0} x {1} x {2} mm (expect {3} long, {4} dia)" -f $size[0], $size[1], $size[2], $row.length, $row.mid)
        if ($RenderDir) {
            Call $doc "ShowNamedView2" @("*Isometric", 7) | Out-Null
            Call $doc "ViewZoomtofit2" $null | Out-Null
            Call $doc "SaveBMP" @([string](Join-Path $RenderDir "$($row.name).bmp"), 1200, 800) | Out-Null
        }
    }
    Call $doc "ShowConfiguration2" @($rows[0].name) | Out-Null
    Step "saved (0 = ok)" (Call $doc "SaveAs3" @([string]$Out, 0, 2))
}
catch { "ERROR: " + $_.Exception.Message + $(if ($_.Exception.InnerException) { " :: " + $_.Exception.InnerException.Message }) + " @ line " + $_.InvocationInfo.ScriptLineNumber }
finally {
    Call $sw "SetUserPreferenceToggle" @(10, $oldInput) | Out-Null
    Call $sw "CloseDoc" @((Call $doc "GetTitle" $null)) | Out-Null
    if ($previousTitle) {
        $a = @($previousTitle, $false, 0, 0)
        $pm = New-Object Reflection.ParameterModifier(4); $pm[3] = $true
        try { $T.InvokeMember("ActivateDoc3", $BF::InvokeMethod, $null, $sw, $a, @($pm), $null, $null) | Out-Null } catch { }
    }
    Step "open documents" (Call $sw "GetDocumentCount" $null)
}
