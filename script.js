function showMessage() {
    alert("Welcome to Chandana Royal's Portfolio! 🚀");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function showContactMessage() {
    alert("Thank you for visiting my portfolio! 👋");
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener("scroll", function () {

    const topButton = document.getElementById("topBtn");

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});