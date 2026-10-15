
document.documentElement.classList.add("js-enabled");

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");
    const topBtn = document.getElementById("topBtn");
    const contactForm = document.querySelector(".contact-form");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1
            }
        );

        sections.forEach(function (section) {
            observer.observe(section);
        });
    } else {
        sections.forEach(function (section) {
            section.classList.add("show");
        });
    }

    function handleScroll() {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Thank you! Your message has been submitted successfully.");

        contactForm.reset();
    });
});
