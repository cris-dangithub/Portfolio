const iconMenu = document.querySelector('.main__navbar .navbar__icon')
const contentMenu = document.querySelector(".main__navbar ul")
const mainContainer = document.querySelector(".main .main__container")

/* Navbar */
let activeMenu = false;
iconMenu.addEventListener('click', function () {
        contentMenu.classList.toggle("navbar__show")
        mainContainer.classList.toggle("main__containerShowMenu")
        activeMenu === false ? activeMenu = true : activeMenu = false
    }
)

mainContainer.addEventListener('click', function() {
        if (activeMenu) {
            contentMenu.classList.toggle("navbar__show")
            mainContainer.classList.toggle("main__containerShowMenu")
            activeMenu = false
        }
    }
)

