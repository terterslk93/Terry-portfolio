// Apparition des sections au défilement
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const revealSections = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.9) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealSections);
    revealSections();
});
