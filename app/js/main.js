$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });

  $('.header__btn-menu').on('click', function () {
    $('.header__top-info').toggleClass('active');
  });




  $('.slider__inner-weekly-main').slick({


    prevArrow: '<button class="slick-arrow slick-prev"><img src="/images/icons/slider-left.png" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="/images/icons/slider-right.png" alt=""></button>',



  });

  $('.slider__inner-followers-main').slick({
    prevArrow: '<button class="slick-arrow slick-prev"><img src="/images/icons/slider-left.png" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="/images/icons/slider-right.png" alt=""></button>',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // variableWidth: true
    responsive: [{
        breakpoint: 1170,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          
        }
      },
{
       breakpoint: 825,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true,

         }
       },
     
    ]
  });


  $('input, select').styler();



  $(".slider__weekly-main-cost-star").rateYo({
    starWidth: "15px",
    rating: 4.5,
    readOnly: true
  });

  $('.single-products__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.single-products__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.single-products__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });





  $('.category__products-filter-line').on('click', function () {
    $('.products__main.page-line').addClass('list');
    $('.products__main').addClass('page-off');
    $('.products__main-logo').addClass('active');
    $('.products__main-logo').removeClass('active');
  });

  $('.category__products-filter-grid').on('click', function () {
    $('.products__main.page-line').removeClass('list');
    $('.products__main').removeClass('page-off');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active');
  });

  $('.single-multiuser').on('click', function () {
    $('.single-singleuser').removeClass('checked', 'focused');
    $('.single-multiuser').addClass('checked', 'focused');

  });
  $('.single-singleuser').on('click', function () {
    $('.single-multiuser').removeClass('checked', 'focused');
    $('.single-singleuser').addClass('checked', 'focused');

  });

  var $range = $(".js-range-slider");
  var $inputFrom = $(".range-slider-from");
  var $inputTo = $(".range-slider-to");
  var instance;
  var min = 0;
  var max = 1000;
  var from = 0;
  var to = 0;

  $range.ionRangeSlider({
    // skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 200,
    to: 800,
    prefix: "$",
    postfix: "$",
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });

    $(this).prop("value", val);

  });

  $inputTo.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });

    $(this).prop("value", val);
  });


  var mixer = mixitup('.products__main__inner');
});