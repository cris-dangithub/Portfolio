const iconMenu = document.querySelector('.main__navbar .navbar__icon')
const contentMenu = document.querySelector(".main__navbar ul")
const mainContainer = document.querySelector(".main .main__container")

console.log(console.log(contentMenu.classList))
iconMenu.addEventListener('click', function () {
        console.log('holamundo')
        console.log(contentMenu.classList.toggle("navbar__show"))
        console.log(mainContainer.classList.toggle("main__containerShowMenu"))
    }
)
