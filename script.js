
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('responsive');
});


const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('responsive');
    });
});


const places = [
    {
        image: "https://media.istockphoto.com/id/1360554439/photo/maldives-tropical-island.jpg?s=612x612&w=0&k=20&c=1UUnuM-RyTYVkt1_YIMIzNe3JXdEeUTWngiEswms6MQ=",
        title: "Beach Resort",
        description: "Luxury escape with crystal-clear waters and palm trees.",
        price: "$999"
    },
    {
        image: "https://img.invinciblengo.org/iconscout/f:jpeg/w:400/h:0/rt:fit/plain/https://invinciblengo.org/_nuxt/img/caaab16.jpg",
        title: "Snow Trekking in Manali",
        description: "Stay at the heart of paradise with breathtaking views.",
        price: "$1199"
    },
    {
        image: "https://img.invinciblengo.org/iconscout/f:jpeg/w:400/h:0/rt:fit/plain/https://invinciblengo.org/_nuxt/img/5bb5455.png",
        title: "Saputara Adventure Camp",
        description: "Explore stunning waterfalls and hidden trails.",
        price: "$899"
    },
    {
        image: "https://img.invinciblengo.org/iconscout/f:jpeg/w:400/h:0/rt:fit/plain/https://invinciblengo.org/_nuxt/img/61b724b.jpg",
        title: "Kedarkantha Snow Trek",
        description: "Discover the serenity of mountain landscapes.",
        price: "$799"
    },
    {
        image: "https://img.invinciblengo.org/iconscout/f:jpeg/w:400/h:0/rt:fit/plain/https://invinciblengo.org/_nuxt/img/21ddb24.png",
        title: "Spiti in the Snow",
        description: "Immerse yourself in vibrant city life and culture.",
        price: "$1099"
    },
    {
        image: "https://img.invinciblengo.org/iconscout/f:jpeg/w:400/h:0/rt:fit/plain/https://invinciblengo.org/_nuxt/img/8fe0cd7.jpg",
        title: "Jaisalmer Desert Camping",
        description: "Experience the magic of the desert with thrilling adventures.",
        price: "$1299"
    }
];

const container = document.getElementById("places-container");

places.forEach(place => {
    const card = document.createElement("div");
    card.className = "place-card";

    card.innerHTML = `
                <img src="${place.image}" alt="${place.title}" />
                <div class="place-details">
                    <h3 class="place-title">${place.title}</h3>
                    <p class="place-desc">${place.description}</p>
                    <p class="place-price">${place.price}</p>
                    <button class="place-button">View Details</button>
                </div>
            `;
    container.appendChild(card);
});
