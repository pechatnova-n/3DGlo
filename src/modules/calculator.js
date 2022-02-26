'use strict'


const calculator = () => {
    const calcItems = document.querySelectorAll('input.calc-item')

    const isOnlyDidgital = (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")
    }

    calcItems.forEach((item) => {
        item.addEventListener('input', (e) => {
            isOnlyDidgital(e)
        })
    })

}

export default calculator;