const price__btn = document.querySelector('.price__btn')
const order__btn = document.querySelector('.order__btn')

price__btn.addEventListener('click', () => {
    document.querySelector('.order').classList.remove('active')
    document.querySelector('.price__container').classList.add('active')
    price__btn.classList.add('active')
    order__btn.classList.remove('active')
})

order__btn.addEventListener('click', () => {
    price__btn.classList.remove('active')
    order__btn.classList.add('active')
    document.querySelector('.order').classList.add('active')
    document.querySelector('.price__container').classList.remove('active')
})