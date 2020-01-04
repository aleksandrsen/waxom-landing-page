$("#our-projects").tabs();

// Main slider
$('.inner-slider').slick({
    // autoplay: true,
    arrows: true,
    dots: true,
    infinite: true
});

// Posts-slider
$('.posts-slider').slick({
    autoplay: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    infinite: true,
    prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-angle-left"></i></div>',
    nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-angle-right"></i></div>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
});

// Ideas slider
$('.ideas-slider').slick({
    autoplay: true,
    arrows: true,
    infinite: true,
    centerMode: true,
    centerPadding: '300px',
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                centerPadding: '250px'
            }
        },
        {
            breakpoint: 992,
            settings: {
                centerPadding: '170px'
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerMode: false
            }
        }
    ]
});

// Mobile menu
$('#menu').slicknav({
    appendTo: 'header .header-content',
    label: ''
});