document.addEventListener('DOMContentLoaded', function() {
    const main1 = document.querySelector('.main1');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    main1.style.animationPlayState = 'paused';
    observer.observe(main1);
});


document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    items.forEach(item => {
        item.style.animationPlayState = 'paused';
        observer.observe(item);
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.image');
    const text = document.querySelector('.text3');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        if (isInViewport(image)) {
            image.classList.add('in-view');
        }
        if (isInViewport(text)) {
            text.classList.add('in-view');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    
    // Initial check in case elements are already in view
    checkVisibility();
});




document.addEventListener('DOMContentLoaded', function() {
    const image1 = document.querySelector('.image1');
    const text4 = document.querySelector('.text4');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        if (isInViewport(image1)) {
            image1.classList.add('in-view');
        }
        if (isInViewport(text4)) {
            text4.classList.add('in-view');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    
    // Initial check in case elements are already in view
    checkVisibility();
});


document.addEventListener('DOMContentLoaded', function() {
    const text5 = document.querySelector('.text5');
    const text6 = document.querySelector('.text6');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        if (isInViewport(text5)) {
            text5.classList.add('in-view');
        }
        if (isInViewport(text6)) {
            text6.classList.add('in-view');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    
    // Initial check in case elements are already in view
    checkVisibility();
});
