# Watches SolidWorks for "Save changes to <file> ?" prompts and answers No.
# The render batch opens files read-only and must never save, but the CAM
# add-in still asks on close, which blocks the batch. Only that exact prompt
# is touched; any other dialog is reported and left alone.
param([int]$Minutes = 20)

Add-Type @"
using System; using System.Text; using System.Collections.Generic; using System.Runtime.InteropServices;
public class SwDialogs {
  public delegate bool EnumProc(IntPtr h, IntPtr l);
  [DllImport("user32.dll")] public static extern bool EnumWindows(EnumProc cb, IntPtr l);
  [DllImport("user32.dll")] public static extern bool EnumChildWindows(IntPtr p, EnumProc cb, IntPtr l);
  [DllImport("user32.dll")] public static extern uint GetWindowThreadProcessId(IntPtr h, out uint pid);
  [DllImport("user32.dll", CharSet=CharSet.Unicode)] public static extern int GetWindowText(IntPtr h, StringBuilder s, int n);
  [DllImport("user32.dll", CharSet=CharSet.Unicode)] public static extern int GetClassName(IntPtr h, StringBuilder s, int n);
  [DllImport("user32.dll")] public static extern bool IsWindowVisible(IntPtr h);
  [DllImport("user32.dll")] public static extern bool PostMessage(IntPtr h, uint msg, IntPtr w, IntPtr l);
  static string Text(IntPtr h) { var t = new StringBuilder(500); GetWindowText(h, t, 500); return t.ToString(); }
  static string Cls(IntPtr h) { var t = new StringBuilder(100); GetClassName(h, t, 100); return t.ToString(); }
  // Returns a log line per dialog seen. Clicks No only on a "Save changes to" prompt.
  public static List<string> Sweep(uint pid) {
    var log = new List<string>();
    EnumWindows((h, l) => {
      uint p; GetWindowThreadProcessId(h, out p);
      if (p != pid || !IsWindowVisible(h) || Cls(h) != "#32770") return true;
      string message = ""; IntPtr no = IntPtr.Zero;
      EnumChildWindows(h, (c, l2) => {
        string cls = Cls(c), txt = Text(c);
        if (cls == "Static" && txt.Length > message.Length) message = txt;
        if (cls == "Button" && txt.Replace("&", "") == "No") no = c;
        return true; }, IntPtr.Zero);
      if (message.StartsWith("Save changes to") && no != IntPtr.Zero) {
        PostMessage(no, 0x00F5 /* BM_CLICK */, IntPtr.Zero, IntPtr.Zero);
        log.Add("ANSWERED NO: " + message);
      } else {
        log.Add("LEFT ALONE: [" + Text(h) + "] " + message);
      }
      return true; }, IntPtr.Zero);
    return log; } }
"@

$swPid = (Get-Process SLDWORKS -ErrorAction Stop | Select-Object -First 1).Id
$until = (Get-Date).AddMinutes($Minutes)
$lastOther = ""
while ((Get-Date) -lt $until) {
    foreach ($line in [SwDialogs]::Sweep($swPid)) {
        if ($line.StartsWith("ANSWERED")) { $line }
        elseif ($line -ne $lastOther) { $line; $lastOther = $line }
    }
    Start-Sleep -Milliseconds 700
}
"watcher finished"
