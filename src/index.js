import timer from "./modules/timer"
import menu from "./modules/menu"
import modal from "./modules/modal"
import calculator from "./modules/calculator"
import validations from "./modules/validations"
import tabs from "./modules/tabs"
import slider from "./modules/slider"
import calc from "./modules/calc"
import swiper from "./modules/swiper"
import sendForm from "./modules/sendForm"


timer('31 march 2022')
menu()
modal()
calculator()
validations()
tabs()
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots')
calc(100)
swiper()
sendForm({formId: 'form1',
    someElement: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
sendForm({formId: 'form2',
    someElement: [
        {
            type: 'block',
            id: 'total'
        }
    ]})
sendForm({formId: 'form3',
    someElement: [
        {
            type: 'block',
            id: 'total'
        }
    ]})
