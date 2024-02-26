// navigation for website

const NAV = document.querySelectorAll('.navigation__element input');

const main = document.querySelectorAll('main section');

NAV.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.checked)
        main.forEach((section) => {
            section.style.display = 'none'
        })
        const section = document.querySelector(`.${button.id}`);
        section.style.display = 'grid';
    })
})
