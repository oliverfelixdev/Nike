import os
import re

# Define the path to the images folder
images_folder = os.path.join(os.path.dirname(__file__), "images")

# Define a regex pattern to remove unwanted characters except for + and -
pattern = r"[()\[\]{}@#$%^&*!~`+=,;:'\"<>?/\\|]"

# Loop through all files in the images folder
for filename in os.listdir(images_folder):
    old_path = os.path.join(images_folder, filename)

    # Ensure it's a file
    if os.path.isfile(old_path):
        # Replace + and - with a space
        new_filename = filename.replace("+", " ").replace("-", " ")

        # Remove all other unwanted characters
        new_filename = re.sub(pattern, "", new_filename)

        # Strip extra spaces and ensure a clean filename
        new_filename = re.sub(r"\s+", " ", new_filename).strip()

        # Rename only if the filename changes
        if new_filename != filename:
            new_path = os.path.join(images_folder, new_filename)
            os.rename(old_path, new_path)
            print(f"Renamed: {filename} -> {new_filename}")

print("Filename cleanup completed!")
