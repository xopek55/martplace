$(function(){
        var mixer = mixitup('.products__main__inner');

                $('.slider__inner-weekly-main').slick({
        
                
                        prevArrow: '<button class="slick-arrow slick-prev"><img src="/images/icons/slider-left.png" alt=""></button>',
                        nextArrow: '<button class="slick-arrow slick-next"><img src="/images/icons/slider-right.png" alt=""></button>',
                
                        

                });

        $('.slider__inner-followers-main').slick({
                prevArrow: '<button class="slick-arrow slick-prev"><img src="/images/icons/slider-left.png" alt=""></button>',
                nextArrow: '<button class="slick-arrow slick-next"><img src="/images/icons/slider-right.png" alt=""></button>',
                infinite: true,
                slidesToShow:3,
                slidesToScroll: 3,
                // variableWidth: true
        });

     
        $('input, select').styler();

        $(".slider__weekly-main-cost-star").rateYo({
                starWidth: "15px",
                rating: 4.5,
                readOnly: true
        });

});

