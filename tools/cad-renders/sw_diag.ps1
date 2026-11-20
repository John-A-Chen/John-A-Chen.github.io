# Reports why an assembly renders empty: lists its components with whether each
# file was found, its suppression state and visibility. Opens read-only, closes after.
param([Parameter(Mandatory = $true)][string[]]$Paths)

$T = [System.__ComObject]
$IM = [Reflection.BindingFlags]::InvokeMethod
$GP = [Reflection.BindingFlags]::GetProperty
function Call($o, $name, $a) { $T.InvokeMember($name, $IM, $null, $o, $a) }
function Prop($o, $name) { $T.InvokeMember($name, $GP, $null, $o, $null) }

$sw = [Runtime.InteropServices.Marshal]::GetActiveObject("SldWorks.Application")
foreach ($path in $Paths) {
    "== $path"
    $callArgs = @($path, 2, 3, "", 0, 0)
    $pm = New-Object Reflection.ParameterModifier(6); $pm[4] = $true; $pm[5] = $true
    $doc = $T.InvokeMember("OpenDoc6", $IM, $null, $sw, $callArgs, @($pm), $null, $null)
    if ($null -eq $doc) { "   open failed errors=$($callArgs[4]) warnings=$($callArgs[5])"; continue }
    "   open errors=$($callArgs[4]) warnings=$($callArgs[5])"
    $title = Call $doc "GetTitle" $null
    try {
        $comps = Call $doc "GetComponents" @($true)
        "   top-level components: " + @($comps).Count
        foreach ($c in @($comps) | Select-Object -First 25) {
            $p = Call $c "GetPathName" $null
            $sup = Call $c "GetSuppression" $null   # 0 suppressed, 1 lightweight, 2 fully resolved, 3 resolved
            $vis = Prop $c "Visible"                 # 0 hidden, 1 visible
            "   {0,-34} found={1,-5} suppression={2} visible={3}  {4}" -f (Prop $c "Name2"), (Test-Path -LiteralPath $p), $sup, $vis, $p
        }
    } catch { "   ERR " + $_.Exception.Message }
    finally { Call $sw "CloseDoc" @($title) | Out-Null }
}
