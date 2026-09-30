Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\adith\Downloads\ARVISTA (3).png"
if (-not (Test-Path $srcPath)) {
    Write-Error "File not found: $srcPath"
    exit 1
}

$img = [System.Drawing.Bitmap]::FromFile($srcPath)
$w = $img.Width
$h = $img.Height

$minX = $w; $minY = $h; $maxX = 0; $maxY = 0

for ($y = 0; $y -lt $h; $y += 2) {
    for ($x = 0; $x -lt $w; $x += 2) {
        $pixel = $img.GetPixel($x, $y)
        if ($pixel.A -gt 20) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

# Fine boundary padding
$minX = [Math]::Max(0, $minX - 8)
$minY = [Math]::Max(0, $minY - 8)
$maxX = [Math]::Min($w - 1, $maxX + 8)
$maxY = [Math]::Min($h - 1, $maxY + 8)

Write-Host "Exact content bounding box: minX=$minX, minY=$minY, maxX=$maxX, maxY=$maxY"
$cropW = $maxX - $minX + 1
$cropH = $maxY - $minY + 1
Write-Host "Cropped dimensions: Width=$cropW, Height=$cropH"

$rect = New-Object System.Drawing.Rectangle($minX, $minY, $cropW, $cropH)
$cropped = $img.Clone($rect, $img.PixelFormat)

$destinations = @(
    "e:\Aries\Arvista international\public\ArvistaPNGUP.png",
    "e:\Aries\Arvista international\public\logo.png",
    "e:\Aries\Arvista international\public\logo_final.png",
    "e:\Aries\Arvista international\public\Arvista_logo.png"
)

foreach ($dest in $destinations) {
    if (Test-Path $dest) { Remove-Item $dest -Force }
    $cropped.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Host "Saved cropped logo to $dest"
}

# Now generate public/logo-light.png where dark navy letters and line become white, and the gold 'R' stays gold!
$light = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $cropH; $y++) {
    for ($x = 0; $x -lt $cropW; $x++) {
        $p = $cropped.GetPixel($x, $y)
        if ($p.A -gt 15) {
            # Check if this pixel is the gold/yellow R
            # The yellow/gold R has high Red and Green (R > 180, G > 140, B < 80)
            if ($p.R -gt 170 -and $p.G -gt 130 -and $p.B -lt 100) {
                # Keep the gold/yellow color!
                $light.SetPixel($x, $y, $p)
            } else {
                # Convert the dark navy text and line to crisp white
                $light.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($p.A, 255, 255, 255))
            }
        } else {
            $light.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

$destLight = "e:\Aries\Arvista international\public\logo-light.png"
if (Test-Path $destLight) { Remove-Item $destLight -Force }
$light.Save($destLight, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved logo-light.png with gold 'R' preserved!"

$img.Dispose()
$cropped.Dispose()
$light.Dispose()
Write-Host "Done processing ARVISTA (3).png!"
