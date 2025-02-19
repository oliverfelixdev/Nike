import os
import json
import re
import random

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
    "Elevate your everyday wear with the stylish and durable {name}.",
    "The {name} is built to provide superior comfort and lasting quality.",
    "Stay ahead of the trends with the modern and refined {name}.",
    "Perfect for any occasion, the {name} offers a seamless fusion of fashion and function.",
    "The {name} is crafted with premium materials for a sophisticated finish.",
    "Designed for those who demand more, the {name} delivers exceptional performance and style.",
]

colors = [
    "Rose",
    "Graphite",
    "Pebble",
    "Olive",
    "Coral",
    "Slate",
    "Mustard",
    "Indigo",
    "Stone",
    "Maroon",
    "Seafoam",
    "Charcoal",
    "Rust",
    "Sky",
    "Taupe",
    "Lavender",
    "Emerald",
    "Sand",
]
prices = [429, 199, 159, 259, 329, 899, 547, 699, 247]


def update_json_with_images(output_file="nikedata.json"):
    image_folder = os.path.join(os.path.dirname(__file__), "images")

    if not os.path.exists(output_file):
        print(f"Error: {output_file} not found.")
        return

    with open(output_file, "r") as json_file:
        data = json.load(json_file)

    image_files = sorted(os.listdir(image_folder))  # Sorting ID order

    for item, image in zip(data, image_files):
        if image.lower().endswith(("jpg", "jpeg", "png", "gif")):
            item["image"] = f"images/{image}"

    with open(output_file, "w") as json_file:
        json.dump(data, json_file, indent=4)

    print(f"Updated JSON file '{output_file}' with images successfully!")


# Example usage
update_json_with_images()
