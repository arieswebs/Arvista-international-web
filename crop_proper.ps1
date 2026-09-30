Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\adith\Downloads\ARVISTA (1).png"
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

# Fine scan around the edges
$minX = [Math]::Max(0, $minX - 10)
$minY = [Math]::Max(0, $minY - 10)
$maxX = [Math]::Min($w - 1, $maxX + 10)
$maxY = [Math]::Min($h - 1, $maxY + 10)

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

$img.Dispose()
$cropped.Dispose()
Write-Host "Successfully cropped and updated logo!"
