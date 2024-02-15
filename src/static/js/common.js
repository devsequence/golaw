// AOS.init({disable: 'mobile'});
//
// $(window).on('scroll', function() {
//     var $this = $(this),
//         $hero = $('.hero'),
//         $header = $('.header');
//     if($('.hero').length > 0){
//         if ($this.scrollTop() > $hero.height() - 100) {
//             $header.addClass('before-scroll-nav');
//         }else{
//             $header.removeClass('before-scroll-nav');
//         }
//         if ($this.scrollTop() > $hero.height() + 50) {
//             $header.addClass('scroll-nav');
//         }
//         else{
//             $header.removeClass('scroll-nav');
//         }
//     }
// });
//
// $().fancybox({
//     backFocus : false,
//     selector : '.certificates-slider .slide:not(.slick-cloned) ',
// });
// $('.certificates-slider').on('init', function (event, slick, direction) {
//     if ($('.certificates-slider .slide').length > 3) {
//     }else{
//         $('.certificates-slider-dots').hide();
//     }
// });
// $('.certificates-slider').slick({
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: false,
//     infinite: true,
//     dots: true,
//     prevArrow: $('.certificates-nav .prev'),
//     nextArrow: $('.certificates-nav .next'),
//     appendDots: $('.certificates-slider-dots'),
//     autoplaySpeed: 2000,
//     // mobileFirst: true,
//     responsive: [
//         {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: true,
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 infinite: true,
//             }
//         },
//     ]
// });
// $('.team-slider').on('init', function (event, slick, direction) {
//     if ($('.team-slider .slide').length > 3) {
//     }else{
//         $('.team-slider-dots').hide();
//     }
// });
// $('.team-slider').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: false,
//     infinite: true,
//     dots: true,
//     prevArrow: $('.team-nav .prev'),
//     nextArrow: $('.team-nav .next'),
//     appendDots: $('.team-slider-dots'),
//     autoplaySpeed: 2000,
//     // mobileFirst: true,
//     responsive: [
//         {
//             breakpoint: 991,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 infinite: true,
//             }
//         },
//         {
//             breakpoint: 567,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: true,
//             }
//         },
//     ]
// });
// $('.hero-slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: false,
//     infinite: true,
//     prevArrow: $('.hero-nav .prev'),
//     nextArrow: $('.hero-nav .next'),
//     // responsive: [{
//     //     breakpoint: 992,
//     //     settings: {
//     //         dots: true,
//     //     }
//     // }]
// });
// $('.offers-slider').on('init', function (event, slick, direction) {
//     if ($('.offers-slider .slide').length > 2) {
//     }else{
//         $('.offers-slider-dots').hide();
//     }
// });
// $('.offers-slider').slick({
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: false,
//     infinite: true,
//     dots: true,
//     appendDots: $('.offers-slider-dots'),
//     prevArrow: $('.offers-nav .prev'),
//     nextArrow: $('.offers-nav .next'),
//     autoplaySpeed: 2000,
//     // mobileFirst: true,
//     responsive: [
//         {
//             breakpoint: 900,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: true,
//             }
//         },
//     ]
// });
// $('.work-slider__service').on('init', function (event, slick, direction) {
//     if ($('.work-slider__service .slide').length > 2) {
//     }else{
//         $('.work-slider-dots').hide();
//     }
// });
// $('.work-slider__service').slick({
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: false,
//     infinite: true,
//     dots: true,
//     appendDots: $('.work-slider-dots'),
//     prevArrow: $('.work-nav .prev'),
//     nextArrow: $('.work-nav .next'),
//     responsive: [
//         {
//             breakpoint: 900,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: true,
//             }
//         },
//     ]
// });
// $('.work-slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: false,
//     infinite: true,
//     dots: true,
//     appendDots: $('.work-slider-dots'),
//     prevArrow: $('.work-nav .prev'),
//     nextArrow: $('.work-nav .next'),
// });
//
// if ($('.reviews-slider .slide').length > 3) {
//     $('.reviews-slider').slick({
//         dots: true,
//         infinite: false,
//         speed: 300,
//         slidesToShow: 1,
//         variableWidth: true,
//         appendDots: $('.reviews-slider-dots'),
//         prevArrow: $('.reviews-nav .prev'),
//         nextArrow: $('.reviews-nav .next'),
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     variableWidth: false,
//                 }
//             },
//         ]
//     });
// }else{
//     $('.reviews-slider').addClass('slider-custom');
//     $('.reviews-slider-dots').hide();
//     $('.reviews-nav').hide();
// }
//
// $('.has-sub .has-sub__title').on('click', function (e) {
//     e.preventDefault();
//     const $ths = $(this);
//     if($ths.hasClass('active')){
//         $ths.removeClass('active');
//         $ths.next().slideUp().removeClass('active');
//     }else{
//         $('.has-sub .has-sub__title').removeClass('active');
//         $('.has-sub ul').slideUp();
//         $ths.addClass('active');
//         $ths.next().slideDown().addClass('active');
//     }
// });
// $('.faq-item__title').on('click', function (e) {
//     e.preventDefault();
//     const $ths = $(this);
//     if($ths.hasClass('active')){
//         $ths.removeClass('active');
//         $ths.parent().removeClass('active');
//         $ths.next().slideUp().removeClass('active');
//     }else{
//         $('.faq-item__title, .faq-item').removeClass('active');
//         $ths.addClass('active');
//         $ths.parent().addClass('active');
//         $ths.next().slideDown().addClass('active');
//     }
// });
//
//
//
// if($(window).width() <= 992){
//     $('.tab-item').each(function (e) {
//         const $ths = $(this),
//             $thsData = $ths.attr('data-tab'),
//             $thsHtml = $ths.html();
//         $('a[data-tab-nav='+$thsData+']').parent().append('<div class="service-item tab-item">'+$thsHtml+'</div>');
//         $ths.remove();
//     });
//     $('.tab-nav__link').on('click', function (e) {
//         e.preventDefault();
//         const $ths = $(this);
//         if($ths.hasClass('active')){
//             $ths.removeClass('active');
//             $ths.parent().find('.service-item ').removeClass('active');
//         }else{
//             $('.has-sub a, .tab-item').removeClass('active');
//             $ths.addClass('active');
//             $ths.parent().find('.service-item ').addClass('active');
//         }
//     })
// }else {
//     $('.has-sub a.tab-nav__link').on('click', function (e) {
//         const $ths = $(this),
//             $thsHref = $ths.attr('data-tab-nav'),
//             $thsData = $thsHref;
//         e.preventDefault();
//         $('.has-sub a, .tab-item').removeClass('active');
//         $ths.toggleClass('active');
//         $('div[data-tab='+$thsData+']').addClass('active');
//     });
// }
// if($('.hero').length > 0){}else{
//     $('.header').addClass('page-nav');
//     $(window).on('scroll', function() {
//         var $this = $(this),
//             $hero = $('.top'),
//             $header = $('.header');
//         if($('.top').length > 0){
//             if ($this.scrollTop() > $hero.height() - 20) {
//                 $header.addClass('before-scroll-nav');
//             }else{
//                 $header.removeClass('before-scroll-nav');
//             }
//             if ($this.scrollTop() > $hero.height() + 100) {
//                 $header.addClass('scroll-nav');
//             }
//             else{
//                 $header.removeClass('scroll-nav');
//             }
//         }
//     });
// }
// $('.header-btn').on('click', function (e) {
//     e.preventDefault();
//     $(this).toggleClass('active');
//     if($('.header').hasClass('active')){
//         $('.header').removeClass('active');
//         $('body').removeClass('scroll');
//     }else{
//         $('.header').addClass('active');
//         $('body').addClass('scroll');
//     }
//
//
//
// });
// $('.location-list__title, .header-lang__title').on('click', function (e) {
//     e.preventDefault();
//     $(this).toggleClass('active');
//     $(this).next().toggleClass('active');
// });
// $(document).mouseup( function(e){ // событие клика по веб-документу
//     var locationList = $( ".location-list" ); // тут указываем ID элемента
//     if ( !locationList.is(e.target) // если клик был не по нашему блоку
//         && locationList.has(e.target).length === 0 ) { // и не по его дочерним элементам
//         $('.location-list__title').removeClass('active');
//         $('.location-list__list').removeClass('active');
//     }
// });
// $(document).mouseup( function(e){ // событие клика по веб-документу
//     var locationList = $( ".header-lang" ); // тут указываем ID элемента
//     if ( !locationList.is(e.target) // если клик был не по нашему блоку
//         && locationList.has(e.target).length === 0 ) { // и не по его дочерним элементам
//         $('.header-lang__title').removeClass('active');
//         $('.header-lang__list').removeClass('active');
//     }
// });
// var count;
// $(".tab-item__list input").change(function() {
//     count = 0;
//     var table_abc = $(".tab-item__list input");
//     for (var i = 0; i < table_abc.length ; ++i) {
//         if ($(table_abc[i]).prop('checked')) {
//             var plusTen = $(table_abc[i]).val() * 10;
//             count += parseInt(plusTen, 10);
//         }
//     }
//     var countLast = count/ 10;
//     if(countLast < 35){
//         $('.progress-item__line span').css('width', countLast+'%')
//
//     }else{
//         $('.progress-item__line span').css('width', '35%')
//     }
//
// });
// $('.btn-blue').on('click', function () {
//     $('.form-tab__item.active').removeClass('active').next().addClass('active');
//     $('.btn-gray').removeClass('disabled').next().text('Send a request').attr('type', 'submit');
//     $('.progress-item__line').addClass('check');
// });
// $('.btn-gray').on('click', function () {
//     $('.form-tab__item.active').removeClass('active').prev().addClass('active');
//     $(this).addClass('disabled').next().text('Next').attr('type', 'button');
//     $('.progress-item__line').removeClass('check');
// });
// function popupOpen() {
//     var $popupButton = $('.btn-popup');
//     $popupButton.on('click', function (e) {
//         var $this = $(this);
//         var popupButtonData = $this.data('popup');
//         $('.popup').removeClass('active');
//         $('body').addClass('scroll');
//         $('div[data-popup = '+popupButtonData+']').addClass('active');
//         // $('body').addClass('scroll');
//     });
// }
// popupOpen();
// $('.popup-close').on('click', function (e) {
//     var $this = $(this);
//     $this.parents('.popup').removeClass('active');
//     $('.popup-overlay').removeClass('active');
//     $('body').removeClass('scroll');
// });
// $('.popup-overlay').on('click', function (e) {
//     var $this = $(this);
//     $this.removeClass('active');
//     $('.popup').removeClass('active');
//     $('body').removeClass('scroll');
// });
// $('.next-button').on('click', function (e) {
//     e.preventDefault();
//     $('.w-slider-arrow-right').trigger('click')
// });
//
//
// $(".reviews__form").validate({
//     errorElement: "span"
// });
//
// $('#imageInput').on('change', function() {
//     $input = $(this);
//     if($input.val().length > 0) {
//         fileReader = new FileReader();
//         fileReader.onload = function (data) {
//             $('.image-preview').attr('src', data.target.result);
//         }
//         fileReader.readAsDataURL($input.prop('files')[0]);
//         $('.image-button').css('display', 'none');
//         $('.image-preview').css('display', 'block');
//         $('.change-image').css('display', 'block');
//         $('.image-input').addClass('active');
//     }
// });
//
// $('.change-image').on('click', function() {
//     $control = $(this);
//     $('#imageInput').val('');
//     $preview = $('.image-preview');
//     $preview.attr('src', '');
//     $preview.css('display', 'none');
//     $control.css('display', 'none');
//     $('.image-button').css('display', 'block');
//     $('.image-input').removeClass('active');
// });




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
