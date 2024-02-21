Fancybox.bind("[data-fancybox]", {
    // Your options go here
});
let commandSlider = document.querySelector('.command-slider');
if (commandSlider) {
    let swiper = new Swiper(commandSlider, {

        loop: true,
        speed: 1000,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            // when window width is >= 480px
            760: {
                slidesPerView: 3.5,
                spaceBetween: 20,

            },
            // when window width is >= 640px
            1440: {
                slidesPerView: 5.5,
                spaceBetween: 30,

            },
            1920: {
                slidesPerView: 7,
                spaceBetween: 30,

            }
        }
    });
}

let doingSlider = document.querySelector('.we-doing-slider')
if (doingSlider) {
    let swiper = new Swiper(doingSlider, {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            // when window width is >= 480px
            959: {
                slidesPerView: 2,
                spaceBetween: 30,

            }

        }

    });
}

let navButton = document.querySelector('.nav--toggle')

if (navButton) {
    let html = document.querySelector('html')
    let menu = document.querySelector('.header .nav-menu')
    navButton.addEventListener('click', function (e) {
        navButton.classList.toggle('active')
        menu.classList.toggle('open')
        html.classList.toggle('popup-open')
    });
    window.addEventListener('resize', function () {
        let html = document.querySelector('html')
        let menu = document.querySelector('.header .nav-menu')
        if (window.innerWidth > 1025 && menu.classList.contains('open')) {
            navButton.classList.remove('active')
            menu.classList.remove('open')
            html.classList.remove('popup-open')
        }
    })
}

var wow = new WOW(
    {
        resetAnimation: false,
    }
);
function initSubmenu() {
    let submenu = document.querySelector('.menu-item-has-children > a')
    if (submenu) {
        submenu.addEventListener('click', function (e) {
            e.preventDefault()
            let menuButton = e.target.closest('.menu-item-has-children')
            menuButton.classList.toggle('open')
        })
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.menu-item') && document.querySelector('.menu-item-has-children.open')) {
                document.querySelector('.menu-item-has-children.open').classList.remove('open')
            }
        })
    }
}

initSubmenu()

wow.init();


