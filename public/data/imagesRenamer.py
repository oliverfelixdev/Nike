import os
import re

def clean_filename(filename):
    # Replace unwanted symbols with a space
    cleaned = re.sub(r"[+\-=',\"]", ' ', filename)
    
    # Remove single letters separated by spaces, underscores, or hyphens
    cleaned = re.sub(r'\b[A-Za-z]\b', '', cleaned)
    
    # Replace multiple spaces, underscores, or hyphens with a single space
    cleaned = re.sub(r'[ _\-]+', ' ', cleaned).strip()
    
    return cleaned

def get_unique_filename(directory, filename, extension):
    new_filename = filename
    count = 1
    
    # Keep modifying the filename until it's unique
    while os.path.exists(os.path.join(directory, f"{new_filename}{extension}")):
        new_filename = f"{filename} ({count})"  # Append (1), (2), etc.
        count += 1
    
    return f"{new_filename}{extension}"

def rename_images(directory):
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):  
            old_path = os.path.join(directory, filename)
            base_name, extension = os.path.splitext(filename)
            cleaned_name = clean_filename(base_name)
            
            # Add 'men' before the filename
            cleaned_name = f"kids {cleaned_name}"
            
            new_filename = get_unique_filename(directory, cleaned_name, extension)
            new_path = os.path.join(directory, new_filename)
            
            # Rename only if the name changes
            if old_path != new_path:
                os.rename(old_path, new_path)
                print(f'Renamed: "{filename}" -> "{new_filename}"')
            else:
                print(f'Skipped: "{filename}" (no changes needed)')

# Set the correct directory path
directory = os.path.join(os.path.dirname(__file__), 'images')
rename_images(directory)
