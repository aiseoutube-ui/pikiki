
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Animación del Header en Scroll
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });

    // 2. HERO FUSION ANIMATION (GSAP)
    const heroTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#inicio",
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
            pin: true
        }
    });

    // Los elementos SVG vuelan al centro para fusionarse
    heroTl.to(".hero-svg-item", {
        x: (i, target) => {
            const rect = target.getBoundingClientRect();
            const centerX = window.innerWidth / 2;
            return centerX - rect.left - (rect.width / 2);
        },
        y: (i, target) => {
            const rect = target.getBoundingClientRect();
            const centerY = window.innerHeight / 2;
            return centerY - rect.top - (rect.height / 2);
        },
        rotation: 0,
        scale: 0.5,
        opacity: 1,
        stagger: 0.1,
        ease: "power2.inOut"
    });

    heroTl.to("#hero-title", { scale: 0.8, opacity: 0.5, y: -50 }, 0);
    heroTl.to("#hero-desc", { opacity: 1, y: -20 }, 0.3);

    // 3. Reveal de Tarjetas (Blog & Apps)
    gsap.utils.toArray('[data-gsap="fade-in"]').forEach((card) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    // 4. Sistema de Filtrado de Blog (Vanilla JS)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const posts = document.querySelectorAll('.post-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // UI Update
            filterBtns.forEach(b => b.classList.remove('bg-orange-500', 'text-white'));
            btn.classList.add('bg-orange-500', 'text-white');

            posts.forEach(post => {
                const tags = post.dataset.tags;
                if (filter === 'all' || tags.includes(filter)) {
                    gsap.to(post, { scale: 1, opacity: 1, display: 'block', duration: 0.4 });
                } else {
                    gsap.to(post, { scale: 0.9, opacity: 0, display: 'none', duration: 0.4 });
                }
            });
        });
    });
});
