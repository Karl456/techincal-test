window.$ = window.jQuery = require('jquery');

require('bootstrap-sass');

require('slick-carousel');

require('jquery-match-height');

require('magnific-popup');

window.Cookies = require('js-cookie');

import Scripts from './scripts';

import LazyLoading from './lazyloading';

import Matrix from './matrix';

import Overlay from './overlay';

import Tracking from './tracking';

import Alert from './alert';

$(document).on('click', '.hero-scroll[href^="#"]', function() {
    var target = $(this.hash);
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 1000);
});

$('.testimonials-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    arrows: false,
    dots: true
});

$('.three-column-block-container .row').slick({
    slidesToShow: 1,
    arrows: false,
    dots: false,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 991,
            settings: 'unslick'
        }
    ]
});

