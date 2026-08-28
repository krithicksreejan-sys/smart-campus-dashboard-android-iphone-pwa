/* ==========================================
   SMART CAMPUS DIGITAL TWIN
   app.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       Navbar Background on Scroll
    =============================== */

    const navbar = document.querySelector(".glass-nav");

    function updateNavbar() {

        if (window.scrollY > 50) {

            navbar.style.background = "rgba(5,15,30,0.92)";
            navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

        } else {

            navbar.style.background = "rgba(10,20,40,.55)";
            navbar.style.boxShadow = "none";

        }

    }

    window.addEventListener("scroll", updateNavbar);
    updateNavbar();

    /* ===============================
       Active Navigation Links
    =============================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight) {

                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ===============================
       Counter Animation
    =============================== */

    const counters = document.querySelectorAll("[data-count]");

    const startCounter = (counter) => {

        const target = Number(counter.dataset.count);
        let value = 0;

        const speed = Math.max(10, target / 100);

        const timer = setInterval(() => {

            value += speed;

            if (value >= target) {

                value = target;
                clearInterval(timer);

            }

            counter.textContent = Math.floor(value);

        }, 20);

    };

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    startCounter(entry.target);
                    observer.unobserve(entry.target);

                }

            });

        });

        counters.forEach(counter => observer.observe(counter));

    }

    /* ===============================
       Hero Image Tilt Effect
    =============================== */

    const heroImage = document.querySelector(".hero-image");

    if (heroImage) {

        heroImage.addEventListener("mousemove", (e) => {

            const rect = heroImage.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = (x / rect.width - 0.5) * 18;
            const rotateX = (0.5 - y / rect.height) * 18;

            heroImage.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.04)`;

        });

        heroImage.addEventListener("mouseleave", () => {

            heroImage.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

        });

    }

    /* ===============================
       Reveal Cards
    =============================== */

    const cards = document.querySelectorAll(".feature-card");

    if ("IntersectionObserver" in window) {

        const reveal = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        }, { threshold: 0.2 });

        cards.forEach(card => {

            card.style.opacity = "0";
            card.style.transform = "translateY(50px)";
            card.style.transition = "all .7s ease";

            reveal.observe(card);

        });

    }

    /* ===============================
       Ripple Effect
    =============================== */

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("click", function (e) {

            const circle = document.createElement("span");

            const size = Math.max(this.clientWidth, this.clientHeight);

            circle.style.width = size + "px";
            circle.style.height = size + "px";

            circle.style.left = e.offsetX - size / 2 + "px";
            circle.style.top = e.offsetY - size / 2 + "px";

            circle.classList.add("ripple");

            this.appendChild(circle);

            setTimeout(() => {

                circle.remove();

            }, 600);

        });

    });

    /* ===============================
       Console Welcome
    =============================== */

    console.log("%cSmart Campus Digital Twin",
        "color:#00d9ff;font-size:22px;font-weight:bold;");

    console.log("Landing Page Loaded Successfully");

});