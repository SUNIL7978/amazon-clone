import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name:"Sunil",
            email:"admin@example.com",
            password: bcrypt.hashSync('123456'),
            isAdmin:true

        },
        {
            name:"Sachin",
            email:"user@example.com",
            password: bcrypt.hashSync('123456'),
            isAdmin:false

        },

    ],
    
    products: [
        {
            // _id: 1,
            "slug": "Levi's SweertShirt",
            "title": "Levi's SweertShirt",
            "price": 1268,
            "description": "Make heads turn everywhere you go when you don the trendy Levi's Men's Regular Fit Hooded Sweatshirt. It features a distinctive graphic pattern and is designed in a black hue. Made from soft cotton material, this hooded neck sweatshirt features full sleeves.",
            "category": "Men's SweertShirt",
            "brand": "Levi's",
            "image": "https://m.media-amazon.com/images/I/71GfcHITo3L._AC_UL320_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/71GfcHITo3L._AC_UL320_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/81iEBHCcSpL._UL1500_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61BF56TKN1L._UL1500_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/81BXpdIvrpL._UL1500_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 10,
            "rating": {
                "rate": 3.9,
                "review": 50,
                "count": 120
            }
        },
        {
            // _id: 2,
            "slug": "Puma SweertShirt",
            "title": "Puma SweertShirt",
            "price": 3249,
            "description": "Puma MAPF1 Logo Hoodie",
            "category": "Men's SweertShirt",
            "brand": "Puma",
            "image": "https://m.media-amazon.com/images/I/61StJOUSfdL._UX679_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61StJOUSfdL._UX679_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/51qEUluM5oL._UL1200_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/51FEA+U4bvL._UL1200_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/51OjNU4-unL._UL1200_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 5,
            "rating": {
                "rate": 4.5,
                "review": 50,
                "count": 300
            }
        },

        {
            // _id: 3,
            "slug": "U.S. POLO ASSN. T-shirt",
            "title": "U.S. POLO ASSN. T-shirt",
            "price": 521,
            "description": "U.S. Polo Assn. Men's Regular Fit Solid T-shirt",
            "category": "T-shirt",
            "brand": "U.S. POLO ASSN.",
            "image": "https://m.media-amazon.com/images/I/817rvBhgYqL._UX569_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/817rvBhgYqL._UX569_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61-uRv9clkL._UX466_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/71o1g97RjdL._UX466_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/71dlPxClGAL._UX569_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 9,
            "rating": {
                "rate": 4.5,
                "review": 50,
                "count": 300
            }
        },
        {
            // _id: 4,
            "slug": "AMERICAN CREW Men's Polo",
            "title": "AMERICAN CREW Men's Polo Collar Half Sleeve T-Shirt",
            "price": 664,
            "description": "Regular Fit Half Sleeve Polo is made of comfortable, Bio Washed cotton-poly pique fabric, a three-button placket, and ribbed cuffs for a classic look.",
            "category": "men's clothing",
            "brand": "U.S. POLO ASSN.",
            "image": "https://m.media-amazon.com/images/I/61K4nQduSLL._UY606_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61K4nQduSLL._UY606_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61-5GBk-AnL._UL1453_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61HLFMceTBL._UL1433_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61yPUtUFG0L._UL1500_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 10,
            "rating": {
                "rate": 3.5,
                "review": 78,
                "count": 300
            }
        },
        {
            // _id: 5,
            "slug": "U.S. POLO ASSN. Mens Striped Cotton Crew Neck T-Shirt",
            "title": "U.S. POLO ASSN. Mens Striped Cotton Crew Neck T-Shirt",
            "price": 948,
            "description": "Premium Super combed cotton Stripe jersey fabric is soft & comfortable for all day wear due to its good absorbency & breathability",
            "category": "men's clothing",
            "brand": "U.S. POLO ASSN.",
            "image": "	https://m.media-amazon.com/images/I/615LuCaivAL._UL1100_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/615LuCaivAL._UL1100_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/517ikp7SNEL._UL1100_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61czsUrYtkL._UL1100_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61kk4ro4MaL._UL1100_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 11,
            "rating": {
                "rate": 4.5,
                "review": 28,
                "count": 300
            }
        },
        {
            // _id: 6,
            "slug": "US Polo Association Mens Abor Sneakers",
            "title": "US Polo Association Mens Abor Sneakers",
            "price": 1620,
            "description": "Sole: Thermoplastic Elastomers",
            "category": "men's clothing",
            "brand": "U.S. POLO ASSN.",
            "image": "https://m.media-amazon.com/images/I/81JETmRJe2L._UY575_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/81JETmRJe2L._UY575_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/81ZezGnaxhL._UL1500_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/811ldmMm+sL._UL1500_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/811ldmMm+sL._UL1500_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 3,
            "rating": {
                "rate": 2.5,
                "review": 65,
                "count": 200
            }
        },
        {
            // _id: 7,
            "slug": "Puma Unisex-Adult Smash L Leather Sneakers",
            "title": "Puma Unisex-Adult Smash L Leather Sneakers",
            "price": 2469,
            "description": "Style Name:-Smash Leather Sneakers",
            "category": "Men's Shoes",
            "brand": "Puma",
            "image": "https://m.media-amazon.com/images/I/61V0VgAuu7L._UY625_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61V0VgAuu7L._UY625_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/71BfM2wUKnL._UL1500_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61Y6xf3AXCL._UL1500_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61Y6xf3AXCL._UL1500_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 5,
            "rating": {
                "rate": 4,
                "review": 98,
                "count": 200
            }
        },
        {
            // _id: 8,
            "slug": "Skybags Brat Black 46 Cms Casual Backpack",
            "title": "Skybags Brat Black 46 Cms Casual Backpack",
            "price": 669,
            "description": "Combination of functional & safety features in stylish design, Soft mesh back with 8 mm foam padded 2 Main Compartment, 1 Slip In Pocket inside the bag, Printed Design, Mesh bottle holder on the side,",
            "category": "BackPack",
            "brand": "SkyBag",
            "image": "https://m.media-amazon.com/images/I/810s53kR8tL._UY741_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/810s53kR8tL._UY741_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/815VZl7KpvL._UL1500_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/91ePHt2-AqL._UL1500_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/91hPgFJThmL._UL1500_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 6,
            "rating": {
                "rate": 3.5,
                "review": 55,
                "count": 200
            }
        },
        {
            // _id: 9,
            "slug": "Apple iPhone 14 Pro Max 128GB Silver",
            "title": "Apple iPhone 14 Pro Max 128GB Silver",
            "price": 139900,
            "description": "17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion",
            "category": "Mobile",
            "brand": "Apple",
            "image": "https://m.media-amazon.com/images/I/61nzPMNY8zL._SX679_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61nzPMNY8zL._SX679_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61h4yLWIVsL._SL1500_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/71dKjvLPkAL._SL1500_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/91wGCiIAniL._SL1500_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 6,
            "rating": {
                "rate": 4,
                "review": 63,
                "count": 200
            }
        },
        {
            // _id: 10,
            "slug": "Apple Watch Ultra GPS",
            "title": "Apple Watch Ultra GPS + Cellular, 49mm Titanium Case with Orange Alpine Loop - Small",
            "price": 80000,
            "description": "Specialized features, sensors, and three new bands designed for exploration, adventure, and endurance 49-millimetre aerospace-grade titanium case for an ideal balance of weight, strength and corrosion resistance The largest, brightest Apple Watch display for improved legibility in all conditions",
            "category": "Watch",
            "brand": "Apple",
            "image": "https://m.media-amazon.com/images/I/91z5KuonXrL._SX679_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/91z5KuonXrL._SX679_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/81LNgb-7FnL._SL1500_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/81mik1zN55L._SL1500_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/81mik1zN55L._SL1500_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 8,
            "rating": {
                "rate": 4.3,
                "review": 63,
                "count": 200
            }
        },
        {
            // _id: 11,
            "slug": "2021 Apple MacBook Pro",
            "title": "2021 Apple MacBook Pro (16-inch/41.05 cm, Apple M1 Max chip with 10‑core CPU and 32‑core GPU, 32GB RAM, 1TB SSD) - Silver",
            "price": 309990,
            "description": "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games 16-core Neural Engine for up to 5x faster machine learning performance Longer battery life, up to 21 hours Up to 64GB of unified memory so everything you do is fast and fluid Up to 8TB of super-fast SSD storage launches apps and opens files in an instant",
            "category": "Laptop",
            "brand": "Apple",
            "image": "https://m.media-amazon.com/images/I/61Y30DpqRVL._SX679_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61Y30DpqRVL._SX679_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/71ooAuqn7sL._SL1500_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61JqllsE+DL._SL1500_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/818mB1ifjfL._SL1500_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 10,
            "rating": {
                "rate": 4.5,
                "review": 50,
                "count": 200
            }
        },

        {
            // _id: 12,
            "slug": "Lenovo Yoga AIO 7 27 4K UHD",
            "title": "Lenovo Yoga AIO 7 27 4K UHD Touchscreen All-in-One Desktop (AMD Ryzen 7 5800H/16GB/1TB SSD/Windows 11/ Home 64/Office 2021/AMD Radeon RX6600M 8GB GDDR6), Grey ",
            "price": 212390,
            "description": "Lenovo Yoga AIO 7 27 4K UHD Touchscreen All-in-One Desktop (AMD Ryzen 7 5800H/16GB/1TB SSD/Windows 11/ Home 64/Office 2021/AMD Radeon RX6600M 8GB GDDR6), Grey",
            "category": "Laptop",
            "brand": "Lenovo",
            "image": "https://m.media-amazon.com/images/I/81M31YD0hCL._SX522_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/81M31YD0hCL._SX522_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61aaPnWJ-uL._SL1000_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61Moe46zGVL._SL1000_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/719R8h-Xn2L._SL1500_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 10,
            "rating": {
                "rate": 4.5,
                "review": 50,
                "count": 200
            }
        },
        {
            // _id: 13,
            "slug": "New JBL Tune 130NC TWS",
            "title": "New JBL Tune 130NC TWS | Active Noise Cancellation Earbuds (Upto 40dB) | JBL APP - Adjust EQ for Extra Bass | Massive 40Hrs Playtime | Legendary JBL Sound | 4Mics for Clear Calls | BT 5.2 (Black)",
            "price": 4490,
            "description": "ACTIVE NOISE CANCELLATION: Hear more of what you want, less of what you don’t with the JBL Tune 130NC. The Active Noise Cancelling technology with 4 mics on the earbud lets you minimize audio distractions.UPTO 40 HOURS OF PLAYTIME: Keep the music going and never miss a beat with 40 (30+10) hours of playtime with Bluetooth (ANC OFF). Enjoying your music with ANC ON provides you playtime of 8 Hours on the earbuds and 24 Hours from the case.",
            "category": "Earbuds",
            "brand": "JBL",
            "image": "https://m.media-amazon.com/images/I/510B7v93YKL._SX679_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/510B7v93YKL._SX679_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/81f61iF1g5L._SL1500_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61qPPOZ5bML._SL1500_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/715TzhC4r6L._SL1500_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 4,
            "rating": {
                "rate": 4,
                "review": 45,
                "count": 200
            }
        },
        {
            // _id: 14,
            "slug": "INDO ERA Maroon Flared Embroidered",
            "title": "INDO ERA Maroon Flared Embroidered A-Line Dresses (ED9WN8624)",
            "price": 1699,
            "description": "INDO ERA Maroon Flared Embroidered A-Line Dresses (ED9WN8624)",
            "category": "Women",
            "brand": "Indo Era",
            "image": "https://m.media-amazon.com/images/I/71qebpSRqkL._UY741_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/71qebpSRqkL._UY741_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61YAVwgI0yL._UL1500_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/71kSk+Olq6L._UL1500_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/71T+d6MmEXL._UL1500_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 5,
            "rating": {
                "rate": 3.5,
                "review": 88,
                "count": 200
            }
        },
        {
            // _id: 15,
            "slug": "Indo Era Women's White Floral",
            "title": "Indo Era Women's White Floral Flared kurta Sets With Dupatta(KH0WH8725)",
            "price": 1799,
            "description": "Top Color : White Top Fabric : Cotton Blend|| Bottom Color : White Bottom Fabric : Cotton Blend || Dupatta Color : White Dupatta Fabric : Organza Top Style :Regular , Bottom Type : Pants , Top Shape : Straight Sleeve : 3/4 Sleeve , Sleeve Type : Regular Sleeves, Neck Style : Round",
            "category": "Women",
            "brand": "Indo Era",
            "image": "https://m.media-amazon.com/images/I/61FkXZHL3zL._UL1500_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61FkXZHL3zL._UL1500_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61CRUEMqqWL._UL1500_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/7183oC6UvRL._UL1500_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/81u+daHLw3L._UL1500_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 7,
            "rating": {
                "rate": 4.5,
                "review": 56,
                "count": 200
            }
        },
        {
            // _id: 16,
            "slug": "Nifty Women's Slim Fit Cotton Jeans",
            "title": "Nifty Women's Slim Fit Cotton Jeans",
            "price": 449,
            "description": "Care Instructions: Machine Wash Material: 70.5% Cotton, 27.5% Poly, 2% Spandex Mid Rise Stretchable Machine Wash Cold",
            "category": "Women Jeans",
            "brand": "Nifty",
            "image": "https://m.media-amazon.com/images/I/61pwV5yI5qL._UX679_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61pwV5yI5qL._UX679_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61Kjhndy0eL._UL1500_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/617bSnRrWNL._UL1500_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/617bSnRrWNL._UL1500_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 9,
            "rating": {
                "rate": 3.6,
                "review": 35,
                "count": 200
            }
        },
        {
            // _id: 17,
            "slug": "United Colors of Benetton Baby Boys' Checkered Regular Fit Shirt",
            "title": "United Colors of Benetton Baby Boys' Checkered Regular Fit Shirt",
            "price": 669,
            "description": "United Colors of Benetton Baby Boys' Checkered Regular Fit Shirt",
            "category": "Kids Shirt",
            "brand": "United Colors of Benetton",
            "image": "https://m.media-amazon.com/images/I/91q2u8SkprL._UX679_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/91q2u8SkprL._UX679_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/91LKfpi1-bL._UL1500_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/91zeMEloDML._UL1500_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/81SEm7ELZrL._UL1500_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 0,
            "rating": {
                "rate": 2.5,
                "review": 25,
                "count": 200
            }
        },
        {
            // _id: 18,
            "slug": "Max Baby Boy's Regular Fit Cotton Joggers",
            "title": "Max Baby Boy's Regular Fit Cotton Joggers (M21BVE17NAVY_Navy_6 Months-12 Months)",
            "price": 499,
            "description": "Care Instructions: Machine Wash MAX Appliqued Drawstring Waist Joggers Blue 100 COTTON",
            "category": "Kids Jeans",
            "brand": "Max",
            "image": "https://m.media-amazon.com/images/I/81oJGmcC4OS._UY606_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/81oJGmcC4OS._UY606_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/81xZgoAYpfS._UY445_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/81xZgoAYpfS._UY445_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/81xZgoAYpfS._UY445_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 8,
            "rating": {
                "rate": 5,
                "review": 96,
                "count": 200
            }
        },
        {
            // _id: 19,
            "slug": "Redmi 10A (Slate Grey, 4GB RAM, 64GB Storage)",
            "title": "Redmi 10A (Slate Grey, 4GB RAM, 64GB Storage)",
            "price": 9499,
            "description": "Redmi 10A (Slate Grey, 4GB RAM, 64GB Storage) | 2 Ghz Octa Core Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 5GB RAM with RAM Booster",
            "category": "Mobile",
            "brand": "Redmi",
            "image": "https://m.media-amazon.com/images/I/71kVEmAMyEL._SX679_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/71kVEmAMyEL._SX679_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/71pSrtP5W8L._SL1500_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61wj8I-7xIL._SL1500_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/81fwie0wBfL._SL1500_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 11,
            "rating": {
                "rate": 4.2,
                "review": 23,
                "count": 200
            }
        },
        {
            // _id: 20,
            "slug": "Seagate One Touch 2TB External HDD",
            "title": "Seagate One Touch 2TB External HDD with Password Protection – Light Blue, for Windows and Mac, with 3 yr Data Recovery Services, and 4 Months Adobe CC Photography (STKY2000402)",
            "price": 5999,
            "description": "Safely and easily manage 2 TB of photos, videos, movies, and more with hardware encrypted password-protection.Get an extra layer of protection for your data with the included 3 year Rescue Data Recovery Services.The perfect external hard drive for Windows or Mac, simply back up files with a single click or schedule automatic daily, weekly or monthly backups. Reformatting may be required for use with Time Machine.The perfect compliment to personal aesthetic, this portable external hard drive features a minimalist brushed metal enclosure.Edit, manage, and share photos with a four-month membership to Adobe Creative Cloud Photography plan and one-year complimentary subscription to Mylio Create.",
            "category": "Hard Disk",
            "brand": "Seagate",
            "image": "https://m.media-amazon.com/images/I/818xsOzJb7L._SX679_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/818xsOzJb7L._SX679_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/51cC62bA2CS._SL1000_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/91n-CAE12eS._SL1500_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/81PJ2XXw6hL._SL1500_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 5,
            "rating": {
                "rate": 3.5,
                "review": 89,
                "count": 200
            }
        },

        {
            // _id: 21,
            "slug": "HP Z3700 Wireless Optical Mouse with USB",
            "title": "HP Z3700 Wireless Optical Mouse with USB Receiver and 2.4GHz Wireless Connection/ 1200DPI / 16 Months Long Battery Life/Ambidextrous and Slim Design (Modern Gold)",
            "price": 899,
            "description": "Designed with flair, the sleek design complements your favorite HP devices and fits comfortably anywhere The 2.4GHz wireless connection reliably keeps you hooked up With up to 16 months of life on a single AA battery, this mouse was designed to push the limits Blue LED technology lets your mouse function on a wide range of surfaces, so you can work from almost anywhere",
            "category": "Wireless, Portable",
            "brand": "HP",
            "image": "https://m.media-amazon.com/images/I/614DbY9tQsL._SL1500_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/614DbY9tQsL._SL1500_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61C6q+kkzZL._SL1500_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61C18DbSi8L._SL1500_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/6187kx0zoGL._SL1500_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 5,
            "rating": {
                "rate": 4.5,
                "review": 89,
                "count": 200
            }
        },

        {
            // _id: 22,
            "slug": "Apple iPhone 14 Plus 128GB Blue",
            "title": "Apple iPhone 14 Plus 128GB Blue",
            "price": 89900,
            "description": "16.95 cm (6.7-inch) Super Retina XDR display Advanced camera system for better photos in any light Cinematic mode now in 4K Dolby Vision up to 30 fps Action mode for smooth, steady, handheld videos Vital safety technology — Crash Detection calls for help when you can’t",
            "category": "Mobile",
            "brand": "Apple",
            "image": "https://m.media-amazon.com/images/I/61BGE6iu4AL._SL1500_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61BGE6iu4AL._SL1500_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/81LtCGVH+dL._SL1500_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 5,
            "rating": {
                "rate": 4,
                "review": 89,
                "count": 200
            }
        },

        {
            // _id: 23,
            "slug": "Apple iPhone 13 Mini (256 GB) - Green",
            "title": "Apple iPhone 13 Mini (256 GB) - Green",
            "price": 74900,
            "description": "13 cm (5.4-inch) Super Retina XDR display Cinematic mode adds shallow depth of field and shifts focus automatically in your videos Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording A15 Bionic chip for lightning-fast performance",
            "category": "Mobile",
            "brand": "Apple",
            "image": "https://m.media-amazon.com/images/I/61cMQeVEGKL._SL1500_.jpg",
            "images": [
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61cMQeVEGKL._SL1500_.jpg",
                    "filename": "prod-1.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/61J9KUops4L._SL1500_.jpg",
                    "filename": "prod-2.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/71AormTzRHL._SL1500_.jpg",
                    "filename": "prod-3.jpg",
                    "size": 1080,
                    "type": "image/png"
                },
                {
                    "width": 1080,
                    "height": 650,
                    "url": "https://m.media-amazon.com/images/I/81Yzptxk8IL._SL1500_.jpg",
                    "filename": "prod-4.jpg",
                    "size": 1080,
                    "type": "image/jpg"
                }
            ],
            "inStock": 10,
            "rating": {
                "rate": 4,
                "review": 89,
                "count": 200
            }
        },
    ],
}

export default data