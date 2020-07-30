webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
__webpack_require__(14);
module.exports = __webpack_require__(15);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery, __webpack_provided_window_dot_$, $) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scripts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lazyloading__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lazyloading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lazyloading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matrix__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matrix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__matrix__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlay__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__overlay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tracking__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tracking___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__tracking__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__alert__);
__webpack_provided_window_dot_$ = __webpack_provided_window_dot_jQuery = __webpack_require__(0);

__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

window.Cookies = __webpack_require__(5);













$(document).on('click', '.hero-scroll[href^="#"]', function () {
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
    responsive: [{
        breakpoint: 991,
        settings: 'unslick'
    }]
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0), __webpack_require__(0), __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ieVersion = function () {
    if (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) {
        return parseFloat(RegExp.$1);
    }

    return false;
}();

// CSRF fix
var csrfInputName = $('meta[name="csrfTokenName"]').attr('content'),
    csrfInputValue = $('meta[name="csrfTokenValue"]').attr('content');

window.csrfTokenData = function () {
    return _defineProperty({}, csrfInputName, csrfInputValue);
};

$(function () {
    $('input[name="' + csrfInputName + '"]').val(csrfInputValue);

    // IE Notice
    if (ieVersion !== false && ieVersion <= 10) {
        $('div#ienotice').show();
    }

    // Scroll to first form error on page load
    if ($('ul.errors').length) {
        $('html, body').animate({
            scrollTop: $('ul.errors').first().offset().top + 'px'
        }, 'fast');
    }

    // Homepage
    var $banner = $('#banner').not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        rows: 0
    });

    // Accessibility panel

    var className = "high-contrast-body";
    if (Cookies.get("contrast") === undefined) {
        $('body').removeClass(className);
    } else {
        $('body').addClass(className);
    }

    $('.high-contrast').click(function (e) {
        e.preventDefault();
        $('body').addClass('high-contrast-body');
        Cookies.set('contrast', 'high-contrast');
    });

    $('.normal').click(function (e) {
        e.preventDefault();
        $('body').removeClass('high-contrast-body');
        Cookies.remove('contrast');
    });

    function changeFontSize(option, tag, value) {
        var element = $(tag);
        if (element) {
            var fontSize = element.css('font-size').slice(0, -2);
            var updatedFontSize = void 0;
            if (option === 'increase') {
                updatedFontSize = parseInt(fontSize) + value + 'px';
            } else if (option === 'decrease') {
                updatedFontSize = parseInt(fontSize) - value + 'px';
            }
            element.css('font-size', updatedFontSize);
        }
    }

    function changeFontSizes(option, tags, size) {
        for (var i = 0; i < tags.length; i++) {
            changeFontSize(option, tags[i], size);
        }
    }

    function loadFontSize() {
        if (Cookies.get("text-size") === 'small') {
            changeFontSizes('decrease', ['body', 'h1', 'p', 'a.small', 'a.medium', 'a.large', '#overlay-menu li a', '#info li a', '#contact-details p', '#breadcrumb li'], 5);
        } else if (Cookies.get("text-size") === 'large') {
            changeFontSizes('increase', ['body', 'h1', 'p', 'a.small', 'a.medium', 'a.large', '#overlay-menu li a', '#info li a', '#contact-details p', '#breadcrumb li'], 5);
        }
    }

    loadFontSize();

    $('a.large').click(function (e) {
        e.preventDefault();
        if (Cookies.get("text-size") === 'large') {
            return;
        }
        changeFontSizes('increase', ['body', 'h1', 'p', 'a.small', 'a.medium', 'a.large', '#overlay-menu li a', '#info li a', '#contact-details p', '#breadcrumb li'], Cookies.get("text-size") === 'small' ? 10 : 5);

        if (Cookies.get("text-size") === undefined) {
            Cookies.set('text-size', 'large');
        } else if (Cookies.get("text-size") === 'small') {
            Cookies.remove('text-size');
            Cookies.set('text-size', 'large');
        }
    });

    $('a.small').click(function (e) {
        e.preventDefault();
        if (Cookies.get("text-size") === 'small') {
            return;
        }
        changeFontSizes('decrease', ['body', 'h1', 'p', 'a.small', 'a.medium', 'a.large', '#overlay-menu li a', '#info li a', '#contact-details p', '#breadcrumb li'], Cookies.get("text-size") === 'large' ? 10 : 5);

        if (Cookies.get("text-size") === undefined) {
            Cookies.set('text-size', 'small');
        } else if (Cookies.get("text-size") === 'large') {
            Cookies.remove('text-size');
            Cookies.set('text-size', 'small');
        }
    });

    $('a.medium').click(function (e) {
        e.preventDefault();
        Cookies.remove('text-size');
        location.reload();
    });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var $loadContainer = $('div#ajax-container'),
    $lastChild = $('div#ajax-container .list-card-item').last(),
    section = $loadContainer.data('section'),
    offset = parseInt($loadContainer.data('limit'), 10),
    limit = parseInt($loadContainer.data('limit'), 10),
    order = $loadContainer.data('order'),
    sort = $loadContainer.data('sort'),
    year = $loadContainer.data('year'),
    month = $loadContainer.data('month'),
    loading = false,
    shouldLoad = $loadContainer.length > 0;

// isOnScreen - http://stackoverflow.com/a/23222523
$.fn.isOnScreen = function () {
    var win = $(window),
        bounds = this.offset(),
        viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };

    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return !(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom);
};

$.fn.isEmpty = function () {
    return !this.children().length && !this.text().match(/\S/);
};

function getUrl() {
    var url = '/ajax/' + section + '/' + offset + '/' + limit + '/' + order + '/' + sort + '/';

    if (year && month) {
        url += '/' + year + '/' + month;
    }

    return url;
}

function load() {
    if (loading) {
        return false;
    }

    loading = true;

    $.post(getUrl(), csrfTokenData(), function (data) {
        data = $.trim(data);

        if (!$(data).isEmpty()) {
            // Add new children
            $loadContainer.append(data);

            // Reset last child
            $lastChild = $('div#ajax-container').children().last();

            // Update the offset
            offset += limit;
        } else {
            // Set to not try load anymore
            shouldLoad = false;
        }

        // Reset loading state
        loading = false;
    });
}

$(function () {
    $(window).on('scroll', function () {
        if (shouldLoad && !loading && $lastChild.length > 0 && $lastChild.isOnScreen()) {
            load();
        }
    });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// Accordions
$('div.accordions h3.accordion').on('click', function () {
    var isOpen = $(this).hasClass('open');

    if (isOpen) {
        $(this).removeClass('open');
    } else {
        $(this).parent().find('h3.accordion').removeClass('open');
        $(this).addClass('open');
    }
});

$(function () {
    $('div.accordions h3.accordion').first().addClass('open');

    // Galleries
    $('.gallery-slider').not('.slick-initialized').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        rows: 0,
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }]
    });

    // Image popups
    $('.gallery-pinterest, .gallery-grid, .gallery-slider').magnificPopup({
        delegate: 'a',
        type: 'image',
        removalDelay: 500, //delay removal by X to allow out-animation
        gallery: {
            enabled: true,
            navigateByImgClick: true
        },
        callbacks: {
            beforeOpen: function beforeOpen() {
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        closeOnContentClick: true,
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    $('.gallery-slider-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gallery-slider-bottom'
    });
    $('.gallery-slider-bottom').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.gallery-slider-top',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

    gridify.init();

    // Callouts slider
    $('.callouts-slider').not('.slick-initialized').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        rows: 0,
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }]
    });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// Open/close overlay
var $body = $(document.body),
    $overlayBar = $('div#overlay-bar'),
    $overlayMenu = $('div#overlay-menu'),
    $mobileBar = $('nav#overlay-bar'),
    lastScrollTop = 0;

$('.open-overlay').on('click', function (e) {
    e.preventDefault();
    $body.addClass('overlay-open');

    $body.keyup(function (event) {
        if (event.keyCode === 27) {
            $('.close-overlay').trigger('click');
        }
    });

    $overlayMenu.fadeIn();
});

$('.close-overlay').on('click', function (e) {
    e.preventDefault();

    $body.off('keyup');
    $body.removeClass('overlay-open');
    $overlayMenu.fadeOut();
});

// Expand/contract inside overlay
$('div#overlay-menu nav > ul > li > a span').on('click', function (e) {
    e.preventDefault();

    // Toggle sub menu visibility.
    $(this).parents('li').first().children('ul').toggle();

    // Toggle icon for dropdown.
    $(this).find('[data-fa-processed]').toggleClass('fa-minus').toggleClass('fa-plus');
});

$(window).on('scroll', function () {
    var st = $(this).scrollTop();

    if (st < 50) {
        $overlayBar.removeClass('offscreen scrolled');
    } else if (st > lastScrollTop) {
        $overlayBar.addClass('offscreen');
        $overlayBar.addClass('scrolled');
    } else {
        $overlayBar.removeClass('offscreen');
    }

    lastScrollTop = st;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    phoneRegex = /((0|\+44\s?\(0\)|\+44)\s?\d+\s?\d+\s?\d+)/; // https://regex101.com/r/Xd6lZX

window.replacePhoneNumbersWithLinks = function () {
    $('body *').contents().filter(function () {
        return this.nodeType === Node.TEXT_NODE;
    }).each(function () {
        $(this).replaceWith(this.textContent.replace(phoneRegex, '<a href="tel:$&">$&</a>'));
    });
};

window.recordEvent = function (category, action, label) {
    if (typeof window['ga'] === 'undefined') {
        console.error('Attempting to track event with GA not installed, please check before go-live!');
        console.error('Event:', category + ', ' + action + ', ' + label);

        return;
    }

    ga('send', 'event', category, action, label);
};

// Link tracking
$.expr[':'].external = function (obj) {
    if (obj.tagName.toLowerCase() !== 'a') {
        return false;
    }

    return obj.href && !obj.href.match(/^mailto:/) && !obj.href.match(/^javascript:/) && obj.hostname.replace(/^www\./i, '') !== document.location.hostname.replace(/^www\./i, '');
};

$.expr[':'].email = function (obj) {
    if (obj.tagName.toLowerCase() !== 'a') {
        return false;
    }

    return obj.href && obj.href.match(/^mailto:/);
};

$.expr[':'].tel = function (obj) {
    if (obj.tagName.toLowerCase() !== 'a') {
        return false;
    }

    return obj.href && obj.href.match(/^tel:/);
};

$('a:external').on('click', function () {
    recordEvent('External Link', 'Click', this.hostname.replace(/http(s)?:\/\//i));
});

$('a:email').on('click', function () {
    recordEvent('Mailto', 'Click', $(this).attr('href').substring(7));
});

$('a:tel').on('click', function () {
    recordEvent('Phone Number', 'Click', $(this).attr('href').substring(4));
});

$(function () {
    $('a:external, a:email').attr({
        target: '_blank',
        rel: 'external'
    });

    // Convert phone numbers
    if (isMobileDevice) {
        replacePhoneNumbersWithLinks();
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var $alert = $('div#site-alert'),
    $alertClose = $alert.find('#site-alert-close');

$alertClose.on('click', function (e) {
    e.preventDefault();
    Cookies.set('alert', $alert.data('expiry'));
    $alert.slideUp();
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[6]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9sYXp5bG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvb3ZlcmxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC90cmFja2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvYXBwLnNjc3M/NDQwNiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvZm9udGF3ZXNvbWUuc2Nzcz9hYzgzIl0sIm5hbWVzIjpbIndpbmRvdyIsInJlcXVpcmUiLCJDb29raWVzIiwiJCIsImRvY3VtZW50Iiwib24iLCJ0YXJnZXQiLCJoYXNoIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsInNsaWNrIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwic2xpZGVzVG9TaG93IiwiYXJyb3dzIiwiZG90cyIsIm1vYmlsZUZpcnN0IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImllVmVyc2lvbiIsIlJlZ0V4cCIsImV4ZWMiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJwYXJzZUZsb2F0IiwiJDEiLCJjc3JmSW5wdXROYW1lIiwiYXR0ciIsImNzcmZJbnB1dFZhbHVlIiwiY3NyZlRva2VuRGF0YSIsInZhbCIsInNob3ciLCJsZW5ndGgiLCJmaXJzdCIsIiRiYW5uZXIiLCJub3QiLCJzbGlkZXNUb1Njcm9sbCIsInJvd3MiLCJjbGFzc05hbWUiLCJnZXQiLCJ1bmRlZmluZWQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXQiLCJyZW1vdmUiLCJjaGFuZ2VGb250U2l6ZSIsIm9wdGlvbiIsInRhZyIsInZhbHVlIiwiZWxlbWVudCIsImZvbnRTaXplIiwiY3NzIiwic2xpY2UiLCJ1cGRhdGVkRm9udFNpemUiLCJwYXJzZUludCIsImNoYW5nZUZvbnRTaXplcyIsInRhZ3MiLCJzaXplIiwiaSIsImxvYWRGb250U2l6ZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiJGxvYWRDb250YWluZXIiLCIkbGFzdENoaWxkIiwibGFzdCIsInNlY3Rpb24iLCJkYXRhIiwibGltaXQiLCJvcmRlciIsInNvcnQiLCJ5ZWFyIiwibW9udGgiLCJsb2FkaW5nIiwic2hvdWxkTG9hZCIsImZuIiwiaXNPblNjcmVlbiIsIndpbiIsImJvdW5kcyIsInZpZXdwb3J0IiwibGVmdCIsInNjcm9sbExlZnQiLCJyaWdodCIsIndpZHRoIiwiYm90dG9tIiwiaGVpZ2h0Iiwib3V0ZXJXaWR0aCIsIm91dGVySGVpZ2h0IiwiaXNFbXB0eSIsImNoaWxkcmVuIiwidGV4dCIsIm1hdGNoIiwiZ2V0VXJsIiwidXJsIiwibG9hZCIsInBvc3QiLCJ0cmltIiwiYXBwZW5kIiwiaXNPcGVuIiwiaGFzQ2xhc3MiLCJwYXJlbnQiLCJmaW5kIiwibWFnbmlmaWNQb3B1cCIsImRlbGVnYXRlIiwidHlwZSIsInJlbW92YWxEZWxheSIsImdhbGxlcnkiLCJlbmFibGVkIiwibmF2aWdhdGVCeUltZ0NsaWNrIiwiY2FsbGJhY2tzIiwiYmVmb3JlT3BlbiIsInN0IiwiaW1hZ2UiLCJtYXJrdXAiLCJyZXBsYWNlIiwibWFpbkNsYXNzIiwiZWwiLCJjbG9zZU9uQ29udGVudENsaWNrIiwibWlkQ2xpY2siLCJmYWRlIiwiYXNOYXZGb3IiLCJjZW50ZXJNb2RlIiwiZm9jdXNPblNlbGVjdCIsImdyaWRpZnkiLCJpbml0IiwiJGJvZHkiLCJib2R5IiwiJG92ZXJsYXlCYXIiLCIkb3ZlcmxheU1lbnUiLCIkbW9iaWxlQmFyIiwibGFzdFNjcm9sbFRvcCIsImtleXVwIiwiZXZlbnQiLCJrZXlDb2RlIiwidHJpZ2dlciIsImZhZGVJbiIsIm9mZiIsImZhZGVPdXQiLCJwYXJlbnRzIiwidG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJpc01vYmlsZURldmljZSIsInRlc3QiLCJwaG9uZVJlZ2V4IiwicmVwbGFjZVBob25lTnVtYmVyc1dpdGhMaW5rcyIsImNvbnRlbnRzIiwiZmlsdGVyIiwibm9kZVR5cGUiLCJOb2RlIiwiVEVYVF9OT0RFIiwiZWFjaCIsInJlcGxhY2VXaXRoIiwidGV4dENvbnRlbnQiLCJyZWNvcmRFdmVudCIsImNhdGVnb3J5IiwiYWN0aW9uIiwibGFiZWwiLCJjb25zb2xlIiwiZXJyb3IiLCJnYSIsImV4cHIiLCJleHRlcm5hbCIsIm9iaiIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImhyZWYiLCJob3N0bmFtZSIsImVtYWlsIiwidGVsIiwic3Vic3RyaW5nIiwicmVsIiwiJGFsZXJ0IiwiJGFsZXJ0Q2xvc2UiLCJzbGlkZVVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQSwrQkFBQSxHQUFXQSxvQ0FBQSxHQUFnQkMsbUJBQU9BLENBQUMsQ0FBUixDQUEzQjs7QUFFQUEsbUJBQU9BLENBQUMsQ0FBUjs7QUFFQUEsbUJBQU9BLENBQUMsQ0FBUjs7QUFFQUEsbUJBQU9BLENBQUMsQ0FBUjs7QUFFQUEsbUJBQU9BLENBQUMsQ0FBUjs7QUFFQUQsT0FBT0UsT0FBUCxHQUFpQkQsbUJBQU9BLENBQUMsQ0FBUixDQUFqQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQUUsRUFBRUMsUUFBRixFQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3Qix5QkFBeEIsRUFBbUQsWUFBVztBQUMxRCxRQUFJQyxTQUFTSCxFQUFFLEtBQUtJLElBQVAsQ0FBYjtBQUNBSixNQUFFLFlBQUYsRUFBZ0JLLE9B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MkIsU0FBUzdLLEVBQUUsZ0JBQUYsQ0FBYjtBQUFBLElBQ0k4SyxjQUFjRCxPQUFPdEUsSUFBUCxDQUFZLG1CQUFaLENBRGxCOztBQUdBdUUsWUFBWTVLLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFVBQVUwQyxDQUFWLEVBQWE7QUFDakNBLE1BQUVDLGNBQUY7QUFDQTlDLFlBQVErQyxHQUFSLENBQVksT0FBWixFQUFxQitILE9BQU94RyxJQUFQLENBQVksUUFBWixDQUFyQjtBQUNBd0csV0FBT0UsT0FBUDtBQUNILENBSkQsRTs7Ozs7OztBQ0hBLHlDOzs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvZGlzdC9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcblxucmVxdWlyZSgnYm9vdHN0cmFwLXNhc3MnKTtcblxucmVxdWlyZSgnc2xpY2stY2Fyb3VzZWwnKTtcblxucmVxdWlyZSgnanF1ZXJ5LW1hdGNoLWhlaWdodCcpO1xuXG5yZXF1aXJlKCdtYWduaWZpYy1wb3B1cCcpO1xuXG53aW5kb3cuQ29va2llcyA9IHJlcXVpcmUoJ2pzLWNvb2tpZScpO1xuXG5pbXBvcnQgU2NyaXB0cyBmcm9tICcuL3NjcmlwdHMnO1xuXG5pbXBvcnQgTGF6eUxvYWRpbmcgZnJvbSAnLi9sYXp5bG9hZGluZyc7XG5cbmltcG9ydCBNYXRyaXggZnJvbSAnLi9tYXRyaXgnO1xuXG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuL292ZXJsYXknO1xuXG5pbXBvcnQgVHJhY2tpbmcgZnJvbSAnLi90cmFja2luZyc7XG5cbmltcG9ydCBBbGVydCBmcm9tICcuL2FsZXJ0JztcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5oZXJvLXNjcm9sbFtocmVmXj1cIiNcIl0nLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wXG4gICAgfSwgMTAwMCk7XG59KTtcblxuJCgnLnRlc3RpbW9uaWFscy1zbGlkZXInKS5zbGljayh7XG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICBkb3RzOiB0cnVlXG59KTtcblxuJCgnLnRocmVlLWNvbHVtbi1ibG9jay1jb250YWluZXIgLnJvdycpLnNsaWNrKHtcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgIHNldHRpbmdzOiAndW5zbGljaydcbiAgICAgICAgfVxuICAgIF1cbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvamF2YXNjcmlwdC9hcHAuanMiLCJjb25zdCBpZVZlcnNpb24gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKG5ldyBSZWdFeHAoXCJNU0lFIChbMC05XXsxLH1bXFwuMC05XXswLH0pXCIpLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudCkgIT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KFJlZ0V4cC4kMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59KSgpO1xyXG5cclxuLy8gQ1NSRiBmaXhcclxuY29uc3QgY3NyZklucHV0TmFtZSA9ICQoJ21ldGFbbmFtZT1cImNzcmZUb2tlbk5hbWVcIl0nKS5hdHRyKCdjb250ZW50JyksXHJcbiAgICBjc3JmSW5wdXRWYWx1ZSA9ICQoJ21ldGFbbmFtZT1cImNzcmZUb2tlblZhbHVlXCJdJykuYXR0cignY29udGVudCcpO1xyXG5cclxud2luZG93LmNzcmZUb2tlbkRhdGEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIFtjc3JmSW5wdXROYW1lXTogY3NyZklucHV0VmFsdWVcclxuICAgIH07XHJcbn07XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2lucHV0W25hbWU9XCInICsgY3NyZklucHV0TmFtZSArICdcIl0nKS52YWwoY3NyZklucHV0VmFsdWUpO1xyXG5cclxuICAgIC8vIElFIE5vdGljZVxyXG4gICAgaWYgKGllVmVyc2lvbiAhPT0gZmFsc2UgJiYgaWVWZXJzaW9uIDw9IDEwKSB7XHJcbiAgICAgICAgJCgnZGl2I2llbm90aWNlJykuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNjcm9sbCB0byBmaXJzdCBmb3JtIGVycm9yIG9uIHBhZ2UgbG9hZFxyXG4gICAgaWYgKCQoJ3VsLmVycm9ycycpLmxlbmd0aCkge1xyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKCd1bC5lcnJvcnMnKS5maXJzdCgpLm9mZnNldCgpLnRvcCArICdweCdcclxuICAgICAgICB9LCAnZmFzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhvbWVwYWdlXHJcbiAgICBsZXQgJGJhbm5lciA9ICQoJyNiYW5uZXInKS5ub3QoJy5zbGljay1pbml0aWFsaXplZCcpLnNsaWNrKHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgcm93czogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQWNjZXNzaWJpbGl0eSBwYW5lbFxyXG5cclxuICAgIHZhciBjbGFzc05hbWUgPSBcImhpZ2gtY29udHJhc3QtYm9keVwiO1xyXG4gICAgaWYgKENvb2tpZXMuZ2V0KFwiY29udHJhc3RcIikgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAkKCcuaGlnaC1jb250cmFzdCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGlnaC1jb250cmFzdC1ib2R5Jyk7XHJcbiAgICAgICAgQ29va2llcy5zZXQoJ2NvbnRyYXN0JywgJ2hpZ2gtY29udHJhc3QnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5ub3JtYWwnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2hpZ2gtY29udHJhc3QtYm9keScpO1xyXG4gICAgICAgIENvb2tpZXMucmVtb3ZlKCdjb250cmFzdCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlRm9udFNpemUob3B0aW9uLCB0YWcsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAkKHRhZyk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbGV0IGZvbnRTaXplID0gZWxlbWVudC5jc3MoJ2ZvbnQtc2l6ZScpLnNsaWNlKDAsIC0yKTtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZWRGb250U2l6ZTtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbiA9PT0gJ2luY3JlYXNlJykge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEZvbnRTaXplID0gcGFyc2VJbnQoZm9udFNpemUpICsgdmFsdWUgKyAncHgnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbiA9PT0gJ2RlY3JlYXNlJykge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEZvbnRTaXplID0gcGFyc2VJbnQoZm9udFNpemUpIC0gdmFsdWUgKyAncHgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdmb250LXNpemUnLCB1cGRhdGVkRm9udFNpemUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VGb250U2l6ZXMob3B0aW9uLCB0YWdzLCBzaXplKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZUZvbnRTaXplKG9wdGlvbiwgdGFnc1tpXSwgc2l6ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZEZvbnRTaXplKCkge1xyXG4gICAgICAgIGlmIChDb29raWVzLmdldChcInRleHQtc2l6ZVwiKSA9PT0gJ3NtYWxsJykge1xyXG4gICAgICAgICAgICBjaGFuZ2VGb250U2l6ZXMoJ2RlY3JlYXNlJywgWydib2R5JywgJ2gxJywgJ3AnLCAnYS5zbWFsbCcsICdhLm1lZGl1bScsICdhLmxhcmdlJywgJyNvdmVybGF5LW1lbnUgbGkgYScsICcjaW5mbyBsaSBhJywgJyNjb250YWN0LWRldGFpbHMgcCcsICcjYnJlYWRjcnVtYiBsaSddLCA1KTtcclxuICAgICAgICB9IGVsc2UgaWYgKENvb2tpZXMuZ2V0KFwidGV4dC1zaXplXCIpID09PSAnbGFyZ2UnKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZUZvbnRTaXplcygnaW5jcmVhc2UnLCBbJ2JvZHknLCAnaDEnLCAncCcsICdhLnNtYWxsJywgJ2EubWVkaXVtJywgJ2EubGFyZ2UnLCAnI292ZXJsYXktbWVudSBsaSBhJywgJyNpbmZvIGxpIGEnLCAnI2NvbnRhY3QtZGV0YWlscyBwJywgJyNicmVhZGNydW1iIGxpJ10sIDUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkRm9udFNpemUoKTtcclxuXHJcbiAgICAkKCdhLmxhcmdlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKENvb2tpZXMuZ2V0KFwidGV4dC1zaXplXCIpID09PSAnbGFyZ2UnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hhbmdlRm9udFNpemVzKCdpbmNyZWFzZScsIFsnYm9keScsICdoMScsICdwJywgJ2Euc21hbGwnLCAnYS5tZWRpdW0nLCAnYS5sYXJnZScsICcjb3ZlcmxheS1tZW51IGxpIGEnLCAnI2luZm8gbGkgYScsICcjY29udGFjdC1kZXRhaWxzIHAnLCAnI2JyZWFkY3J1bWIgbGknXSwgQ29va2llcy5nZXQoXCJ0ZXh0LXNpemVcIikgPT09ICdzbWFsbCcgPyAxMCA6IDUpO1xyXG5cclxuICAgICAgICBpZiAoQ29va2llcy5nZXQoXCJ0ZXh0LXNpemVcIikgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBDb29raWVzLnNldCgndGV4dC1zaXplJywgJ2xhcmdlJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChDb29raWVzLmdldChcInRleHQtc2l6ZVwiKSA9PT0gJ3NtYWxsJykge1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZSgndGV4dC1zaXplJyk7XHJcbiAgICAgICAgICAgIENvb2tpZXMuc2V0KCd0ZXh0LXNpemUnLCAnbGFyZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdhLnNtYWxsJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKENvb2tpZXMuZ2V0KFwidGV4dC1zaXplXCIpID09PSAnc21hbGwnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hhbmdlRm9udFNpemVzKCdkZWNyZWFzZScsIFsnYm9keScsICdoMScsICdwJywgJ2Euc21hbGwnLCAnYS5tZWRpdW0nLCAnYS5sYXJnZScsICcjb3ZlcmxheS1tZW51IGxpIGEnLCAnI2luZm8gbGkgYScsICcjY29udGFjdC1kZXRhaWxzIHAnLCAnI2JyZWFkY3J1bWIgbGknXSwgQ29va2llcy5nZXQoXCJ0ZXh0LXNpemVcIikgPT09ICdsYXJnZScgPyAxMCA6IDUpO1xyXG5cclxuICAgICAgICBpZiAoQ29va2llcy5nZXQoXCJ0ZXh0LXNpemVcIikgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBDb29raWVzLnNldCgndGV4dC1zaXplJywgJ3NtYWxsJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChDb29raWVzLmdldChcInRleHQtc2l6ZVwiKSA9PT0gJ2xhcmdlJykge1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZSgndGV4dC1zaXplJyk7XHJcbiAgICAgICAgICAgIENvb2tpZXMuc2V0KCd0ZXh0LXNpemUnLCAnc21hbGwnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdhLm1lZGl1bScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIENvb2tpZXMucmVtb3ZlKCd0ZXh0LXNpemUnKTtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qYXZhc2NyaXB0L3NjcmlwdHMuanMiLCJsZXQgJGxvYWRDb250YWluZXIgPSAkKCdkaXYjYWpheC1jb250YWluZXInKSxcclxuICAgICRsYXN0Q2hpbGQgPSAkKCdkaXYjYWpheC1jb250YWluZXIgLmxpc3QtY2FyZC1pdGVtJykubGFzdCgpLFxyXG4gICAgc2VjdGlvbiA9ICRsb2FkQ29udGFpbmVyLmRhdGEoJ3NlY3Rpb24nKSxcclxuICAgIG9mZnNldCA9IHBhcnNlSW50KCRsb2FkQ29udGFpbmVyLmRhdGEoJ2xpbWl0JyksIDEwKSxcclxuICAgIGxpbWl0ID0gcGFyc2VJbnQoJGxvYWRDb250YWluZXIuZGF0YSgnbGltaXQnKSwgMTApLFxyXG4gICAgb3JkZXIgPSAkbG9hZENvbnRhaW5lci5kYXRhKCdvcmRlcicpLFxyXG4gICAgc29ydCA9ICRsb2FkQ29udGFpbmVyLmRhdGEoJ3NvcnQnKSxcclxuICAgIHllYXIgPSAkbG9hZENvbnRhaW5lci5kYXRhKCd5ZWFyJyksXHJcbiAgICBtb250aCA9ICRsb2FkQ29udGFpbmVyLmRhdGEoJ21vbnRoJyksXHJcbiAgICBsb2FkaW5nID0gZmFsc2UsXHJcbiAgICBzaG91bGRMb2FkID0gJGxvYWRDb250YWluZXIubGVuZ3RoID4gMDtcclxuXHJcbi8vIGlzT25TY3JlZW4gLSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMzIyMjUyM1xyXG4kLmZuLmlzT25TY3JlZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgd2luID0gJCh3aW5kb3cpLFxyXG4gICAgICAgIGJvdW5kcyA9IHRoaXMub2Zmc2V0KCksXHJcbiAgICAgICAgdmlld3BvcnQgPSB7XHJcbiAgICAgICAgICAgIHRvcDogd2luLnNjcm9sbFRvcCgpLFxyXG4gICAgICAgICAgICBsZWZ0OiB3aW4uc2Nyb2xsTGVmdCgpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB2aWV3cG9ydC5yaWdodCA9IHZpZXdwb3J0LmxlZnQgKyB3aW4ud2lkdGgoKTtcclxuICAgIHZpZXdwb3J0LmJvdHRvbSA9IHZpZXdwb3J0LnRvcCArIHdpbi5oZWlnaHQoKTtcclxuXHJcbiAgICBib3VuZHMucmlnaHQgPSBib3VuZHMubGVmdCArIHRoaXMub3V0ZXJXaWR0aCgpO1xyXG4gICAgYm91bmRzLmJvdHRvbSA9IGJvdW5kcy50b3AgKyB0aGlzLm91dGVySGVpZ2h0KCk7XHJcblxyXG4gICAgcmV0dXJuICghKHZpZXdwb3J0LnJpZ2h0IDwgYm91bmRzLmxlZnQgfHwgdmlld3BvcnQubGVmdCA+IGJvdW5kcy5yaWdodCB8fCB2aWV3cG9ydC5ib3R0b20gPCBib3VuZHMudG9wIHx8IHZpZXdwb3J0LnRvcCA+IGJvdW5kcy5ib3R0b20pKTtcclxufTtcclxuXHJcbiQuZm4uaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAhdGhpcy5jaGlsZHJlbigpLmxlbmd0aCAmJiAhdGhpcy50ZXh0KCkubWF0Y2goL1xcUy8pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0VXJsKCkge1xyXG4gICAgbGV0IHVybCA9ICcvYWpheC8nICsgc2VjdGlvbiArICcvJyArIG9mZnNldCArICcvJyArIGxpbWl0ICsgJy8nICsgb3JkZXIgKyAnLycgKyBzb3J0ICsgJy8nO1xyXG5cclxuICAgIGlmICh5ZWFyICYmIG1vbnRoKSB7XHJcbiAgICAgICAgdXJsICs9ICcvJyArIHllYXIgKyAnLycgKyBtb250aDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdXJsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkKCkge1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgJC5wb3N0KGdldFVybCgpLCBjc3JmVG9rZW5EYXRhKCksIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgZGF0YSA9ICQudHJpbShkYXRhKTtcclxuXHJcbiAgICAgICAgaWYgKCEkKGRhdGEpLmlzRW1wdHkoKSkge1xyXG4gICAgICAgICAgICAvLyBBZGQgbmV3IGNoaWxkcmVuXHJcbiAgICAgICAgICAgICRsb2FkQ29udGFpbmVyLmFwcGVuZChkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlc2V0IGxhc3QgY2hpbGRcclxuICAgICAgICAgICAgJGxhc3RDaGlsZCA9ICQoJ2RpdiNhamF4LWNvbnRhaW5lcicpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBvZmZzZXRcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IGxpbWl0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFNldCB0byBub3QgdHJ5IGxvYWQgYW55bW9yZVxyXG4gICAgICAgICAgICBzaG91bGRMb2FkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZXNldCBsb2FkaW5nIHN0YXRlXHJcbiAgICAgICAgbG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHNob3VsZExvYWQgJiYgIWxvYWRpbmcgJiYgJGxhc3RDaGlsZC5sZW5ndGggPiAwICYmICRsYXN0Q2hpbGQuaXNPblNjcmVlbigpKSB7XHJcbiAgICAgICAgICAgIGxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2phdmFzY3JpcHQvbGF6eWxvYWRpbmcuanMiLCIvLyBBY2NvcmRpb25zXHJcbiQoJ2Rpdi5hY2NvcmRpb25zIGgzLmFjY29yZGlvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBpc09wZW4gPSAkKHRoaXMpLmhhc0NsYXNzKCdvcGVuJyk7XHJcblxyXG4gICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCdoMy5hY2NvcmRpb24nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2Rpdi5hY2NvcmRpb25zIGgzLmFjY29yZGlvbicpLmZpcnN0KCkuYWRkQ2xhc3MoJ29wZW4nKTtcclxuXHJcbiAgICAvLyBHYWxsZXJpZXNcclxuICAgICQoJy5nYWxsZXJ5LXNsaWRlcicpLm5vdCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICByb3dzOiAwLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSW1hZ2UgcG9wdXBzXHJcbiAgICAkKCcuZ2FsbGVyeS1waW50ZXJlc3QsIC5nYWxsZXJ5LWdyaWQsIC5nYWxsZXJ5LXNsaWRlcicpLm1hZ25pZmljUG9wdXAoe1xyXG4gICAgICAgIGRlbGVnYXRlOiAnYScsXHJcbiAgICAgICAgdHlwZTogJ2ltYWdlJyxcclxuICAgICAgICByZW1vdmFsRGVsYXk6IDUwMCwgLy9kZWxheSByZW1vdmFsIGJ5IFggdG8gYWxsb3cgb3V0LWFuaW1hdGlvblxyXG4gICAgICAgIGdhbGxlcnk6IHtcclxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgbmF2aWdhdGVCeUltZ0NsaWNrOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgIGJlZm9yZU9wZW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGp1c3QgYSBoYWNrIHRoYXQgYWRkcyBtZnAtYW5pbSBjbGFzcyB0byBtYXJrdXBcclxuICAgICAgICAgICAgICAgIHRoaXMuc3QuaW1hZ2UubWFya3VwID0gdGhpcy5zdC5pbWFnZS5tYXJrdXAucmVwbGFjZSgnbWZwLWZpZ3VyZScsICdtZnAtZmlndXJlIG1mcC13aXRoLWFuaW0nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3QubWFpbkNsYXNzID0gdGhpcy5zdC5lbC5hdHRyKCdkYXRhLWVmZmVjdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zZU9uQ29udGVudENsaWNrOiB0cnVlLFxyXG4gICAgICAgIG1pZENsaWNrOiB0cnVlIC8vIGFsbG93IG9wZW5pbmcgcG9wdXAgb24gbWlkZGxlIG1vdXNlIGNsaWNrLiBBbHdheXMgc2V0IGl0IHRvIHRydWUgaWYgeW91IGRvbid0IHByb3ZpZGUgYWx0ZXJuYXRpdmUgc291cmNlLlxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoJy5nYWxsZXJ5LXNsaWRlci10b3AnKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICBhc05hdkZvcjogJy5nYWxsZXJ5LXNsaWRlci1ib3R0b20nXHJcbiAgICB9KTtcclxuICAgICQoJy5nYWxsZXJ5LXNsaWRlci1ib3R0b20nKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGFzTmF2Rm9yOiAnLmdhbGxlcnktc2xpZGVyLXRvcCcsXHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIGdyaWRpZnkuaW5pdCgpO1xyXG5cclxuICAgIC8vIENhbGxvdXRzIHNsaWRlclxyXG4gICAgJCgnLmNhbGxvdXRzLXNsaWRlcicpLm5vdCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICByb3dzOiAwLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qYXZhc2NyaXB0L21hdHJpeC5qcyIsIi8vIE9wZW4vY2xvc2Ugb3ZlcmxheVxubGV0ICRib2R5ID0gJChkb2N1bWVudC5ib2R5KSxcbiAgICAkb3ZlcmxheUJhciA9ICQoJ2RpdiNvdmVybGF5LWJhcicpLFxuICAgICRvdmVybGF5TWVudSA9ICQoJ2RpdiNvdmVybGF5LW1lbnUnKSxcbiAgICAkbW9iaWxlQmFyID0gJCgnbmF2I292ZXJsYXktYmFyJyksXG4gICAgbGFzdFNjcm9sbFRvcCA9IDA7XG5cbiQoJy5vcGVuLW92ZXJsYXknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkYm9keS5hZGRDbGFzcygnb3ZlcmxheS1vcGVuJyk7XG5cbiAgICAkYm9keS5rZXl1cChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICAkKCcuY2xvc2Utb3ZlcmxheScpLnRyaWdnZXIoJ2NsaWNrJylcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJG92ZXJsYXlNZW51LmZhZGVJbigpO1xufSk7XG5cbiQoJy5jbG9zZS1vdmVybGF5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAkYm9keS5vZmYoJ2tleXVwJyk7XG4gICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ292ZXJsYXktb3BlbicpO1xuICAgICRvdmVybGF5TWVudS5mYWRlT3V0KCk7XG59KTtcblxuLy8gRXhwYW5kL2NvbnRyYWN0IGluc2lkZSBvdmVybGF5XG4kKCdkaXYjb3ZlcmxheS1tZW51IG5hdiA+IHVsID4gbGkgPiBhIHNwYW4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIFRvZ2dsZSBzdWIgbWVudSB2aXNpYmlsaXR5LlxuICAgICQodGhpcykucGFyZW50cygnbGknKVxuICAgICAgICAuZmlyc3QoKVxuICAgICAgICAuY2hpbGRyZW4oJ3VsJylcbiAgICAgICAgLnRvZ2dsZSgpO1xuXG4gICAgLy8gVG9nZ2xlIGljb24gZm9yIGRyb3Bkb3duLlxuICAgICQodGhpcykuZmluZCgnW2RhdGEtZmEtcHJvY2Vzc2VkXScpXG4gICAgICAgIC50b2dnbGVDbGFzcygnZmEtbWludXMnKVxuICAgICAgICAudG9nZ2xlQ2xhc3MoJ2ZhLXBsdXMnKTtcbn0pO1xuXG4kKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc3QgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0IDwgNTApIHtcbiAgICAgICAgJG92ZXJsYXlCYXIucmVtb3ZlQ2xhc3MoJ29mZnNjcmVlbiBzY3JvbGxlZCcpO1xuICAgIH0gZWxzZSBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wKSB7XG4gICAgICAgICRvdmVybGF5QmFyLmFkZENsYXNzKCdvZmZzY3JlZW4nKTtcbiAgICAgICAgJG92ZXJsYXlCYXIuYWRkQ2xhc3MoJ3Njcm9sbGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJG92ZXJsYXlCYXIucmVtb3ZlQ2xhc3MoJ29mZnNjcmVlbicpO1xuICAgIH1cblxuICAgIGxhc3RTY3JvbGxUb3AgPSBzdDtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2phdmFzY3JpcHQvb3ZlcmxheS5qcyIsImxldCBpc01vYmlsZURldmljZSA9IC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxcclxuICAgIHBob25lUmVnZXggPSAvKCgwfFxcKzQ0XFxzP1xcKDBcXCl8XFwrNDQpXFxzP1xcZCtcXHM/XFxkK1xccz9cXGQrKS87IC8vIGh0dHBzOi8vcmVnZXgxMDEuY29tL3IvWGQ2bFpYXHJcblxyXG53aW5kb3cucmVwbGFjZVBob25lTnVtYmVyc1dpdGhMaW5rcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2JvZHkgKicpLmNvbnRlbnRzKCkuZmlsdGVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREU7XHJcbiAgICB9KS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMudGV4dENvbnRlbnQucmVwbGFjZShwaG9uZVJlZ2V4LCAnPGEgaHJlZj1cInRlbDokJlwiPiQmPC9hPicpKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxud2luZG93LnJlY29yZEV2ZW50ID0gZnVuY3Rpb24gKGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvd1snZ2EnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdBdHRlbXB0aW5nIHRvIHRyYWNrIGV2ZW50IHdpdGggR0Egbm90IGluc3RhbGxlZCwgcGxlYXNlIGNoZWNrIGJlZm9yZSBnby1saXZlIScpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0V2ZW50OicsIGNhdGVnb3J5ICsgJywgJyArIGFjdGlvbiArICcsICcgKyBsYWJlbCk7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnYSgnc2VuZCcsICdldmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsKTtcclxufTtcclxuXHJcbi8vIExpbmsgdHJhY2tpbmdcclxuJC5leHByWyc6J10uZXh0ZXJuYWwgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICBpZiAob2JqLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2EnKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvYmouaHJlZiAmJiAhb2JqLmhyZWYubWF0Y2goL15tYWlsdG86LykgJiYgIW9iai5ocmVmLm1hdGNoKC9eamF2YXNjcmlwdDovKSAmJiAob2JqLmhvc3RuYW1lLnJlcGxhY2UoL153d3dcXC4vaSwgJycpICE9PSBkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZS5yZXBsYWNlKC9ed3d3XFwuL2ksICcnKSk7XHJcbn07XHJcblxyXG4kLmV4cHJbJzonXS5lbWFpbCA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgIGlmIChvYmoudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnYScpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9iai5ocmVmICYmIG9iai5ocmVmLm1hdGNoKC9ebWFpbHRvOi8pO1xyXG59O1xyXG5cclxuJC5leHByWyc6J10udGVsID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgaWYgKG9iai50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdhJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb2JqLmhyZWYgJiYgb2JqLmhyZWYubWF0Y2goL150ZWw6Lyk7XHJcbn07XHJcblxyXG4kKCdhOmV4dGVybmFsJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcmVjb3JkRXZlbnQoJ0V4dGVybmFsIExpbmsnLCAnQ2xpY2snLCB0aGlzLmhvc3RuYW1lLnJlcGxhY2UoL2h0dHAocyk/OlxcL1xcLy9pKSk7XHJcbn0pO1xyXG5cclxuJCgnYTplbWFpbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJlY29yZEV2ZW50KCdNYWlsdG8nLCAnQ2xpY2snLCAkKHRoaXMpLmF0dHIoJ2hyZWYnKS5zdWJzdHJpbmcoNykpO1xyXG59KTtcclxuXHJcbiQoJ2E6dGVsJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcmVjb3JkRXZlbnQoJ1Bob25lIE51bWJlcicsICdDbGljaycsICQodGhpcykuYXR0cignaHJlZicpLnN1YnN0cmluZyg0KSk7XHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdhOmV4dGVybmFsLCBhOmVtYWlsJykuYXR0cih7XHJcbiAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcclxuICAgICAgICByZWw6ICdleHRlcm5hbCdcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENvbnZlcnQgcGhvbmUgbnVtYmVyc1xyXG4gICAgaWYgKGlzTW9iaWxlRGV2aWNlKSB7XHJcbiAgICAgICAgcmVwbGFjZVBob25lTnVtYmVyc1dpdGhMaW5rcygpO1xyXG4gICAgfVxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2phdmFzY3JpcHQvdHJhY2tpbmcuanMiLCJsZXQgJGFsZXJ0ID0gJCgnZGl2I3NpdGUtYWxlcnQnKSxcclxuICAgICRhbGVydENsb3NlID0gJGFsZXJ0LmZpbmQoJyNzaXRlLWFsZXJ0LWNsb3NlJyk7XHJcblxyXG4kYWxlcnRDbG9zZS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgQ29va2llcy5zZXQoJ2FsZXJ0JywgJGFsZXJ0LmRhdGEoJ2V4cGlyeScpKTtcclxuICAgICRhbGVydC5zbGlkZVVwKCk7XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvamF2YXNjcmlwdC9hbGVydC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGUvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGUvZm9udGF3ZXNvbWUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==