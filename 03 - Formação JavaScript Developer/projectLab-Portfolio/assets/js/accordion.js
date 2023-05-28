const accordionButtons = document.querySelectorAll('.button')

accordionButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const accordion = button.parentElement
        const isOpen = accordion.classList.contains('accordion--open')

        if(isOpen) {
            accordion.classList.remove('accordion--open')
        } else {
            accordion.classList.add('accordion--open')
        }
    })
})

