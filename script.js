// =========================
// Navbar Scroll Effect
// =========================
const navbar = document.querySelector(".navbar");

if (navbar) {
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        // kleine Performance-Optimierung
        if (Math.abs(currentScroll - lastScroll) > 5) {
            navbar.classList.toggle("scrolled", currentScroll > 50);
            lastScroll = currentScroll;
        }
    });
}


// =========================
// Mobile Menu
// =========================
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}




// =========================
// Navigation Smooth Scroll (Event Delegation)
// =========================
if (navLinks) {
    navLinks.addEventListener("click", (e) => {
        const link = e.target.closest("a");
        if (!link) return;

        const targetSelector = link.getAttribute("href");
        const target = document.querySelector(targetSelector);

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

        navLinks.classList.remove("active");
    });
}


// =========================
// Scroll Animations
// =========================
const animatedElements = document.querySelectorAll(
    ".card, .text-block, .menu-card, .location-card, .img"
);

const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (!isMobile && animatedElements.length > 0) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                entry.target.classList.remove("hidden");

                // nur einmal animieren
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });

} else {
    animatedElements.forEach(el => {
        el.classList.add("show");
    });
}

// weiterleiten
function goTo(url) {
    window.location.href = url;
}

document.getElementById("visitBtn").addEventListener("click", function () {
    goTo("https://de.wikipedia.org");
});

