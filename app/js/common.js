$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        prevArrow: '<button class="slick-prev" type="button"></button>',
        nextArrow: '<button class="slick-next" type="button"></button>'
    });

    $('#navbarSupportedContent').on('show.bs.collapse', function () {
        $('.overlay').addClass('menu-shown');
        
        $('.menu-shown').click(function () {
            $('.overlay').removeClass('menu-shown');
            $('.navbar-collapse').removeClass('show')
        })
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

    var $grid = $('.grid').isotope();

    $('.filter').click( function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue,
            masonry: {
                columnWidth: 80
            }});
    });

    console.log($(window).width())

    var works = [
        {
            workImage: "img/img-1.jpg",
            path: "#",
            description: 'nature',
            id: 1
        },
        {
            workImage: "img/img-2.jpg",
            path: "#",
            description: 'tables',
            id: 2
        },
        {
            workImage: "img/img-3.jpg",
            path: "#",
            description: 'tables',
            id: 3
        },
        {
            workImage: "img/img-4.jpg",
            path: "#",
            description: 'animal',
            id: 4
        },
        {
            workImage: "img/img-5.jpg",
            path: "#",
            description: 'computer',
            id: 5
        },
        {
            workImage: "img/img-6.jpg",
            path: "#",
            description: 'tables',
            id: 6
        },
        {
            workImage: "img/img-7.jpg",
            path: "#",
            description: 'nature',
            id: 7
        },
        {
            workImage: "img/img-8.jpg",
            path: "#",
            description: 'tables',
            id: 8
        },
        {
            workImage: "img/img-9.jpg",
            path: "#",
            description: 'animal',
            id: 9
        },
        {
            workImage: "img/img-10.jpg",
            path: "#",
            description: 'nature',
            id: 10
        }
    ];

    var endOfTheWorksListElement = $('<div class="alert-block" />');
    var paragraph = $("<p>This is all our works</p>");
    endOfTheWorksListElement.append(paragraph)

    var elements = [];
    works.map(function (item) {
        var elem = $("<div class='custom-block col grid-item'></div>");
        var a = $("<div class='mb-4'></div>");
        var link = $("<a></a>");
        var img = $("<div class='img-holder'></div>");
        var path = "url('../../" + item.workImage +"')";
        img.css('backgroundImage', path)
        link.attr("href", item.path);
        link.append(img)
        elem.addClass(item.description);
        elem.append(a)
        elem.attr("id", item.id)
        a.append(link)
       return elements.push(elem);
    });

    if ($(window).width() >= 1200){
        $grid.append(elements);
        var altelem = $('.grid').find('.grid-item');
        $grid.isotope( 'appended', altelem );


    } else if ($(window).width() >= 320 && $(window).width() <= 767){
        var elemForMobile = [];
        for (var i = 0; i < 3; i++){
            elemForMobile.push(elements[i]);
        };
        $grid.append(elemForMobile);
        var altelem1 = $('.grid').find('.grid-item');
        $grid.isotope( 'appended', altelem1 );


    } else if ($(window).width() >= 767 && $(window).width() <= 1199) {
        var elemForTablet = [];
        for (var i = 0; i < 5; i++){
            elemForTablet.push(elements[i]);
        };
        $grid.append(elemForTablet);
        var altelem2 = $('.grid').find('.grid-item');
        $grid.isotope( 'appended', altelem2 );

    }


    $('#vieMore').click(function (e) {
        e.preventDefault();
        var allItemsInBlock = $('.grid').children();
            length = allItemsInBlock.length-1;

        if (length == elements.length){
            $('.latest-work').append(endOfTheWorksListElement);
        }

        for (var j = length; j <= length+2; j++) {

            $grid.append(elements[j]);
            $grid.isotope( 'insert', elements[j] );
        }
    })
});





