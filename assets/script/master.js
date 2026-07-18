    const header = document.getElementById('main-header');
    const hamburgerButton = document.querySelector('.hambtn');
    const navMenu = document.querySelector('.mobile-nav');


    window.addEventListener('scroll', () => {

        if (window.scrollY > 30) {
            header.classList.add('bg-slate-900/90', 'shadow-lg', 'border-b', 'border-white/10',);
        } else {
            header.classList.remove('bg-slate-900/90', 'shadow-lg',);
        }
    });

    hamburgerButton.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('translate-x-full');

        if (!isOpen) {
            hamburgerButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-8"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>`;
        } else {
            hamburgerButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>`;
        }
    });
    gsap.registerPlugin(ScrollTrigger);


    gsap.from(".service-card", {
        scrollTrigger: {
            trigger: ".service-card",
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
    });


    gsap.from(".map-card", {
        scrollTrigger: {
            trigger: ".map-card",
            start: "top 80%",
        },
        x: 50,                      
        opacity: 0,
        duration: 1,
        delay: 0.5,                 
        ease: "power2.out"
    });

    gsap.from(".expect-card", {
        scrollTrigger: {
            trigger: ".expect-grid",
            start: "top 90%",
        },
        opacity: 100,
        y: 10,
        duration: 0.8,
        stagger: 0.2
    });
    gsap.from(".story-card", {
        scrollTrigger: {
            trigger: ".story-card",
            start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.3
    });
