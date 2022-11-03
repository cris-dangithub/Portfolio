const iconMenu = document.querySelector('.main__navbar .navbar__icon')
const contentMenu = document.querySelector(".main__navbar ul")
const contentAnchorIconMenu = document.querySelector(".main__navbar ul a svg")
const anchorMenu = document.querySelectorAll(".navbar__links li a") 
const mainContainer = document.querySelector(".main .main__container")


console.log(anchorMenu)
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



/* Habilidades */
window.addEventListener('scroll', function()  {
        const containerHabilities = document.querySelector('.container__skills .skills__values');
        let elements = document.querySelectorAll('.bar__progress')
        let screenSize = window.innerHeight;
        
        for (let element of elements) {
            condition1 = containerHabilities.getBoundingClientRect().top < screenSize
            condition2 = containerHabilities.getBoundingClientRect().bottom > 0
            if(condition1 && condition2) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        }
    }
);


/* Experiencia (Swiper) */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,
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

if (window.innerHeight >= 950) {
    swiperActive = false
    swiper.disable()

} else {
    swiperActive = true
}

window.addEventListener('resize', function() {
    console.log(window.innerWidth)
    if (window.innerWidth >= 950 && swiperActive === true) {
        swiper.disable()


        swiperActive = false
    } else if (window.innerWidth < 950 && swiperActive === false){
        swiperActive = true
        swiper.enable()
    }

})