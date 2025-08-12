// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll(".reveal-left, .reveal-right, .reveal-bottom");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal(); // Run on load

// Button Scroll (class .btn1 to About section)
document.querySelectorAll(".btn1").forEach(function(button) {
    button.addEventListener("click", function () {
        document.querySelector("#about").scrollIntoView({
            behavior: "smooth"
        });
    });
});
