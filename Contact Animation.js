document.addEventListener('DOMContentLoaded', function() {
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');

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
        if (isInViewport(text1)) {
            text1.classList.add('in-view');
        }
        if (isInViewport(text2)) {
            text2.classList.add('in-view');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    
    // Initial check in case elements are already in view
    checkVisibility();
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
        const text5 = document.querySelector('.text5');
        const text6 = document.querySelector('.text6');

        text5.classList.add('animate__animated', 'animate__fadeInDown');
        text6.classList.add('animate__animated', 'animate__fadeInUp');

        // You can adjust the animation duration and delay if needed
        text5.style.animationDuration = '2s';
        text6.style.animationDuration = '2s';
        text6.style.animationDelay = '1s';
    });



    document.addEventListener('DOMContentLoaded', function() {
        const text5 = document.querySelector('.text5');
        const text6 = document.querySelector('.text6');
        const members = document.querySelectorAll('.member');

        text5.classList.add('animate__animated', 'animate__fadeInDown');
        text6.classList.add('animate__animated', 'animate__fadeInUp');

        text5.style.animationDuration = '2s';
        text6.style.animationDuration = '2s';
        text6.style.animationDelay = '1s';

        members.forEach((member, index) => {
            member.classList.add('animate__animated', 'animate__fadeIn');
            member.style.animationDelay = `${index * 0.5}s`;
        });
    });






    document.addEventListener('DOMContentLoaded', function () {
        const text9 = document.querySelector('.text9');
        const testimonials = document.querySelector('.testimonials');
    
        // Function to animate elements
        const animateElements = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === text9) {
                        text9.animate(
                            [
                                { transform: 'translateY(-50px)', opacity: 0 },
                                { transform: 'translateY(0)', opacity: 1 }
                            ],
                            {
                                duration: 1000,
                                easing: 'ease-out',
                                fill: 'forwards'
                            }
                        );
                    }
    
                    if (entry.target === testimonials) {
                        testimonials.animate(
                            [
                                { opacity: 0 },
                                { opacity: 1 }
                            ],
                            {
                                duration: 1000,
                                easing: 'ease-out',
                                fill: 'forwards'
                            }
                        );
                    }
                    observer.unobserve(entry.target);
                }
            });
        };
    
        // Intersection Observer for text9
        const observerText9 = new IntersectionObserver(animateElements, { threshold: 0.1 });
        observerText9.observe(text9);
    
        // Intersection Observer for testimonials
        const observerTestimonials = new IntersectionObserver(animateElements, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        observerTestimonials.observe(testimonials);
    });
    