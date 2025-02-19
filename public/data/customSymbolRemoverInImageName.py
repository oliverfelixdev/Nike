import os
import re

images_folder = os.path.join(os.path.dirname(__file__), "images")

pattern = r"[()\[\]{}@#$%^&*!~`+=,;:'\"<>?/\\|]"

for filename in os.listdir(images_folder):
    old_path = os.path.join(images_folder, filename)

    if os.path.isfile(old_path):
        new_filename = filename.replace("+", " ").replace("-", " ")

        new_filename = re.sub(pattern, "", new_filename)

        new_filename = re.sub(r"\s+", " ", new_filename).strip()

        if new_filename != filename:
            new_path = os.path.join(images_folder, new_filename)
            os.rename(old_path, new_path)
            print(f"Renamed: {filename} -> {new_filename}")

print("Filename cleanup completed!")
