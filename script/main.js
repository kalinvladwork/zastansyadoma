(function () {
    let burger = document.querySelector('.burger');
    let mobileMenu = document.querySelector('.burger-menu');
    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        mobileMenu.classList.toggle("is-open");
    });
    mobileMenu.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        mobileMenu.classList.toggle("is-open");
    });
}());
