// Get references to the hamburger menu icon and the navigation links
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Add an event listener to toggle the 'active' class on the navigation menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const galleryItems = document.querySelectorAll('.gallery-item');
let currentItem = 0;

document.getElementById('prev-btn').addEventListener('click', showPreviousItem);
document.getElementById('next-btn').addEventListener('click', showNextItem);

function showPreviousItem() {
    galleryItems[currentItem].classList.remove('active');
    currentItem = (currentItem - 1 + galleryItems.length) % galleryItems.length;
    galleryItems[currentItem].classList.add('active');
}

function showNextItem() {
    galleryItems[currentItem].classList.remove('active');
    currentItem = (currentItem + 1) % galleryItems.length;
    galleryItems[currentItem].classList.add('active');
}

// Initialize the first item as active
galleryItems[currentItem].classList.add('active');
