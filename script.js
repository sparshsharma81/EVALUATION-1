document.addEventListener('DOMContentLoaded', () => {
    const foodBox = document.querySelector('.food-box');
    const foodPics = document.querySelectorAll('.food-pic');
    const totalSlides = foodPics.length;
    const slidesToShow = 4; // Number of slides to show at a time
    const slideWidth = 100 / slidesToShow; // Percentage width for each slide
    let currentIndex = 0;

    function updateCarousel() {
        const maxIndex = totalSlides - slidesToShow;
        // Prevent going beyond the range
        if (currentIndex < 0) {
            currentIndex = 0;
        } else if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }
        foodBox.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        
        // Disable arrows based on position
        document.querySelector('.arrow-left').disabled = currentIndex === 0;
        document.querySelector('.arrow-right').disabled = currentIndex === maxIndex;
    }

    document.querySelector('.arrow-right').addEventListener('click', () => {
        if (currentIndex < totalSlides - slidesToShow) {
            currentIndex++;
            updateCarousel();
        }
    });

    document.querySelector('.arrow-left').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Initialize the carousel
    updateCarousel();
});
