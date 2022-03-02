'use strict'

const validations = () => {

    const inputsText = document.querySelectorAll('input[type = text]')
    const inputsEmail = document.querySelectorAll('input[type = email]')
    const inputsTel = document.querySelectorAll('input[type = tel]')
    const textarea = document.getElementById('form2-message')



    inputsText.forEach((item) => {
        if(!item.classList.contains('calc-item')) {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^\sа-яА-Я-]+/i, "")
            })
        }
    })

    textarea.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\sа-яА-Я-]+/i, "")
    })

    inputsEmail.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\w@_\-.!~*']+/, "")
        })
    })

    inputsTel.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d()-]+/, "")
        })
    })



    //-----complicated task #2-----

    //3item - delete spaces and hyphens
    const deleteSpace = (e) => {
        e.target.value = e.target.value.replace(/^[\s-]*/, "")
        e.target.value = e.target.value.replace(/[\s-]*$/, "")

        e.target.value = e.target.value.replace(/-{2,}/g, "-")
        e.target.value = e.target.value.replace(/\s{2,}/g, " ")

    }

    inputsText.forEach(item => {
        item.addEventListener('blur', (e) => {
            deleteSpace(e)
        })
    })

    textarea.addEventListener('blur', (e) => {
        deleteSpace(e)
    })

    inputsEmail.forEach(item => {
        item.addEventListener('blur', (e) => {
            deleteSpace(e)
        })
    })

    inputsTel.forEach(item => {
        item.addEventListener('blur', (e) => {
            deleteSpace(e)
        })
    })


    // 4item - change first letter on uppercase
    inputsText.forEach((item) => {
        item.addEventListener('blur', (e) => {
            const inputValueArr = []
            let value = e.target.value
            value = value.trim().split(" ")
            value.forEach(el => {
                el = el[0].toUpperCase() + el.slice(1).toLowerCase()
                inputValueArr.push(el)
            })
            e.target.value = inputValueArr.join(' ')
        })
    })

}

export default validations;