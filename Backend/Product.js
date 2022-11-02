const Product = {
    products: [
        {
            "id": 1,
            "slug": "Levi's SweertShirt",
            "title": "Levi's SweertShirt",
            "price": 1268,
            "description": "Levi's Men's Cotton Hooded Neck Sweatshirt",
            "category": "Men's SweertShirt",
            "brand" : "Levi's",
            "image": "https://m.media-amazon.com/images/I/71GfcHITo3L._AC_UL320_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        },
        {
            "id": 2,
            "slug": "Puma SweertShirt",
            "title": "Puma SweertShirt",
            "price": 3249,
            "description": "Puma MAPF1 Logo Hoodie",
            "category": "Men's SweertShirt",
            "brand" : "Puma",
            "image": "https://m.media-amazon.com/images/I/61StJOUSfdL._UX679_.jpg",
            "rating": {
                "rate": 4,
                "count": 300
            }
        },
            
        {
            "id": 3,
            "slug": "U.S. POLO ASSN. T-shirt",
            "title": "U.S. POLO ASSN. T-shirt",
            "price":521,
            "description": "U.S. Polo Assn. Men's Regular Fit Solid T-shirt",
            "category": "T-shirt",
            "brand" : "U.S. POLO ASSN.",
            "image": "https://m.media-amazon.com/images/I/817rvBhgYqL._UX569_.jpg",
            "rating": {
                "rate": 4.5,
                "count": 300
            }
        },
        {
            "id": 4,
            "slug": "AMERICAN CREW Men's Polo",
            "title": "AMERICAN CREW Men's Polo Collar Half Sleeve T-Shirt",
            "price":664,
            "description": "Regular Fit Half Sleeve Polo is made of comfortable, Bio Washed cotton-poly pique fabric, a three-button placket, and ribbed cuffs for a classic look.",
            "category": "men's clothing",
            "brand" : "U.S. POLO ASSN.",
            "image": "https://m.media-amazon.com/images/I/61K4nQduSLL._UY606_.jpg",
            "rating": {
                "rate": 4.5,
                "count": 300
            }
        },
        {
            "id": 5,
            "slug": "U.S. POLO ASSN. Mens Striped Cotton Crew Neck T-Shirt",
            "title": "U.S. POLO ASSN. Mens Striped Cotton Crew Neck T-Shirt",
            "price":948,
            "description": "Premium Super combed cotton Stripe jersey fabric is soft & comfortable for all day wear due to its good absorbency & breathability",
            "category": "men's clothing",
            "brand" : "U.S. POLO ASSN.",
            "image": "https://m.media-amazon.com/images/I/615LuCaivAL._UX679_.jpg",
            "rating": {
                "rate": 4.5,
                "count": 300
            }
        },
        {
            "id": 6,
            "slug": "US Polo Association Mens Abor Sneakers",
            "title": "US Polo Association Mens Abor Sneakers",
            "price": 1620,
            "description": "Sole: Thermoplastic Elastomers",
            "category": "men's clothing",
            "brand" : "U.S. POLO ASSN.",
            "image": "https://m.media-amazon.com/images/I/81JETmRJe2L._UY575_.jpg",
            "rating": {
                "rate": 4,
                "count": 200
            }
        },
        {
            "id": 7,
            "slug": "Puma Unisex-Adult Smash L Leather Sneakers",
            "title": "Puma Unisex-Adult Smash L Leather Sneakers",
            "price": 2469,
            "description": "Style Name:-Smash Leather Sneakers",
            "category": "Men's Shoes",
            "brand" : "Puma",
            "image": "https://m.media-amazon.com/images/I/61V0VgAuu7L._UY625_.jpg",
            "rating": {
                "rate": 4,
                "count": 200
            }
        },
        {
            "id": 8,
            "slug": "Skybags Brat Black 46 Cms Casual Backpack",
            "title": "Skybags Brat Black 46 Cms Casual Backpack",
            "price": 669,
            "description": "Combination of functional & safety features in stylish design, Soft mesh back with 8 mm foam padded 2 Main Compartment, 1 Slip In Pocket inside the bag, Printed Design, Mesh bottle holder on the side,",
            "category": "BackPack",
            "brand" : "SkyBag",
            "image": "https://m.media-amazon.com/images/I/810s53kR8tL._UY741_.jpg",
            "rating": {
                "rate": 3.5,
                "count": 200
            }
        },
        {
            "id": 9,
            "slug": "Apple iPhone 14 Pro Max 128GB Silver",
            "title": "Apple iPhone 14 Pro Max 128GB Silver",
            "price": 139900,
            "description": "17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion",
            "category": "Mobile",
            "brand" : "Apple",
            "image": "https://m.media-amazon.com/images/I/61nzPMNY8zL._SX679_.jpg",
            "rating": {
                "rate": 4,
                "count": 200
            }
        },
        {
            "id": 10,
            "slug": "Apple Watch Ultra GPS",
            "title": "Apple Watch Ultra GPS + Cellular, 49mm Titanium Case with Orange Alpine Loop - Small",
            "price": 80000,
            "description": "Specialized features, sensors, and three new bands designed for exploration, adventure, and endurance 49-millimetre aerospace-grade titanium case for an ideal balance of weight, strength and corrosion resistance The largest, brightest Apple Watch display for improved legibility in all conditions",
            "category": "Watch",
            "brand" : "Apple",
            "image": "https://m.media-amazon.com/images/I/91z5KuonXrL._SX679_.jpg",
            "rating": {
                "rate": 4,
                "count": 200
            }
        },
        {
            "id": 11,
            "slug": "2021 Apple MacBook Pro",
            "title": "2021 Apple MacBook Pro (16-inch/41.05 cm, Apple M1 Max chip with 10‑core CPU and 32‑core GPU, 32GB RAM, 1TB SSD) - Silver",
            "price": 309990,
            "description": "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games 16-core Neural Engine for up to 5x faster machine learning performance Longer battery life, up to 21 hours Up to 64GB of unified memory so everything you do is fast and fluid Up to 8TB of super-fast SSD storage launches apps and opens files in an instant",
            "category": "Laptop",
            "brand" : "Apple Laptop",
            "image": "https://m.media-amazon.com/images/I/61Y30DpqRVL._SX679_.jpg",
            "rating": {
                "rate": 4,
                "count": 200
            }
        },
        {
            "id": 12,
            "slug": "Lenovo Yoga AIO 7 27 4K UHD ",
            "title": "Lenovo Yoga AIO 7 27 4K UHD ",
            "price": 212390,
            "description": "Lenovo Yoga AIO 7 27 4K UHD Touchscreen All-in-One Desktop (AMD Ryzen 7 5800H/16GB/1TB SSD/Windows 11/ Home 64/Office 2021/AMD Radeon RX6600M 8GB GDDR6), Grey",
            "category": "Laptop",
            "brand" : "Lenovo",
            "image": "https://m.media-amazon.com/images/I/81M31YD0hCL._SX522_.jpg",
            "rating": {
                "rate": 4,
                "count": 200
            }
        },
        {
            "id": 13,
            "slug": "New JBL Tune 130NC TWS",
            "title": "New JBL Tune 130NC TWS",
            "price": 4490,
            "description": "New JBL Tune 130NC TWS | Active Noise Cancellation Earbuds (Upto 40dB) | JBL APP - Adjust EQ for Extra Bass | Massive 40Hrs Playtime | Legendary JBL Sound | 4Mics for Clear Calls | BT 5.2 (Black)",
            "category": "Earbuds",
            "brand" : "JBL",
            "image": "https://m.media-amazon.com/images/I/510B7v93YKL._SX679_.jpg",
            "rating": {
                "rate": 4,
                "count": 200
            }
        },
        {
            "id": 14,
            "slug": "INDO ERA Maroon Flared Embroidered",
            "title": "INDO ERA Maroon Flared Embroidered A-Line Dresses (ED9WN8624)",
            "price": 1699,
            "description": "INDO ERA Maroon Flared Embroidered A-Line Dresses (ED9WN8624)",
            "category": "Women",
            "brand" : "Indo Era",
            "image": "https://m.media-amazon.com/images/I/71qebpSRqkL._UY741_.jpg",
            "rating": {
                "rate": 4,
                "count": 200
            }
        },
        {
            "id": 15,
            "slug": "Indo Era Women's White Floral",
            "title": "Indo Era Women's White Floral Flared kurta Sets With Dupatta(KH0WH8725)",
            "price": 1799,
            "description": "Top Color : White Top Fabric : Cotton Blend|| Bottom Color : White Bottom Fabric : Cotton Blend || Dupatta Color : White Dupatta Fabric : Organza Top Style :Regular , Bottom Type : Pants , Top Shape : Straight Sleeve : 3/4 Sleeve , Sleeve Type : Regular Sleeves, Neck Style : Round",
            "category": "Women",
            "brand" : "Indo Era",
            "image": "https://m.media-amazon.com/images/I/61FkXZHL3zL._UL1500_.jpg",
            "rating": {
                "rate": 4,
                "count": 200
            }
        },
        {
            "id": 16,
            "slug": "Nifty Women's Slim Fit Cotton Jeans",
            "title": "Nifty Women's Slim Fit Cotton Jeans",
            "price": 449,
            "description": "Care Instructions: Machine Wash Material: 70.5% Cotton, 27.5% Poly, 2% Spandex Mid Rise Stretchable Machine Wash Cold",
            "category": "Women Jeans",
            "brand" : "Nifty",
            "image": "https://m.media-amazon.com/images/I/61pwV5yI5qL._UX679_.jpg",
            "rating": {
                "rate": 4,
                "count": 200
            }
        },
        {
            "id": 17,
            "slug": "United Colors of Benetton Baby Boys' Checkered Regular Fit Shirt",
            "title": "United Colors of Benetton Baby Boys' Checkered Regular Fit Shirt",
            "price": 669,
            "description": "United Colors of Benetton Baby Boys' Checkered Regular Fit Shirt",
            "category": "Kids Shirt",
            "brand" : "United Colors of Benetton",
            "image": "https://m.media-amazon.com/images/I/91q2u8SkprL._UX679_.jpg",
            "rating": {
                "rate": 4,
                "count": 200
            }
        },
        {
            "id": 18,
            "slug": "Max Baby Boy's Regular Fit Cotton Joggers",
            "title": "Max Baby Boy's Regular Fit Cotton Joggers (M21BVE17NAVY_Navy_6 Months-12 Months)",
            "price": 499,
            "description": "Care Instructions: Machine Wash MAX Appliqued Drawstring Waist Joggers Blue 100 COTTON",
            "category": "Kids Jeans",
            "brand" : "Max",
            "image": "https://m.media-amazon.com/images/I/81oJGmcC4OS._UY606_.jpg",
            "rating": {
                "rate": 4,
                "count": 200
            }
        },
        {
            "id": 19,
            "slug": "Redmi 10A (Slate Grey, 4GB RAM, 64GB Storage)",
            "title": "Redmi 10A (Slate Grey, 4GB RAM, 64GB Storage)",
            "price": 9499,
            "description": "Redmi 10A (Slate Grey, 4GB RAM, 64GB Storage) | 2 Ghz Octa Core Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 5GB RAM with RAM Booster",
            "category": "Mobile",
            "brand" : "Redmi",
            "image": "https://m.media-amazon.com/images/I/71kVEmAMyEL._SX679_.jpg",
            "rating": {
                "rate": 4,
                "count": 200
            }
        },
        {
            "id": 20,
            "slug": "Seagate One Touch 2TB External HDD",
            "title": "Seagate One Touch 2TB External HDD",
            "price":5999,
            "description": "Seagate One Touch 2TB External HDD with Password Protection – Light Blue, for Windows and Mac, with 3 yr Data Recovery Services, and 4 Months Adobe CC Photography (STKY2000402)",
            "category": "Hard Disk",
            "brand" : "Seagate",
            "image": "https://m.media-amazon.com/images/I/818xsOzJb7L._SX679_.jpg",
            "rating": {
                "rate": 4,
                "count": 200
            }
        },
    ],
}

export default Product