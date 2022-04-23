const courseBtn = document.querySelector(`.course__button`)
const course = document.querySelector(`course`)

courseBtn.addEventListener(`click`, () => {
    modal.style.display = `flex`
})
modal.addEventListener(`click`, (event) => {
    const modalContent = event.target.closest(`.modal__inner`)
    if (!modalContent) {
        modal.style.display = ``
    }
})