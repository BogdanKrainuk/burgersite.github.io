$(document).ready(() => {

    $('.category').click((e) => {
        $('.category').removeClass('active')
        $('.products-container').hide();
        let currentElement = $(e.target);
        let id = currentElement.data('id');
        $('#' + id).show();
        currentElement.addClass('active');

        $('#' + id + ' .products').slick('refresh');
        $('#' + id + ' .products-nav').slick('refresh');
    });

    $('#burger-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#burger-container .products-nav'
    });
    $('#burger-container .products-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        asNavFor: '#burger-container .products',
        infinite: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('#fries-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#fries-container .products-nav'
    });
    $('#fries-container .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#fries-container .products',
        infinite: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('#sauces-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#sauces-container .products-nav'
    });
    $('#sauces-container .products-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '#sauces-container .products',
        infinite: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('#drinks-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#drinks-container .products-nav'
    });
    $('#drinks-container .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#drinks-container .products',
        infinite: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('#reviews').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 579,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
        ]
    });
    $('.open-modal').click(() => {
        $('#reservation-container').css('display', 'flex');
    });

    $('#reservation-cancel-clouse, #reservation-container').click((e) => {
        if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-clouse') {
            $('#reservation-container').hide();
        }
    });

    $('#reserve-button > button').click(() => {
        let name = $('#name');
        let count = $('#count');
        let phone = $('#phone');
        let time = $('#time');

        if (name.val() && count.val() && phone.val() && time.val()){
            $.ajax({
               type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&count=' + count.val() + '&phone=' + phone.val() + '&time=' + time.val(),
                success: () => {
                    $('#reservation-sent').show();
                    $('#reservation-content').hide();
                },
                error: () => {
                    $('#reservation-container').hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона')
                }
            });
        } else {
            $('#reserve-error').show();
        }
    });

    $('#burger').click(() => {
        $('#header').toggleClass('menu-open');
    });

    $('#header #menu ul li').click(() => {
        $('#header').removeClass('menu-open');
    })
});
