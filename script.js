// Ενεργοποίηση του ScrollTrigger plugin στο GSAP
gsap.registerPlugin(ScrollTrigger);

// --- HERO ANIMATIONS (Φόρτωση αρχικής οθόνης) ---
const heroTl = gsap.timeline();

heroTl.to("#hero-title", { 
    opacity: 1, 
    y: 0, 
    duration: 0.8, 
    ease: "power4.out" 
})
.to("#hero-subtitle", { 
    opacity: 1, 
    y: 0, 
    duration: 0.6, 
    ease: "power3.out" 
}, "-=0.4")
.to("#hero-text", { 
    opacity: 1, 
    duration: 0.6 
}, "-=0.2")
.to("#hero-buttons", { 
    opacity: 1, 
    y: 0, 
    duration: 0.6, 
    ease: "power3.out" 
}, "-=0.4");


// --- SCROLL ANIMATIONS (Εφέ εμφάνισης κατά το σκρολάρισμα) ---

// 1. Info Section (Σχετικά με εμάς)
gsap.to(".info-animate", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 75%",
    },
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out"
});

// 2. Gallery Section (Φωτογραφίες Χώρου)
gsap.to(".gallery-img", {
    scrollTrigger: {
        trigger: "#gallery",
        start: "top 75%",
    },
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "power2.out"
});

// 3. TikTok Feed Section
gsap.to(".tiktok-video-card", {
    scrollTrigger: {
        trigger: "#tiktok-feed",
        start: "top 75%",
    },
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out"
});

// 4. Social Cards Section (Κάρτες Social Links)
gsap.to(".social-card", {
    scrollTrigger: {
        trigger: ".social-card",
        start: "top 80%",
    },
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "power2.out"
});

// 5. Contact Section (Στοιχεία Επικοινωνίας & Χάρτης)
gsap.to(".contact-animate", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
    },
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out"
});
