$(window).on('scroll', function() {
    var $this = $(this),
        $hero = $('.hero'),
        $header = $('.header');
    if($('.hero').length > 0){
        if ($this.scrollTop() > $hero.height() - 300) {
            $header.addClass('before-scroll-nav');
        }else{
            $header.removeClass('before-scroll-nav');
        }
        if ($this.scrollTop() > $hero.height() + 50) {
            $header.addClass('scroll-nav');
        }
        else{
            $header.removeClass('scroll-nav');
        }
    }
});


$('.header-button').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header').toggleClass('sidebar-visible');
    $('.header-sidebar').toggleClass('is-visible');
});
$('.header-search__button').on('click', function (e) {
    e.preventDefault();
    $('.header-search__form').addClass('is-visible');
});
$(document).mouseup( function(e){ // событие клика по веб-документу
    var locationList = $( ".header-search" ); // тут указываем ID элемента
    if ( !locationList.is(e.target) // если клик был не по нашему блоку
        && locationList.has(e.target).length === 0 ) { // и не по его дочерним элементам
        $('.header-search__form').removeClass('is-visible');
    }
});
$(document).mouseup( function(e){ // событие клика по веб-документу
    var locationList = $( ".header" ); // тут указываем ID элемента
    if ( !locationList.is(e.target) // если клик был не по нашему блоку
        && locationList.has(e.target).length === 0 ) { // и не по его дочерним элементам
        $('.header-sidebar').removeClass('is-visible');
        $('.header').removeClass('sidebar-visible');
    }
});
$('.btn-scroll').on('click', function (e) {
    const $thsData = $(this).attr('data-scroll-id');
    const $scrollDiv = $('section[data-scroll-id='+$thsData+']');
    $('html, body').animate({
        scrollTop: $scrollDiv.offset().top - 100
    }, 2000);

});
$('.tab-nav__item').on('click', function (e) {
    const $ths = $(this),
        $thsHref = $ths.attr('data-tab');
    $ths.parents('section').find('.tab-item').removeClass('active');
    $ths.parents('section, .news-nav').find('.tab-nav__item').removeClass('active');
    // $('.tab-item').removeClass('active');
    // $('.tab-nav__item').removeClass('active');
    $ths.toggleClass('active');
    $('div[data-tab='+$thsHref+']').addClass('active');
});
var swiper = new Swiper(".achievement-slider", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        991: {
            slidesPerView: "auto",
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 0,
        }
    }
});
var informationalSwiper = new Swiper(".informational-slider", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: {
        el: ".informational-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".informational-button-next",
        prevEl: ".informational-button-prev",
    },
    breakpoints: {
        568: {
            slidesPerView: "auto",
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 0,
        }
    }
});

var init = false;
var NewsSwiper;
function swiperCard() {
    if (window.innerWidth <= 768) {
        if (!init) {
            init = true;
            swiper = new Swiper(".news-slider", {
                direction: "horizontal",
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: {
                    el: ".news-swiper-pagination",
                    type: "progressbar",
                },
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);
// var NewsSwiper = new Swiper(".news-slider", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//         el: ".news-swiper-pagination",
//         type: "progressbar",
//     },
//     navigation: {
//         nextEl: ".news-button-next",
//         prevEl: ".news-button-prev",
//     },
//     breakpoints: {
//         991: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//         },
//         992: {
//             slidesPerView: 3,
//             spaceBetween: 67,
//         }
//     }
// });
