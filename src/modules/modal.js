'use strict'
import { animate } from "./helpers"

const modal = () => {
    const modal = document.querySelector('.popup')
    const content = modal.querySelector('.popup-content')
    const buttons = document.querySelectorAll('.popup-btn')
    const screenWidth = window.screen.width

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            let count = 0;
            let idInterval;

            content.style.top = '0%'
            const anim = () => {

                if(screenWidth < 768) {
                    animate({
                        duration: 2000,
                        timing(timeFraction) {
                            return timeFraction;
                        },
                        draw(progress) {
                            modal.style.display = 'block'
                            content.style.top = (progress * 30) + "%";
                        }
                    });
                } else {
                    count++
                    idInterval = requestAnimationFrame(anim)

                    if(count <= 85) {
                        animate({
                            duration: 2000,
                            timing(timeFraction) {
                                return timeFraction;
                            },
                            draw(progress) {
                                modal.style.display = 'block'
                                content.style.top = (progress * count * 0.2) + "%";
                            }
                        });
                    } else {
                        cancelAnimationFrame(idInterval)
                    }
                }
            }

            anim()
        })
    })

    modal.addEventListener('click', (e) => {
        console.log(e.target.closest('.popup-content'))
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })
}

export default modal