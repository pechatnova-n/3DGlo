'use strict'

const slider = (slidesContainer, slidesItem, dotsContainer) => {
    const sliderBlock = document.querySelector(slidesContainer);
    const slides = document.querySelectorAll(slidesItem);
    const portfolioDots =  document.querySelector(dotsContainer);


    if(sliderBlock === null) {
        return;
    } else if(slides.length === 0 ) {
        return;
    } else {
        const timeInterval = 2000;

        let currentSlide = 0;
        let interval;
        let dots = [];

        const prevSlide = (elems, index, strClass = 'active') => {
            elems[index].classList.remove(strClass);
        }

        const nextSlide = (elems, index, strClass = 'active') => {
            elems[index].classList.add(strClass);
        }

        const autoSlide = () => {
            prevSlide(slides, currentSlide, 'portfolio-item-active');
            prevSlide(dots, currentSlide, 'dot-active');
            currentSlide++;

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
            nextSlide(slides, currentSlide, 'portfolio-item-active');
            nextSlide(dots, currentSlide, 'dot-active');
        }

        const addDots = (countSlides) => {
            for (let i = 0; i < countSlides; i++) {
                let el = document.createElement('li');
                el.classList.add('dot');
                dots.push(el)
                portfolioDots.append(el)
            }
        }

        const startSlide = (timer = 1500) => {
            if (dots.length === 0) {
                addDots(slides.length);
            }
            interval = setInterval(autoSlide, timer);
        }

        const stopSlide = () => {
            clearInterval(interval);
        }

        sliderBlock.addEventListener('click', (e) => {
            e.preventDefault();

            if (!e.target.matches('.dot, .portfolio-btn')) {
                return;
            }

            prevSlide(slides, currentSlide, 'portfolio-item-active');
            prevSlide(dots, currentSlide, 'dot-active');

            if (e.target.matches('#arrow-right')) {
                currentSlide++;
            } else if (e.target.matches('#arrow-left')) {
                currentSlide--;
            } else if (e.target.classList.contains('dot')) {
                dots.forEach((dot, index) => {
                    if (e.target === dot) {
                        currentSlide = index;
                    }
                })
            }

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }

            nextSlide(slides, currentSlide, 'portfolio-item-active');
            nextSlide(dots, currentSlide, 'dot-active');
        })

        sliderBlock.addEventListener('mouseenter', (e) => {
            if (e.target.matches('.dot, .portfolio-btn')) {
                stopSlide();
            }
        }, true)

        sliderBlock.addEventListener('mouseleave', (e) => {
            if (e.target.matches('.dot, .portfolio-btn')) {
                startSlide(timeInterval);
            }
        }, true)


        startSlide(timeInterval)
    }
}

export default slider