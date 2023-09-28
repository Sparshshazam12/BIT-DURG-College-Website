// JavaScript for changing background images
const images = document.querySelectorAll('.hero-image');
let currentIndex = 0;

function changeImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}

// Change the background image every 3 seconds
setInterval(changeImage, 3000);
// JavaScript for dropdown menu
const dropdown = document.querySelector('.dropdown');
const dropdownBtn = document.querySelector('.dropbtn');

dropdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown.classList.toggle('active');
});

// Close the dropdown when clicking outside of it
window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropbtn')) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach((dropdown) => {
            if (dropdown.classList.contains('active')) {
                dropdown.classList.remove('active');
            }
        });
    }
});

