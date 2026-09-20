import sys
import subprocess

try:
    from PIL import Image
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def process_logo(file_path):
    img = Image.open(file_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    # Tolerance for white (remove near-white background)
    for item in datas:
        # If it's very close to white
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((0, 0, 0, 0)) # Fully transparent black (so getbbox works)
        else:
            newData.append(item)

    img.putdata(newData)
    
    # Crop to bounding box
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(file_path, "PNG")
    print("Logo processed and cropped successfully.")

process_logo(r"e:\Aries\Arvista international\public\logo.png")
