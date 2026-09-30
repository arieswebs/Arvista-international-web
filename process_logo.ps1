Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\adith\Downloads\ARVISTA (1).png"
$img = [System.Drawing.Bitmap]::FromFile($srcPath)
$w = $img.Width
$h = $img.Height

$minX = $w; $minY = $h; $maxX = 0; $maxY = 0

# Scan for non-white pixels
for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $pixel = $img.GetPixel($x, $y)
        # Check if not near-white
        if (-not ($pixel.R -gt 240 -and $pixel.G -gt 240 -and $pixel.B -gt 240)) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Bounding box: minX=$minX, minY=$minY, maxX=$maxX, maxY=$maxY"
$cropW = $maxX - $minX + 1
$cropH = $maxY - $minY + 1
Write-Host "Cropped dimensions: Width=$cropW, Height=$cropH"

# Create new cropped bitmap with transparency
$cropped = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $cropH; $y++) {
    for ($x = 0; $x -lt $cropW; $x++) {
        $origPixel = $img.GetPixel($minX + $x, $minY + $y)
        if ($origPixel.R -gt 240 -and $origPixel.G -gt 240 -and $origPixel.B -gt 240) {
            $cropped.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } else {
            $cropped.SetPixel($x, $y, $origPixel)
        }
    }
}

$destinations = @(
    "e:\Aries\Arvista international\public\ArvistaPNGUP.png",
    "e:\Aries\Arvista international\public\logo.png",
    "e:\Aries\Arvista international\public\logo_final.png",
    "e:\Aries\Arvista international\public\Arvista_logo.png"
)

foreach ($dest in $destinations) {
    if (Test-Path $dest) { Remove-Item $dest -Force }
    $cropped.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Host "Saved to $dest"
}

$img.Dispose()
$cropped.Dispose()
Write-Host "Done!"
