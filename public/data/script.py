import os
import random
import json
import re

# List of potential prices and colors
prices = [429, 199, 159, 259, 329, 899, 547, 699, 247]
colors = ["Rose", "Graphite", "Pebble", "Olive", "Coral", "Slate", "Mustard", "Indigo", "Stone", "Maroon", 
          "Seafoam", "Charcoal", "Rust", "Sky", "Taupe", "Lavender", "Emerald", "Sand"]

categories = ["Men", "Women", "Kids"]

# Get the absolute path for nikedata.json
json_file = os.path.join(os.path.dirname(__file__), "nikedata.json")

# Variations for description
description_templates = [
    "A premium-quality {name} designed for both comfort and performance.",
    "Experience superior craftsmanship with this {name}, ideal for all occasions.",
    "The {name} is a must-have for those who value style and function.",
    "Crafted for durability and elegance, the {name} is a perfect choice.",
    "Step up your game with the high-performance {name}.",
    "Engineered for excellence, the {name} offers both style and reliability.",
    "Take your look to the next level with the versatile and sleek {name}.",
    "Unmatched in quality and comfort, the {name} is a true wardrobe essential.",
    "Designed with precision, the {name} blends innovation with timeless appeal.",
    "Elevate your everyday wear with the stylish and durable {name}."
]

# Function to generate a random description
def generate_description(name):
    return random.choice(description_templates).format(name=name)

# Function to clean filenames
def clean_filename(filename):
    cleaned = re.sub(r"[+\-=',\"]", ' ', filename)  # Replace unwanted symbols with spaces
    cleaned = re.sub(r'\b[A-Za-z]\b', '', cleaned)  # Remove single letters
    cleaned = re.sub(r'[ _\-]+', ' ', cleaned).strip()  # Normalize spaces
    return cleaned

# Function to get the correct image directory
def get_image_directory():
    return os.path.join(os.path.dirname(__file__), 'images')

# Function to load existing JSON data
def load_existing_data(json_file):
    if os.path.exists(json_file):
        with open(json_file, 'r', encoding='utf-8') as f:
            try:
                return json.load(f)
            except json.JSONDecodeError:
                return []  # Return empty if file is corrupted or empty
    return []

# Function to generate a unique filename if conflict occurs
def get_unique_filename(directory, filename, extension):
    new_filename = filename
    counter = 1
    while os.path.exists(os.path.join(directory, new_filename + extension)):
        new_filename = f"{filename}_{counter}"
        counter += 1
    return new_filename + extension

# Function to generate product data from images
def generate_json(image_dir, existing_data):
    product_list = existing_data[:]  # Copy existing data
    product_id = max((item["id"] for item in existing_data), default=0) + 1  # Get next ID

    for filename in os.listdir(image_dir):
        if filename.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):  
            old_path = os.path.join(image_dir, filename)
            base_name, extension = os.path.splitext(filename)
            
            # Extract and clean name
            cleaned_name = clean_filename(base_name)
            cleaned_name = re.sub(r'\b(men|women|wmns|kids)\b', '', cleaned_name, flags=re.IGNORECASE).strip()
            
            # Determine category
            category = None
            for cat in categories:
                if base_name.lower().startswith(cat.lower()):
                    category = cat.capitalize()
                    break
            
            # Generate description
            description = generate_description(cleaned_name)
            
            # Ensure unique image name
            formatted_image_name = re.sub(r'[^a-zA-Z0-9_-]', '', cleaned_name.replace(' ', '_'))
            unique_filename = get_unique_filename(image_dir, formatted_image_name, extension)
            new_path = os.path.join(image_dir, unique_filename)
            
            # Rename file only if the name changes
            if old_path != new_path:
                os.rename(old_path, new_path)
            
            # Assign image path in React public folder
            image_path = f"/data/images/{unique_filename}"
            
            # Assign random attributes
            price = random.choice(prices)
            rating = round(random.uniform(1, 5), 2)  # Rating between 1 and 5
            stock_status = "inStock" if random.random() < 0.7 else "outOfStock"
            color = random.choice(colors)
            
            # Construct the product entry
            product = {
                "id": product_id,
                "name": cleaned_name,
                "category": category if category else "Uncategorized",
                "description": description,
                "price": price,
                "rating": rating,
                "stockStatus": stock_status,
                "color": color,
                "imagePath": image_path
            }
            
            product_list.append(product)
            product_id += 1

    return product_list

# Function to save JSON data safely
def save_json(data, json_file):
    try:
        with open(json_file, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=4, ensure_ascii=False)
        print(f"Successfully updated '{json_file}' with {len(data)} products.")
    except Exception as e:
        print(f"Error writing to JSON file: {e}")

# Main execution
image_directory = get_image_directory()
existing_data = load_existing_data(json_file)
updated_data = generate_json(image_directory, existing_data)
save_json(updated_data, json_file)

# Debugging prints
print(f"Total Products Processed: {len(updated_data)}")
print("Sample Product Entry:", updated_data[:3])  # Print the first 3 products for verification
print("Saving JSON to:", json_file)

