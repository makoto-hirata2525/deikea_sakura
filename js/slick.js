$(function () {
 var headerHight = 80; //ヘッダの高さ
 $('a[href^=#link]').click(function(){
     var href= $(this).attr("href");
       var target = $(href == "#link" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight;
     $("html, body").animate({scrollTop:position}, 550, "swing");
        return false;
   });
});


$('.slider').slick({
infinite: true,
          
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [{
               breakpoint: 768,
                    settings: {
                         slidesToShow: 3,
                         slidesToScroll: 1,
               }
          },{
               breakpoint: 480,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1,
                    }
               }
          ]
     });
$('.slider-modal').slick({
      
          slidesToShow: 1,
          slidesToScroll: 1,
          
          responsive: [{
               breakpoint: 768,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
               }
          },{
               breakpoint: 480,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                    }
               }
          ]
     });





  // JavaScript Document