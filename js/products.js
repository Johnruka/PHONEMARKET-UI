const products = [
    {
        title: "Lenovo ThinkPad X1 Carbon Gen 9",
        image: "images/LenovoCarbon.png",
        description: "A lightweight, premium business laptop with exceptional durability and performance.",
        price: "$1,499",
        contactInfo: "alexlexicon@example.com",
        specs: {
            processor: "Intel Core i5/i7 (11th Gen)",
            display: "14\" FHD (1920 x 1080) or 4K UHD (3840 x 2160)",
            ram: "Up to 32GB LPDDR4x",
            storage: "Up to 1TB PCIe SSD",
            graphics: "Integrated Intel Iris Xe",
            batteryLife: "Up to 15 hours",
            weight: "Approximately 2.5 lbs (1.13 kg)"
        }
    },
    {
        title: "Asus ROG Zephyrus G14",
        image: "images/asuszen.png",
        description: "A powerful gaming laptop with a compact design and long battery life.",
        price: "$1,699",
        contactInfo: "alexlexicon@example.com",
        specs: {
            processor: "AMD Ryzen 9 5900HS",
            display: "14\" FHD (1920 x 1080) with 144Hz refresh rate",
            ram: "Up to 32GB DDR4",
            storage: "Up to 1TB NVMe SSD",
            graphics: "NVIDIA GeForce RTX 3060",
            batteryLife: "Up to 10 hours",
            weight: "Approximately 3.5 lbs (1.6 kg)"
        }
    },
    {
        title: "MSI GS66 Stealth",
        image: "images/msistealth.png",
        description: "A sleek gaming laptop that offers high performance and portability.",
        price: "$2,099",
        contactInfo: "alexlexicon@example.com",
        specs: {
            processor: "Intel Core i7/i9 (10th/11th Gen)",
            display: "15.6\" FHD (1920 x 1080) with 240Hz refresh rate",
            ram: "Up to 64GB DDR4",
            storage: "Up to 2TB NVMe SSD",
            graphics: "NVIDIA GeForce RTX 3080",
            batteryLife: "Up to 8 hours",
            weight: "Approximately 4.6 lbs (2.1 kg)"
        }
    },
    {
        title: "Dell XPS 15 (2021)",
        image: "images/dellxps.png",
        description: "A premium laptop known for its stunning display and robust performance.",
        price: "$1,799",
        contactInfo: "alexlexicon@example.com",
        specs: {
            processor: "Intel Core i5/i7/i9 (11th Gen)",
            display: "15.6\" FHD+ (1920 x 1200) or 4K OLED (3840 x 2400)",
            ram: "Up to 64GB DDR4",
            storage: "Up to 2TB PCIe SSD",
            graphics: "NVIDIA GeForce GTX 1650 Ti",
            batteryLife: "Up to 12 hours",
            weight: "Approximately 4.5 lbs (2.05 kg)"
        }
    },
    {
        title: "Apple MacBook Pro 14\" (M1 Pro)",
        image: "images/macbookpro.png",
        description: "A powerful laptop with impressive battery life and performance for professionals.",
        price: "$1,999",
        contactInfo: "alexlexicon@example.com",
        specs: {
            processor: "Apple M1 Pro (8-core CPU, 14-core GPU)",
            display: "14\" Liquid Retina XDR (3024 x 1964)",
            ram: "Up to 32GB Unified Memory",
            storage: "Up to 8TB SSD",
            graphics: "Integrated Apple M1 Pro GPU",
            batteryLife: "Up to 17 hours",
            weight: "Approximately 3.5 lbs (1.6 kg)"
        }
    },
    {
        title: "Razer Blade 15 (2021)",
        image: "images/razerblade.png",
        description: "A high-performance gaming laptop with a sleek design.",
        price: "$1,799",
        contactInfo: "alexlexicon@example.com",
        specs: {
            processor: "Intel Core i7 (10th/11th Gen)",
            display: "15.6\" FHD (1920 x 1080) with 144Hz or 4K OLED (3840 x 2160)",
            ram: "Up to 32GB DDR4",
            storage: "Up to 1TB PCIe SSD",
            graphics: "NVIDIA GeForce RTX 3060/3070/3080",
            batteryLife: "Up to 6 hours",
            weight: "Approximately 4.4 lbs (2.0 kg)"
        }
    },
    {
        title: "HP Spectre x360 (2021)",
        image: "images/hpspectre.png",
        description: "A versatile 2-in-1 laptop with a premium design and high performance.",
        price: "$1,599",
        contactInfo: "alexlexicon@example.com",
        specs: {
            processor: "Intel Core i5/i7 (11th Gen)",
            display: "13.3\" FHD (1920 x 1080) or 4K OLED (3840 x 2160)",
            ram: "Up to 16GB LPDDR4x",
            storage: "Up to 2TB PCIe SSD",
            graphics: "Integrated Intel Iris Xe",
            batteryLife: "Up to 15 hours",
            weight: "Approximately 2.8 lbs (1.27 kg)"
        }
    },
    {
        title: "Microsoft Surface Laptop 4",
        image: "images/microsoft.png",
        description: "A stylish laptop that offers great performance and a high-resolution touchscreen.",
        price: "$1,499",
        contactInfo: "alexlexicon@example.com",
        specs: {
            processor: "Intel Core i5/i7 or AMD Ryzen 5/7",
            display: "13.5\" or 15\" PixelSense (2256 x 1504 or 2496 x 1664)",
            ram: "Up to 32GB LPDDR4x",
            storage: "Up to 1TB SSD",
            graphics: "Integrated Intel Iris Xe or AMD Radeon",
            batteryLife: "Up to 19 hours",
            weight: "Approximately 2.79 lbs (1.27 kg)"
        }
    },
    {
        title: "Acer Swift X",
        image: "images/swiftx.png",
        description: "A lightweight laptop that is powerful enough for creative professionals.",
        price: "$1,399",
        contactInfo: "alexlexicon@example.com",
        specs: {
            processor: "AMD Ryzen 7 5800U",
            display: "14\" FHD (1920 x 1080) IPS",
            ram: "Up to 16GB LPDDR4x",
            storage: "Up to 1TB NVMe SSD",
            graphics: "NVIDIA GeForce RTX 3050",
            batteryLife: "Up to 12 hours",
            weight: "Approximately 2.65 lbs (1.2 kg)"
        }
    },
    {
        title: "Gigabyte AERO 15 OLED",
        image: "images/aero.png",
        description: "A creative laptop with an OLED display and powerful hardware.",
        price: "$1,899",
        contactInfo: "alexlexicon@example.com",
        specs: {
            processor: "Intel Core i7 (10th/11th Gen)",
            display: "15.6\" 4K OLED (3840 x 2160)",
            ram: "Up to 64GB DDR4",
            storage: "Up to 2TB PCIe SSD",
            graphics: "NVIDIA GeForce RTX 3070/3080",
            batteryLife: "Up to 8 hours",
            weight: "Approximately 4.4 lbs (2.0 kg)"
        }
    },
    {
        title: "Lenovo Legion 5 Pro",
        image: "images/legion5.png",
        description: "A high-performance gaming laptop with great thermal management.",
        price: "$1,499",
        contactInfo: "alexlexicon@example.com",
        specs: {
            processor: "AMD Ryzen 7 5800H",
            display: "16\" QHD (2560 x 1600) with 165Hz refresh rate",
            ram: "Up to 32GB DDR4",
            storage: "Up to 1TB NVMe SSD",
            graphics: "NVIDIA GeForce RTX 3060/3070",
            batteryLife: "Up to 6 hours",
            weight: "Approximately 5.5 lbs (2.5 kg)"
        }
    },
    {
        title: "Asus ProArt StudioBook 15",
        image: "images/proart.png",
        description: "Designed for creative professionals, this laptop offers excellent color accuracy.",
        price: "$1,899",
        contactInfo: "alexlexicon@example.com",
        specs: {
            processor: "Intel Core i7/i9 or AMD Ryzen 9",
            display: "15.6\" 4K UHD (3840 x 2160) or FHD",
            ram: "Up to 64GB",
            storage: "Up to 2TB PCIe SSD",
            graphics: "NVIDIA GeForce RTX 3060/3070",
            batteryLife: "TBD",
            weight: "TBD"
        }
    }
];

function showLaptopDetails(product) {
    document.getElementById('modal-laptop-image').src = product.image;
    document.getElementById('modal-laptop-description').textContent = product.description;
    document.getElementById('modal-laptop-contact').textContent = product.contactInfo; // Set contact information

    // Prepare specifications list
    const specsList = document.getElementById('modal-laptop-specs');
    specsList.innerHTML = ''; // Clear previous specifications
    for (const [key, value] of Object.entries(product.specs)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
        specsList.appendChild(listItem);
    }

    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('laptopDetailModal'));
    modal.show();
}


// Populate the product cards
const productContainer = document.getElementById("product-container");
products.forEach(product => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
        <div class="card text-center bg-dark text-white">
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text"><strong>${product.price}</strong></p>
                <button class="btn btn-success" onclick="showLaptopDetails(products[${products.indexOf(product)}])">Details</button>
            </div>
        </div>
    `;
    productContainer.appendChild(card);
});

    // Prepare specifications list
    const specsList = document.getElementById('modal-laptop-specs');
    specsList.innerHTML = ''; // Clear previous specifications
    for (const [key, value] of Object.entries(product.specs)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
        specsList.appendChild(listItem);
    }