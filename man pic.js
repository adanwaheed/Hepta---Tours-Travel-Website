document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.animate-image');

    function checkScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const imagePosition = image.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition > imagePosition) {
            image.classList.add('visible');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check in case the element is already in view
});
