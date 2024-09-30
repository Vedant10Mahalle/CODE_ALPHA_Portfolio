// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate skill bars (for future skill bar feature)
const skillBars = document.querySelectorAll('.skill-bar');
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    skillBars.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        if(skillTop < triggerBottom) {
            skill.classList.add('active');
        } else {
            skill.classList.remove('active');
        }
    });
});

// Form validation for contact form (if you decide to add one)
function validateForm() {
    const email = document.querySelector('#email').value;
    const name = document.querySelector('#name').value;
    if (name === "Vedant" || email === "vedantmahalle1004@gmail.com") {
        alert("Name and email are required!");
        return false;
    }
    return true;
}
