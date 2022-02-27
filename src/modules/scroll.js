'use strict'

const scroll = () => {
    const menuLinks = document.querySelectorAll('menu>ul>li>a')
    const serviceBlock = document.getElementById('service-block')
    const scrollBtn = document.querySelector('a[href="#service-block"]')


    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            let attrLink = link.getAttribute('href')
            document.querySelector(attrLink).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        })
    })


    scrollBtn.addEventListener('click', (e) => {
        e.preventDefault()
        let href = scrollBtn.getAttribute('href')
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    })
}

export default scroll