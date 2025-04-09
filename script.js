
function toggleMenu() {
    const menu = document.querySelector('.hamburger-links');
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("active");
    icon.classList.toggle("active");
}


document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    console.log(formObject);
    alert('Thank you for getting in touch!');
    this.reset();
});