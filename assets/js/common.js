
//スムーススクロール
 jQuery(function($){
   $('a[href^="#"]').click(function(){
     var adjust = 0;
     var speed = 500;
     var href= $(this).attr("href");
     var target = $(href == "#" || href == "" ? 'html' : href);
     var position = target.offset().top + adjust;
     $('body,html').animate({scrollTop:position}, speed, 'swing');
     return false;
   });
 });


// スクロールして表示領域に入ったらclass付与
$(function () {
  $(".js-fade").on("inview", function () {
    $(this).addClass("is-show");
  });
});

//splide
new Splide(".splide", {
  perPage: 1,
  perMove: 1,
  type: "loop",
  autoplay: true,
  interval: 4000,
  speed: 1500,
  arrows: false,
}).mount();

new Splide(".splide-voice", {
  perPage: 1,
  perMove: 1,
  type: "loop",
  autoplay: true,
  interval: 4000,
  speed: 1500,
  arrows: false,
}).mount();


 //アコーディオン
 jQuery(function($){
    $('.acMenu').on("click", function() {
    $(this).toggleClass("open");
    $(this).next().slideToggle();
    });
    $('.close').click(function() {
      $(this).parent().prev().toggleClass('open');
      $(this).parent().slideToggle();
    });
  });