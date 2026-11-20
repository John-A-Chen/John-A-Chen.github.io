# Renders isometric (and optional extra) views of SolidWorks files to BMP.
# Attaches to the running SolidWorks, opens each file read-only and silently,
# saves the views, then closes only the document it opened. Nothing is saved
# back to the CAD files.
#
# Usage: sw_render.ps1 -JobFile jobs.json
#   jobs.json: [{ "path": "C:\\...\\x.SLDASM", "out": "C:\\...\\name", "views": ["iso","front","top","right"] }]
param([Parameter(Mandatory = $true)][string]$JobFile)

$ErrorActionPreference = "Stop"
$T = [System.__ComObject]
$IM = [Reflection.BindingFlags]::InvokeMethod
function Call($o, $name, $a) { $T.InvokeMember($name, $IM, $null, $o, $a) }

$sw = [Runtime.InteropServices.Marshal]::GetActiveObject("SldWorks.Application")
$before = Call $sw "GetDocumentCount" $null

# swStandardViews_e
$viewIds = @{ front = 1; back = 2; left = 3; right = 4; top = 5; bottom = 6; iso = 7; trimetric = 8; dimetric = 9 }
$viewNames = @{ front = "*Front"; back = "*Back"; left = "*Left"; right = "*Right"; top = "*Top"; bottom = "*Bottom"; iso = "*Isometric"; trimetric = "*Trimetric"; dimetric = "*Dimetric" }

$jobs = Get-Content $JobFile -Raw | ConvertFrom-Json
foreach ($job in $jobs) {
    $path = $job.path
    if (-not (Test-Path -LiteralPath $path)) { "MISSING  $path"; continue }
    $ext = [IO.Path]::GetExtension($path).ToLower()
    $type = switch ($ext) { ".sldprt" { 1 } ".sldasm" { 2 } ".slddrw" { 3 } default { 0 } }
    if ($type -eq 0) { "SKIPTYPE $path"; continue }

    # OpenDoc6(FileName, Type, Options, Configuration, ref Errors, ref Warnings)
    # Options 3 = Silent (1) + ReadOnly (2)
    $callArgs = @($path, $type, 3, "", 0, 0)
    $pm = New-Object Reflection.ParameterModifier(6)
    $pm[4] = $true; $pm[5] = $true
    $doc = $null
    try {
        $doc = $T.InvokeMember("OpenDoc6", $IM, $null, $sw, $callArgs, @($pm), $null, $null)
    } catch {
        "OPENERR  $path :: $($_.Exception.InnerException.Message)"; continue
    }
    if ($null -eq $doc) { "OPENFAIL $path (errors=$($callArgs[4]) warnings=$($callArgs[5]))"; continue }

    $title = Call $doc "GetTitle" $null
    try {
        $views = if ($job.views) { $job.views } else { @("iso") }
        foreach ($v in $views) {
            if ($type -ne 3) {
                Call $doc "ShowNamedView2" @($viewNames[$v], $viewIds[$v]) | Out-Null
            }
            Call $doc "ViewZoomtofit2" $null | Out-Null
            Call $doc "GraphicsRedraw2" $null | Out-Null
            $out = "$($job.out)-$v.bmp"
            $ok = Call $doc "SaveBMP" @($out, 2000, 1250)
            "SAVED=$ok $out"
        }
    } catch {
        "VIEWERR  $path :: $($_.Exception.InnerException.Message)"
    } finally {
        Call $sw "CloseDoc" @($title) | Out-Null
    }
}
$after = Call $sw "GetDocumentCount" $null
"docs open before=$before after=$after"
