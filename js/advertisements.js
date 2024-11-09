document.addEventListener("DOMContentLoaded", function () {
    const advertisementsData = [
        {
            title: 'Lenovo ThinkPad X1 Carbon',
            description: 'A premium laptop with Intel Core i7, 16GB RAM, 512GB SSD.',
            image: 'images/lenovogamepad.png',
            contact: 'alexlexicon@example.com'
        },
        {
            title: 'Asus ZenBook Duo',
            description: 'Dual-screen laptop with Intel Core i7, 16GB RAM, 512GB SSD.',
            image: 'images/asuszen.png',
            contact: 'alexlexicon@example.com'
        },
        {
            title: 'MSI Stealth 15M',
            description: 'Gaming laptop with Intel Core i7, GTX 1660Ti, 16GB RAM, 512GB SSD.',
            image: 'images/msistealth.png',
            contact: 'alexlexicon@example.com'
        },
        {
            title: 'Lenovo ThinkPad X1 Yoga',
            description: 'A 2-in-1 laptop with Intel Core i7, 16GB RAM, 512GB SSD.',
            image: 'images/lenovoyoga.png',
            contact: 'alexlexicon@example.com'
        },
        {
            title: 'Dell XPS 13 (2021)',
            description: 'A compact laptop known for its design and performance.',
            image: 'images/dellxps.png',
            contact: 'alexlexicon@example.com'
        },
        {
            title: 'Razer Blade Stealth 13',
            description: 'A portable gaming laptop with Intel Core i7, 16GB RAM, and NVIDIA GTX 1650 Ti.',
            image: 'images/razerblade13.png',
            contact: 'alexlexicon@example.com'
        },
        {
            title: 'Apple MacBook Air (M1)',
            description: 'A lightweight laptop with Apple',
            image: 'images/macbookair.png',
            contact: 'alexlexicon@example.com'
        },
        {
            title: 'HP Envy x360',
            description: 'A versatile convertible laptop with AMD Ryzen 7 and 16GB RAM.',
            image: 'images/hpenvy.png',
            contact: 'alexlexicon@example.com'
        },
        {
            title: 'Acer Predator Helios 300',
            description: 'A gaming laptop with Intel Core i7, 16GB RAM, and NVIDIA GeForce RTX 3060.',
            image: 'images/acerpredator.png',
            contact: 'alexlexicon@example.com'
        },
        {
            title: 'Asus ROG Strix Scar 15',
            description: 'High-performance gaming laptop with Ryzen 9, 32GB RAM, and RTX 3080.',
            image: 'images/asusrogstrix.png',
            contact: 'alexlexicon@example.com'
        },
        {
            title: 'Gigabyte AORUS 15G',
            description: 'A gaming laptop with Intel Core i7, 16GB RAM, and NVIDIA GeForce RTX 3070.',
            image: 'images/gigabyteaorus.png',
            contact: 'alexlexicon@example.com'
        },
        {
            title: 'MSI Creator 15',
            description: 'Designed for creative professionals with Intel Core i7 and 32GB RAM.',
            image: 'images/msicreator15.png',
            contact: 'alexlexicon@example.com'
        }
    ];
{
    function showLaptopDetails(title, image, description, contact, specs) {
        document.getElementById('modal-laptop-image').src = image;
        document.getElementById('modal-laptop-description').textContent = description;
        document.getElementById('modal-laptop-contact').textContent = contact;
    }
        // Prepare specifications list
        const specsList = document.getElementById('modal-laptop-specs');
        specsList.innerHTML = ''; 
        for (const [key, value] of Object.entries(specs)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
            specsList.appendChild(listItem);
        }
    
        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('laptopDetailModal'));
        modal.show();
    }
    
   {
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
                    <button class="btn btn-success" onclick="showLaptopDetails('${product.title}', '${product.image}', '${product.description}', '${product.contactInfo}', ${JSON.stringify(product.specs)})">Details</button>
                </div>
            </div>
        `;
        productContainer.appendChild(card);
    });
} });