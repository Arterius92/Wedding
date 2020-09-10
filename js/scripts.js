$(function () {
    $('.home__slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 3000,
        slidesToShow: 1,
        fade: true,
    });

    $('.friends__slider').slick({
        dots: false,
        arrows: true,
        prevArrow: `<div class="slider-arrow-left">
                        <img src="img/slider-arrow-left.png" alt="arrow-left">
                    </div>`,
        nextArrow: `<div class="slider-arrow-right">
                        <img src="img/slider-arrow-right.png" alt="arrow-right">
                    </div>`,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                },
            },
        ],
    });

    $('.blog__slider').slick({
        dots: false,
        arrows: true,
        prevArrow: `<div class="slider-arrow-left">
                        <img src="img/slider-arrow-left.png" alt="arrow-left">
                    </div>`,
        nextArrow: `<div class="slider-arrow-right">
                        <img src="img/slider-arrow-right.png" alt="arrow-right">
                    </div>`,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        infinite: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                },
            },
        ],
    });

    $('.gallery__slider').slick({
        dots: false,
        arrows: true,
        prevArrow: `<div class="slider-arrow-left">
                        <img src="img/slider-arrow-left.png" alt="arrow-left">
                    </div>`,
        nextArrow: `<div class="slider-arrow-right">
                        <img src="img/slider-arrow-right.png" alt="arrow-right">
                    </div>`,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                },
            },
        ],
    });

    //*---------------------------------------------------------------------------------------------------
    $('.mini-menu').click(function () {
        $(this).toggleClass('mini-menu--active');
        if ($(this).hasClass('mini-menu--active')) {
            $('.nav').css('right', '0');
            $('body').css('overflow', 'hidden');
            $('.mask').fadeIn();
        } else {
            $('.nav').css('right', '');
            $('body').css('overflow', '');
            $('.mask').fadeOut();
        }
    });

    //*---------------------------------------------------------------------------------------------------
    menuHead();
    $(window).scroll(function () {
        menuHead();
    });
    function menuHead() {
        if ($(this).scrollTop() > 10) {
            $('.header').css('background', 'rgba(0,0,0,0.6)');
            if ($(window).width() <= 768) {
                $('.header__nav-list').css('background', 'rgba(0,0,0,0.6)');
            } else {
                $('.header__nav-list').css('background', '');
            }
        } else {
            $('.header').css('background', '');
            $('.header__nav-list').css('background', '');
        }
    }

    //*---------------------------------------------------------------------------------------------------
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    //*---------------------------------------------------------------------------------------------------
    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    //*---------------------------------------------------------------------------------------------------
    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });

    //*---------------------------------------------------------------------------------------------------
    $('.header__nav-item-head').hover(function () {
        // e.preventDefault();
        if ($(this).hasClass('hover')) {
            $(this).removeClass('hover');
            $('.header__nav-item-list').slideUp();
        } else {
            $(this).addClass('hover');
            $('.header__nav-item-list').slideDown();
        }
    });

    //*---------------------------------------------------------------------------------------------------
    $('.mini-menu').click(function () {
        $(this).toggleClass('open');
        if ($(this).hasClass('open')) {
            $('.header__nav').css('left', '0');
            $('body').addClass('body-scroll-stop');
        } else {
            $('.header__nav').css('left', '');
            $('body').removeClass('body-scroll-stop');
        }
    });

    //*---------------------------------------------------------------------------------------------------
    let showFooterMenu = $('.footer__item-title');

    showFooterMenu.click(function (e) {
        if ($(window).width() <= 600) {
            e.preventDefault();
            $(this).toggleClass('show');
            $(this).next($('.footer__item-list')).slideToggle(350);
            // $('.footer__item-title').not(this).removeClass('show').next($('.footer__item-list')).slideUp(350);
        } else {
            return false;
        }
    });

    //*---------------------------------------------------------------------------------------------------
    $('form').submit(function () {
        if (
            $('input:checkbox:checked').length < 1 ||
            $('input:text').val() == ''
        ) {
            $('input:text').css('border', '1px solid #C94960');
            alert('Please fill in all fields!');
            return false;
        };
    });

    //*---------------------------------------------------------------------------------------------------
    let map;
    function initMap() {
        let mapOptions = {
            zoom: 17,
            center: new google.maps.LatLng(48.851362, 2.343371),
            scrollwheel: false,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            streetViewControl: false,
            styles: [
                {
                    featureType: 'poi',
                    elementType: 'labels',
                    stylers: [
                        {
                            visibility: 'off',
                        },
                    ],
                },
            ],
        };
        map = new google.maps.Map(document.getElementById('map'), mapOptions);
        let marker = new google.maps.Marker({
            position: { lat: 48.851362, lng: 2.343371 },
            animation: google.maps.Animation.DROP,
            icon: 'img/map-marker.png',
        });
        marker.setMap(map);
    };

    //*---------------------------------------------------------------------------------------------------
    function timer() {
        let nowDate = new Date(),
            achiveDate = new Date(2021, 5, 1, 0, 0, 0, 0), //Задаем дату, к которой будет осуществляться обратный отсчет
            result = achiveDate - nowDate + 1000;
        if (result < 0) {
            let elmnt = document.getElementById('timer');
            elmnt.innerHTML =
                '<div class="wedding-day__timer-number"><h3>' + '-' +'</h3> <span>days</span></div><div class="wedding-day__timer-number"><h3>' + '- -' + '</h3><span>hours</span></div><div class="wedding-day__timer-number"><h3>' + '- -' + '</h3><span>minutes</span></div><div class="wedding-day__timer-number"><h3>' + '- -' + '</h3><span>seconds</span></div>';
            return undefined;
        };
        let seconds = Math.floor((result / 1000) % 60),
            minutes = Math.floor((result / 1000 / 60) % 60),
            hours = Math.floor((result / 1000 / 60 / 60) % 24),
            days = Math.floor(result / 1000 / 60 / 60 / 24);
        if (seconds < 10) seconds = '0' + seconds;
        if (minutes < 10) minutes = '0' + minutes;
        if (hours < 10) hours = '0' + hours;
        let elmnt = document.getElementById('timer');
        elmnt.innerHTML =
            '<div class="wedding-day__timer-number"><h3>' +
            days +
            '</h3> <span>days</span></div><div class="wedding-day__timer-number"><h3>' +
            hours +
            '</h3><span>hours</span></div><div class="wedding-day__timer-number"><h3>' +
            minutes +
            '</h3><span>minutes</span></div><div class="wedding-day__timer-number"><h3>' +
            seconds +
            '</h3><span>seconds</span></div>';
        setTimeout(timer, 1000);
    };
    //*---------------------------------------------------------------------------------------------------
    window.onload = function () {
        timer();
        initMap();
    };
});
