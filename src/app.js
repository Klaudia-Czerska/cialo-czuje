const NAV = document.querySelectorAll('.navigation-radio');

NAV.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button)
    })
})