'use strict';

import Swiper from 'swiper';
import { Autoplay } from 'swiper';


const swiper = () => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        modules: [Autoplay],
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
}

export default swiper;