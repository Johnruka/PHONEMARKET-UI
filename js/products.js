const products = [
    {
        title: "_iphone_16_pro_max",
        image: "images/apple-iphone-16-pro-max-3.jpg",
        description: "premium business Mobile phone with exceptional durability and performance.",
        price: "$1,429",
        contactInfo: "john@example.com",
        specs: {
            OS	: "iOS 18, upgradable to iOS 18.1"
           
           
           
    
     
        }
    },
    {
        title: "huawei-nova-13",
        image: "images/huavei-nova-13.jpg",
        description: "A Mobile phone that offers great performance and a high-resolution touchscreen.",
        price: "$1,022",
        contactInfo: "john@example.com",
        specs: {
            Type :	"OLED, 1B colors, HDR, 120Hz"
           
        }
    },
    {
        title: "huawei-pura-70-pro+",
        image: "images/huawei-pura70-pro-plus.jpg",
        description: "A mobile phone that is powerful enough for creative professionals.",
        price: "$1,399",
        contactInfo: "John@example.com",
        specs: {
            Type : "LTPO OLED, 1B colors, HDR, 120Hz, 2500 nits (peak)"
        }
    },
    {
        title: "huawei-pura-70",
        image: "images/huawei-pura70.jpg",
        description: "A creative Mobile phone with an OLED display and powerful hardware.",
        price: "$899",
        contactInfo: "john@example.com",
        specs: {
            Type :	"LTPO OLED, 1B colors, HDR, 120Hz, 2500 nits (peak)"
        }
    },
    {
        title: "huawei-nova-flip",
        image: "images/huawei-nova-flip.jpg",
        description: "A high-performance Mobile phone with great thermal management.",
        price: "$1,499",
        contactInfo: "John@example.com",
        specs: {
            Type :	"Foldable flip Mobile phone, 120Hz"
        }
    },
    {
        title: "/huawei-nova-11-pro",
        image: "images/huawei-nova11-pro.jpg",
        description: "Designed for creative professionals, this phone offers excellent color accuracy.",
        price: "$1,899",
        contactInfo: "John@example.com",
        specs: {
            Type :	"OLED, 1B colors, HDR10, 120Hz"
        }
    }
];

function showLaptopDetails(product) {
    document.getElementById('modal-phone-image').src = product.image;
    document.getElementById('modal-phone-description').textContent = product.description;
    document.getElementById('modal-phone-contact').textContent = product.contactInfo; // Set contact information

    // Prepare specifications list
    const specsList = document.getElementById('modal-phone-specs');
    specsList.innerHTML = ''; // Clear previous specifications
    for (const [key, value] of Object.entries(product.specs)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
        specsList.appendChild(listItem);
    }

    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('phoneDetailModal'));
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
                <button class="btn btn-success" onclick="showPhoneDetails(products[${products.indexOf(product)}])">Details</button>
            </div>
        </div>
    `;
    productContainer.appendChild(card);
});

    // Prepare specifications list
    const specsList = document.getElementById('modal-phone-specs');
    specsList.innerHTML = ''; // Clear previous specifications
    for (const [key, value] of Object.entries(product.specs)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
        specsList.appendChild(listItem);
    }