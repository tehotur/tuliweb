
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar ul");


menuToggle.addEventListener("click", (event) => {
    navbar.classList.toggle("active");
    event.stopPropagation();
});


document.addEventListener("click", (event) => {
    if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
        navbar.classList.remove("active");
    }
});


const images = [];
for (let i = 1; i <= 17; i++) {
    images.push(`slider-pictures/img${i}.jpeg`);
}

let currentIndex = 0;

showImage(currentIndex);

function showImage(index) {
    document.getElementById("sliderImage").src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}