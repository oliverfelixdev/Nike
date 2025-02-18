import os

def remove_spaces_in_filenames(folder_path):
    if not os.path.exists(folder_path):
        print(f"The folder '{folder_path}' does not exist.")
        return
    
    for filename in os.listdir(folder_path):
        old_path = os.path.join(folder_path, filename)
        if os.path.isfile(old_path):  # Ensure it's a file
            new_filename = filename.replace(" ", "_")  # Replace spaces with underscores
            new_path = os.path.join(folder_path, new_filename)
            
            if old_path != new_path:  # Rename only if there's a change
                os.rename(old_path, new_path)
                print(f"Renamed: '{filename}' -> '{new_filename}'")
    
    print("Filename cleanup completed!")

# Set the image folder path based on your reference script
image_folder = os.path.join(os.path.dirname(__file__), "images")
remove_spaces_in_filenames(image_folder)
