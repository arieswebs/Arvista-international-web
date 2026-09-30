Add-Type -AssemblyName System.Drawing

$srcPath = "e:\Aries\Arvista international\public\ArvistaPNGUP.png"
$img = [System.Drawing.Bitmap]::FromFile($srcPath)
$w = $img.Width
$h = $img.Height

$light = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $p = $img.GetPixel($x, $y)
        if ($p.A -gt 15) {
            # If it's dark navy (the "ARVISTA" wordmark)
            if ($p.R -lt 70 -and $p.G -lt 70 -and $p.B -lt 100) {
                # Convert to crisp pure white preserving alpha
                $light.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($p.A, 255, 255, 255))
            } else {
                # Keep gold/yellow accent line and text
                $light.SetPixel($x, $y, $p)
            }
        } else {
            $light.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

$dest = "e:\Aries\Arvista international\public\logo-light.png"
if (Test-Path $dest) { Remove-Item $dest -Force }
$light.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)

$img.Dispose()
$light.Dispose()
Write-Host "Created public/logo-light.png successfully!"
