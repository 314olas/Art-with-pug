$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        prevArrow: '<button class="slick-prev" type="button"></button>',
        nextArrow: '<button class="slick-next" type="button"></button>'
    });

    $('#navbarSupportedContent').on('show.bs.collapse', function () {
        $('.overlay').addClass('menu-shown');
    });

    $('#navbarSupportedContent').on('hide.bs.collapse', function () {
        $('.overlay').removeClass('menu-shown');
    });

    $(".btn.filter").click(function (e) {
        if (!e.target.classList.contains("active")){
            $(this).addClass("active");
            var siblingsButton=  $(this).siblings("button");
            for (var i = 0; i<siblingsButton.length; i++){
                $(siblingsButton[i]).removeClass('active')
            }
        }
    });
});





