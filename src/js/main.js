function quiteMenu(active) {
    if (active) {
        contentMenu.classList.toggle("navbar__show")
        mainContainer.classList.toggle("main__containerShowMenu")
        active = false
    }
    return active
}
function changeIcon() {
    if (activeX === false) {
        iconMenu.firstElementChild.style.transform = "translateY(-400%)";
        iconMenu.lastElementChild.style.transform = "translateX(0)"
        activeX = true
        
    } else {
        iconMenu.firstElementChild.style.transform = "translateY(0%)";
        iconMenu.lastElementChild.style.transform = "translateX(400%)"
        activeX = false
    }
}

function showNumbers (numbers) { //!
    let a = numbers.map((element) => element = 0 )
    let cantidadDeNumeros = 100 //Sin incluir el cero, es decir al final serian 6
    let tTotal = 1000 //en milisegundos
    let timePerIteration = tTotal/cantidadDeNumeros
    let count = 0

    const intervalNumbers = setInterval(() => 
        {
            for (let i = 0; i < numbers.length; i++) {
                info__numbers[i].innerHTML = `${Math.round(a[i])}%`
                a[i] += numbers[i] / cantidadDeNumeros
            }
            if (count === cantidadDeNumeros) clearInterval(intervalNumbers)
            count += 1
        }, 
        timePerIteration
    )
    
    numbersShowed = true
}

function initialSwiper() {
    if (window.innerWidth >= 950) {
        swiperActive = false
        swiper.disable()
    
    } else {
        swiperActive = true
    }
}

function swiperAvailable() {
    if (window.innerWidth >= 950 && swiperActive === true) {
        swiper.disable()
        swiperActive = false
    } else if (window.innerWidth < 950 && swiperActive === false){
        swiperActive = true
        swiper.enable()
    }
}

const button = document.querySelector("button")

const iconMenu = document.querySelector('.main__navbar .navbar__icon')
const contentMenu = document.querySelector(".main__navbar ul")
const contentAnchorIconMenu = document.querySelector(".main__navbar ul a svg")
const anchorMenu = document.querySelectorAll(".navbar__links li a") 
const mainContainer = document.querySelector(".main .main__container")

const info__numbers = document.querySelectorAll('.info__number') //!
const containerHabilities = document.querySelector('.container__skills .skills__values');
const elements = document.querySelectorAll('.bar__progress')

let activeMenu = false;
let activeX = false;
let navMobile = null;
let numbersShowed = false 

let swiperClass = document.querySelector('.swiper')
let swiperActive = ''

/* console.log(anchorMenu) */
/* Navbar */
console.log(button)
button.addEventListener("click", function (e) {
    e.preventDefault()
    }
)

iconMenu.addEventListener('click', function (e) {
        contentMenu.classList.toggle("navbar__show")
        mainContainer.classList.toggle("main__containerShowMenu")
        changeIcon()
        activeMenu === false ? activeMenu = true : activeMenu = false
    }
)

mainContainer.addEventListener('click', function () {
    if (activeMenu) {
        activeMenu = quiteMenu(activeMenu)
        changeIcon()
    }
    }
)

contentAnchorIconMenu.addEventListener('click' , function () {
        activeMenu = quiteMenu(activeMenu)
        changeIcon()
    }
)

for (let i = 0; i < anchorMenu.length; i++) {
        anchorMenu[i].addEventListener('click', function () {
            activeMenu = quiteMenu(activeMenu)
            if (navMobile) changeIcon()
            /* changeIcon() */
        }
    )
}

/* Habilidades */
window.addEventListener('scroll', function()  {
    let numbers = [80, 95, 90, 75] 
    let screenSize = window.innerHeight;


    for (let element of elements) {
        condition1 = containerHabilities.getBoundingClientRect().top < screenSize
        condition2 = containerHabilities.getBoundingClientRect().bottom > 0
        if(condition1 && condition2) {
            element.classList.add('visible');
            if (!numbersShowed) showNumbers(numbers)

        } else {
            element.classList.remove('visible');
            numbersShowed = false

        }
    }
;})


/* Experiencia (Swiper) */

const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: false,
    slidesPerView: 2,
    spaceBetween: 0,
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: false,
        dynamicBullets: true

    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    /* scrollbar: {
        el: '.swiper-scrollbar',
    }, */
    breakpoints: {
        675: {
            loop: false,
            slidesPerView: 3,
            allowTouchMove: true

        },
        950 :{
            slidesPerView:4,
            loop: false
        }
    },
});

initialSwiper()

window.addEventListener('load', function (e) {
    swiperAvailable()
    if (window.innerWidth < 675) return navMobile = true
    navMobile = false

})

window.addEventListener('resize', function() {
    swiperAvailable()
    /* console.log(navMobile) */
    if (window.innerWidth < 675) return navMobile = true
    navMobile = false
    
})
