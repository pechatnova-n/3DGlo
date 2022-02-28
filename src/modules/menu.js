'use strict'

const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const menuLinks = menu.querySelectorAll('a')


    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menuBtn.addEventListener('click', handleMenu)

    menuLinks.forEach(menuLink =>
        menuLink.addEventListener('click', (e) => {
            if (e.target.closest('menu')) {
                handleMenu()
            }
        }))

}

export default menu;