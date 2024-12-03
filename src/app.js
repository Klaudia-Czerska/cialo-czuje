// variables

const menuButton = document.querySelector('.sidebar__mobile-menu');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('main');
const footer = document.querySelector('footer');
const popUp = document.querySelector('.pop-up');
const popUpClose = document.querySelector('.pop-up-content-close');
const popUpContent = document.querySelector('.pop-up-content');

// showing sidebar on mobile

const toggleMobileSidebar = () => {
    if (window.getComputedStyle(sidebar).getPropertyValue('left') === '-600px') {
        sidebar.classList.remove('hide-sidebar');
        sidebar.classList.add('show-sidebar');
    } else if (window.getComputedStyle(sidebar).getPropertyValue('left') === '0px') {
        sidebar.classList.remove('show-sidebar');
        sidebar.classList.add('hide-sidebar');
    }
}

menuButton.addEventListener('click', toggleMobileSidebar);

// allowing hiding sidebar when clicked elsewhere

const hideMobileSidebar = () => {
    if (window.getComputedStyle(sidebar).getPropertyValue('left') === '0px') {
        sidebar.classList.remove('show-sidebar');
        sidebar.classList.add('hide-sidebar');
    }
}

mainContent.addEventListener('click', hideMobileSidebar);
footer.addEventListener('click', hideMobileSidebar);

// navigation for website

const NAV = document.querySelectorAll('.navigation__element input');

const main = document.querySelectorAll('main section');

NAV.forEach((button) => {
    button.addEventListener('click', () => {
        main.forEach((section) => {
            section.style.display = 'none'
            section.scrollTo(top);
        })
        const section = document.querySelector(`.${button.id}`);
        section.style.display = 'grid';
        if (window.innerWidth < 700) {
            hideMobileSidebar();
        }
    })
})

// managing pop-up

const hidePopUp = () => {
    popUpContent.classList.add('pop-up-content-slide');
    
    setTimeout(() => {
        popUp.classList.add('pop-up-hide');
    }, 500);
}

popUpClose.addEventListener('click', hidePopUp);