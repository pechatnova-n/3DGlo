'use strict'

const modal = () => {
    const modal = document.querySelector('.popup')
    const content = modal.querySelector('.popup-content')
    const closeBtn = modal.querySelector('.popup-close')
    const buttons = document.querySelectorAll('.popup-btn')
    const screenWidth = window.screen.width

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            let count = 0;
            let idInterval;

            content.style.top = '0%'
            const anim = () => {

                if(screenWidth < 768) {
                    modal.style.display = 'block'
                    content.style.top = '30%'
                } else {
                    count++
                    idInterval = requestAnimationFrame(anim)

                    if(count <= 85) {
                        modal.style.display = 'block'
                        content.style.top = count*0.2 + '%'
                    } else {
                        cancelAnimationFrame(idInterval)
                    }
                }
            }

            anim()
        })
    })


    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })
}

export default modal