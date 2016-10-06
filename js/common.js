/* Search bar  */
$(function(){
    var $searchlink = $('#searchtoggl i');
    var $searchbar  = $('#searchbar');

    $('#searchtoggl').on('click', function(e){
        e.preventDefault();

        if($(this).attr('id') == 'searchtoggl') {
            if(!$searchbar.is(":visible")) {
                // if invisible we switch the icon to appear collapsable
                $searchlink.removeClass('fa-search').addClass('fa-search-minus');
            } else {
                // if visible we switch the icon to appear as a toggle
                $searchlink.removeClass('fa-search-minus').addClass('fa-search');
            }

            $searchbar.slideToggle(300, function(){
                // callback after search bar animation
            });
        }
    });

    $('#searchform').submit(function(e){
        e.preventDefault(); // stop form submission
    });
});
(function(){
    //Сохраняем ссылку на стандартный метод jQuery
    var originalAddClassMethod = jQuery.fn.addClass;
    //Переопределяем
    $.fn.addClass = function(){
        var result = originalAddClassMethod.apply(this, arguments);
        //Инициализируем событие смены класса
        if($(this).hasClass('owl-item')){
            $(this).trigger('cssClassChanged');

        }
        return result;
    }
})();
/* Mobile menu navigation */
var ww = document.body.clientWidth;
$(document).ready(function() {
    $(".nav li a").each(function() {
        if ($(this).next().length > 0) {
            $(this).addClass("parent");
        };
    })

    $(".toggleMenu").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".nav").toggle();
    });
    adjustMenu();

    if($('#form-auth').length){
        $('#form-auth').validate({
            rules: {
                login:{
                    required : true
                },
                password : {
                    required: true
                }
            },
            messages: {
                login :{
                    required: "Введите логин"
                },
                password: {
                    required: "Введите пароль"
                }
            },
            errorElement : 'div',
            errorLabelContainer: '.missed-values-auth'
        });

    }
    if($('#form-register').length) {
        $('#form-register').validate({ // initialize the plugin
            rules: {
                login: {
                    required: true
                },
                password: {
                    required: true,
                    minlength: 6
                },
                password_approve: {
                    required: true,
                    minlength: 5,
                    equalTo: "#password"
                },
                email: {
                    required: true,
                },
                name: {
                    required: true
                },
                lastname: {
                    required: true
                },
                phone: {
                    required: true
                }

            },
            messages: {
                login: {
                    required: "Введите корректный логин"
                },
                password: {
                    required: "Введите пароль",
                    minlength: "Пароль должен быть не менее 6 символов"
                },
                password_approve: {
                    required: "Пароль должен совпадать"
                },
                email: {
                    required: "Введите email",
                },
                name: {
                    required: "Не указано имя"
                },
                lastname: {
                    required: "Не указана фамилия"
                },
                phone: {
                    required: "Не указан телефон"
                }
            },
            errorElement: 'div',
            errorLabelContainer: '.missed-values-reg'
        });
    }
    var url = $("#description-header-carousel .owl-stage-outer .owl-item.active .slide-img").attr('data-slide');
    $('section.main-header').css('background', url);

    $("#description-header-carousel .owl-stage-outer .owl-item").bind('cssClassChanged', function(){
        var url = $("#description-header-carousel .owl-stage-outer .owl-item.active .slide-img").attr('data-slide');
        $('section.main-header').css('background', url).fadeTo('slow', 1);
    });
});
$(window).bind('resize orientationchange', function() {
    ww = document.body.clientWidth;
    adjustMenu();
});
var adjustMenu = function() {
    if (ww < 767) {
        $(".toggleMenu").css("display", "inline-block");
        if (!$(".toggleMenu").hasClass("active")) {
            $(".nav").hide();
        } else {
            $(".nav").show();
        }
        $(".nav li").unbind('mouseenter mouseleave');
        $(".nav li a.parent").unbind('click').bind('click', function(e) {
            // must be attached to anchor element to prevent bubbling
            e.preventDefault();
            $(this).parent("li").toggleClass("hover");
        });
    }
    else if (ww >= 768) {
        $(".toggleMenu").css("display", "none");
        $(".nav").show();
        $(".nav li").removeClass("hover");
        $(".nav li a").unbind('click');
        $(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
            // must be attached to li so that mouseleave is not triggered when hover over submenu
            $(this).toggleClass('hover');
        });
    }
};

/* Carousel's  */
$('#clients-carousel').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    dots:true,
    dotsContainer: ".dots-container",
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:2,
            loop:false
        }
    },

});
$('#compare-items').owlCarousel({
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    },
    navContainer: "",
    dots:false,
    navText: [
        "<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 370.8 370.8'><polygon points='292.9 24.8 268.8 0 77.9 185.4 268.8 370.8 292.9 346 127.6 185.4' /></svg>",
        "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 478.4 478.4' width='512' height='512'><polygon points='131.7 0 100.5 32 313.8 239.2 100.5 446.4 131.7 478.4 378 239.2 '/></svg>"
    ]
});
$('#new-arrivals-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,

    responsive:{
        0:{
            items:2,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    },
    navContainer: ".nav-container",
    dots:false,
    navText: [
        "<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 370.8 370.8'><polygon points='292.9 24.8 268.8 0 77.9 185.4 268.8 370.8 292.9 346 127.6 185.4' /></svg>",
        "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 478.4 478.4' width='512' height='512'><polygon points='131.7 0 100.5 32 313.8 239.2 100.5 446.4 131.7 478.4 378 239.2 '/></svg>"
    ]
});
$('#description-header-carousel').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    responsiveClass:true,
    dots:true,
    dotsContainer: ".dots-container-header"
});
$('#early-viewed-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,

    responsive:{
        0:{
            items:2,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    },
    navContainer: ".early-catalog-nav-container",
    dots:false,
    navText: [
        "<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 370.8 370.8'><polygon points='292.9 24.8 268.8 0 77.9 185.4 268.8 370.8 292.9 346 127.6 185.4' /></svg>",
        "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 478.4 478.4' width='512' height='512'><polygon points='131.7 0 100.5 32 313.8 239.2 100.5 446.4 131.7 478.4 378 239.2 '/></svg>"
    ]
});
$('#full-description-carousel').owlCarousel({
    loop:false,
    margin:10,
    items:1,
    dots:false,
    nav:true,
    navContainer: '.full-description-navigation',
    responsive:{
        0:{
            items:3,
        },
        600:{
            items:3,
        },
        1000:{
            items:3,
        }
    },
    navText: [
        "<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 370.8 370.8'><polygon points='292.9 24.8 268.8 0 77.9 185.4 268.8 370.8 292.9 346 127.6 185.4' /></svg>",
        "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 478.4 478.4' width='512' height='512'><polygon points='131.7 0 100.5 32 313.8 239.2 100.5 446.4 131.7 478.4 378 239.2 '/></svg>"
    ]

});

//sync carousel
(function(){
    var $sync1 = $(".big-images"),
        $sync2 = $(".thumbs"),
        flag = false,
        duration = 300;

    $sync1
        .owlCarousel({
            items: 1,
            margin: 10,
            nav: false,
            dots: false,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:1,
                },
                1000:{
                    items:1,
                }
            },
        })
        .on('changed.owl.carousel', function (e) {
            if (!flag) {
                flag = true;
                $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                flag = false;
            }
        });

    $sync2
        .owlCarousel({
            margin: 20,
            items: 3,
            nav: true,
            center: false,
            dots: false,
            responsive:{
                0:{
                    items:3,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:3,
                }
            },
            navText: [
                "<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 370.8 370.8'><polygon points='292.9 24.8 268.8 0 77.9 185.4 268.8 370.8 292.9 346 127.6 185.4' /></svg>",
                "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 478.4 478.4' width='512' height='512'><polygon points='131.7 0 100.5 32 313.8 239.2 100.5 446.4 131.7 478.4 378 239.2 '/></svg>"
            ]

        })
        .on('click', '.owl-item', function () {
            $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

        })
        .on('changed.owl.carousel', function (e) {
            if (!flag) {
                flag = true;
                $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                flag = false;
            }
        });
})();



/* Active links */
var subdiv_name = document.getElementsByClassName('subdiv-name');
var sort_btn = document.getElementsByClassName('sort-btn');
var filter_header = document.getElementsByClassName('filter-header');
var about_link = document.getElementsByClassName('about-link');
function addActive(item){
    $(item).click(function(e){
        e.preventDefault();
        $(item).removeClass('active');
        $(this).addClass('active');
    })
}
addActive(filter_header);
addActive(subdiv_name);
addActive(about_link);
addActive(sort_btn);

/* Modal logic*/
var authorize = document.getElementById('authorize_modal');
var registrModal = document.getElementById('registration_modal');
var signIn = document.getElementById("signIn");
var signUp = document.getElementById("signUp");
var span = document.getElementsByClassName("close")[0];
signIn.onclick = function() {
    authorize.style.display = "block";
};
signUp.onclick = function() {
    registrModal.style.display = "block";
};
$('.close').on('click', function(){
    if($(this).attr('id') == 'auth'){
        authorize.style.display = "none";
    }else
        registrModal.style.display = "none";
});
window.onclick = function(event) {
    if (event.target == authorize) {
        authorize.style.display = "none";
    }
    if(event.target == registrModal){
        registrModal.style.display = "none";
    }
};

/* Active tabs */

$(function(){
    var tabs = $('.tabcontent') ;
    var deepTabs = $('.deep-tab-content');
    deepTabs.hide().filter(':first').show();

    $('.tablinks').click(function(e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            $(this).closest('.tabs').find('.tablinks').removeClass('active');
            $(this).addClass('active').closest('.tabs').find('.tabcontent').hide();
            $($(this).attr('href')).show();
        }
    });
    $('.tabs').each(function () {
        $_this = $(this);
        var _tabs = $_this.find(".tabcontent");
        $_this.find(tabs).hide().filter(':first').show();
    });

    $('.deep-tab-link').click(function(e){
        e.preventDefault();
        deepTabs.hide();
        deepTabs.filter(this.hash).show();
        $('.deep-tab-link').removeClass('active');
        $(this).addClass('active');
    }).filter(':first').click();
});


/*Orders hide and show*/
$(function(){
    var tab = $('.order-full-description-container');
    var orderID = new Array();
    var chev = $('.fa-chevron-down');
    for(var i = 0; i < tab.length; i++){
        orderID.push($(tab[i]).data('order'));
    }
    tab.hide();
    $('.order-short-description').click(function(e){
        if(!tab.is(':visible')){
            $(this).addClass('selected');
            $(this).find('.fa-chevron-right').removeClass('fa-chevron-right').addClass('fa-chevron-down');
        }
        else{
            $('.order-short-description').removeClass('selected');
            console.log($(this).find('.fa-chevron-down').attr('class'))
            $(this).find('.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-right');
        }
        for(var i = 0; i<tab.length; i++){
            $(tab[i]).removeClass('active');

            if($(this).data('order') == orderID[i]){
                $(tab[i]).addClass('active');
                $(tab[i]).slideToggle();
            }
        }
    });
});
