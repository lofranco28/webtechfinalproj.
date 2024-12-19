// Get the category from the URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Update the page title dynamically
document.getElementById('category-title').innerText = category;

// Define destinations for Luzon
const destinations = {
    Beach: [
        { name: "Boracay", img: "images/boracay.jpg", guide: "Boracay Travel Guide" },
        { name: "Pagudpud", img: "images/pagudpud.jpg", guide: "Pagudpud Travel Guide" }
    ],
    Hiking: [
        { name: "Mount Pulag", img: "images/mt-pulag.jpg", guide: "Mount Pulag Travel Guide" },
        { name: "Mount Ulap", img: "images/mt-ulap.jpg", guide: "Mount Ulap Travel Guide" }
    ],
    Falls: [
        { name: "Pagsanjan Falls", img: "images/pagsanjan.jpg", guide: "Pagsanjan Falls Travel Guide" },
        { name: "Maria Cristina Falls", img: "images/maria-cristina.jpg", guide: "Maria Cristina Falls Travel Guide" }
    ],
    Historical: [
        { name: "Intramuros", img: "images/intramuros.jpg", guide: "Intramuros Travel Guide" },
        { name: "Vigan", img: "images/vigan.jpg", guide: "Vigan Travel Guide" }
    ]
};

// Generate content dynamically
const destinationList = document.getElementById('destination-list');
if (destinations[category]) {
    destinations[category].forEach((place) => {
        const item = document.createElement('div');
        item.className = 'destination-item';
        item.innerHTML = `
            <img src="${place.img}" alt="${place.name}">
            <h3>${place.name}</h3>
            <button onclick="alert('${place.guide}')">Travel Guide</button>
        `;
        destinationList.appendChild(item);
    });
} else {
    destinationList.innerHTML = "<p>No destinations available for this category.</p>";
}