function addBurgerListeners() {
    var burgers = document.querySelectorAll('.navbar-burger');

    burgers.forEach(burger => {
        burger.addEventListener('click', () => {
            let targetMenu = burger.dataset.target;
            let menu = document.getElementById(targetMenu);

            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        })
    });
}


document.addEventListener('DOMContentLoaded', () => {
    addBurgerListeners();
});