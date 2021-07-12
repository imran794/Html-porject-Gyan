// $('nav a').on('click', function () {
//  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
//      var target = $(this.hash);
//      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//      if (target.length) {
//          $('html, body').animate({
//              scrollTop: target.offset().top - 50
//          }, 1000);
//          return false;
//      }
//  }
//});







/*=============================================
         banner_slider part start
==============================================*/

$('#banner_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoPlay: true,
    prevArrow: '<i class="fa fa-chevron-left prv-arrow3 slick-arrow prev">',
    nextArrow: '<i class="fa fa-chevron-right prv-arrow3 slick-arrow next">',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }

  ]
});


/*=============================================
         banner_slider part end
==============================================*/







/*=============================================
         about_slider part start
==============================================*/


$('.about_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoPlay: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }

  ]
});


/*=============================================
         about_slider part end
==============================================*/





/*=============================================
         count part start
==============================================*/



jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});



/*=============================================
         count part end
==============================================*/




/*=============================================
         Course_slider part start
==============================================*/

$('.Course_slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoPlay: true,
    prevArrow: '<i class="fa fa-chevron-left prv-arrow3 slick-arrow prev1">',
    nextArrow: '<i class="fa fa-chevron-right prv-arrow3 slick-arrow next1">',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }

  ]
});



/*=============================================
         Course_slider part end
==============================================*/

/*=============================================
         calenda part start
==============================================*/



jQuery(document).ready(function () {

    var current_yyyymm_ = moment().format("YYYYMM");

    $("#pb-calendar").pb_calendar({
        schedule_list: function (callback_, yyyymm_) {
            var temp_schedule_list_ = {};

            temp_schedule_list_[current_yyyymm_ + "03"] = [{
                'ID': 1,
                style: "red"
                    }];

            temp_schedule_list_[current_yyyymm_ + "10"] = [{
                    'ID': 2,
                    style: "red"
                        },
                {
                    'ID': 3,
                    style: "blue"
                        },
                    ];

            temp_schedule_list_[current_yyyymm_ + "20"] = [{
                    'ID': 4,
                    style: "red"
                        },
                {
                    'ID': 5,
                    style: "blue"
                        },
                {
                    'ID': 6,
                    style: "green"
                        },
                    ];
            callback_(temp_schedule_list_);
        },
        schedule_dot_item_render: function (dot_item_el_, schedule_data_) {
            dot_item_el_.addClass(schedule_data_['style'], true);
            return dot_item_el_;
        }
    });
});


/*=============================================
         calenda part end
==============================================*/


/*=============================================
         Test_slider part start
==============================================*/

$('.Test_slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoPlay: true,
    prevArrow: '<i class="fa fa-chevron-left prv-arrow3 slick-arrow prev2">',
    nextArrow: '<i class="fa fa-chevron-right prv-arrow3 slick-arrow next2">',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }

  ]
});


/*=============================================
         Test_slider part end
==============================================*/



/*=============================================
         Teacher part start
==============================================*/

$('.Team_slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoPlay: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }

  ]
});


/*=============================================
         Teacher part end
==============================================*/


/*=============================================
         last_slick part start
==============================================*/

$('.last_slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoPlay: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }

  ]
});


/*=============================================
         last_slick part end
==============================================*/



$(document).ready(function(){
    $('.venobox').venobox(); 
});
