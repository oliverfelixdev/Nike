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


def generate_json(output_file="nikedata.json"):
    image_folder = os.path.join(os.path.dirname(__file__), "images")
    data = []
    image_files = sorted(os.listdir(image_folder))  # Sorting ensures ID order

    id_counter = 1

    for image in image_files:
        if not image.lower().endswith(("jpg", "jpeg", "png", "gif")):
            continue  # Skip non-image files

        name, _ = os.path.splitext(image)  # Remove extension

        category = ""
        if name.lower().startswith("kids"):
            category = "kids"
        elif name.lower().startswith("men"):
            category = "men"
        elif name.lower().startswith("women"):
            category = "women"

        # Remove all words starting with kids, men, or women in title
        title = re.sub(r"\b(kids|men|women)\w*", "", name, flags=re.IGNORECASE).strip()

        # Generate a random description using title
        description = random.choice(description_templates).format(name=title)

        # Generate random rating (above 3.0)
        rating = round(random.uniform(3.0, 5.0), 1)

        # Select 2 or 3 random colors
        color_selection = random.sample(colors, random.randint(2, 3))

        # Select a random price
        price = random.choice(prices)

        # Determine stock status (70% in stock, 30% out of stock)
        stock_status = "inStock" if random.random() < 0.7 else "outOfStock"

        data.append(
            {
                "id": id_counter,
                "title": title,
                "category": category,
                "description": description,
                "rating": rating,
                "colors": color_selection,
                "price": price,
                "stockStatus": stock_status,
            }
        )

        id_counter += 1

    with open(output_file, "w") as json_file:
        json.dump(data, json_file, indent=4)

    print(f"JSON file '{output_file}' created successfully!")


# Example usage
generate_json()
