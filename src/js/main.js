const iconMenu = document.querySelector('.main__navbar .navbar__icon')
const contentMenu = document.querySelector(".main__navbar ul")
const contentAnchorIconMenu = document.querySelector(".main__navbar ul a svg")
const anchorMenu = document.querySelectorAll(".navbar__links li a") 
const mainContainer = document.querySelector(".main .main__container")

const info__numbers = document.querySelectorAll('.info__number') //!
const containerHabilities = document.querySelector('.container__skills .skills__values');
const elements = document.querySelectorAll('.bar__progress')

/* console.log(anchorMenu) */
/* Navbar */
function quiteMenu(active) {
    if (active) {
        contentMenu.classList.toggle("navbar__show")
        mainContainer.classList.toggle("main__containerShowMenu")
        active = false
    }
    return active
}

let activeMenu = false;
iconMenu.addEventListener('click', function () {
        contentMenu.classList.toggle("navbar__show")
        mainContainer.classList.toggle("main__containerShowMenu")
        activeMenu === false ? activeMenu = true : activeMenu = false
    }
)

mainContainer.addEventListener('click', function () {
        activeMenu = quiteMenu(activeMenu)
    }
)

contentAnchorIconMenu.addEventListener('click' , function () {
        activeMenu = quiteMenu(activeMenu)
    }
)

for (let i = 0; i < anchorMenu.length; i++) {
        anchorMenu[i].addEventListener('click', function () {
            activeMenu = quiteMenu(activeMenu)
        }
    )
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


/* Habilidades */
let numbersShowed = false 

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
function swiperAvailable() {
    if (window.innerWidth >= 950 && swiperActive === true) {
        swiper.disable()
        swiperActive = false
    } else if (window.innerWidth < 950 && swiperActive === false){
        swiperActive = true
        swiper.enable()
    }
}

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

let swiperClass = document.querySelector('.swiper')
let swiperActive = ''

if (window.innerWidth >= 950) {
    swiperActive = false
    swiper.disable()

} else {
    swiperActive = true
}


window.addEventListener('load', function () {
    swiperAvailable()
})

window.addEventListener('resize', function() {
    swiperAvailable()
})
