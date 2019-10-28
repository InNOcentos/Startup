// Mobile menu
$(function headerMenu() {

   $('.mobile-menu').on('click',function(event) {
      event.preventDefault();
      $('.menu-btn').toggleClass('menu-active');
      $('.site-navigation-list').toggleClass('menu-active');
   })
})

// Get Started modal
var modal = $('#myModal');
var btn = $('#myBtn');
var span = $('.close');
var contact = $('#myContact');

btn.on('click',function() {
   modal.fadeIn(650);
})
span.on('click',function() {
   modal.fadeOut(400);
})
contact.on('click',function() {
   modal.fadeOut(400);
})

$(document).on('mouseup',function(event) {
   var popup = $('.modal-content');
   if (event.target!= popup[0] && popup.has(event.target).length === 0) {
      modal.fadeOut();
   }
})

// Slider OwlCarousel
$(document).ready(function () {
   var team_slider = $('.team-slider');
   team_slider.owlCarousel({
      items: 4,
      // smartSpeed: 1000,
      dots: false,
      slideBy: 4,
      // slidesshow: 4,
      responsiveClass: true,
      // itemsDesktop: true,
      margin: 32.60,
      // autoplay: true,
      // autoplayTimeout: 3000,
      responsive: {
         0: {
            items: 1,
            slidesshow: 1,
            center: true
            
         },
         576: {
            items: 2,
            slidesshow: 2,
            slideBy: 2
         },
         768: {
            items: 3,
            slideBy: 3,
            slidesshow: 3,
         },
         992: {
            items: 3,
            slideBy: 3,
            slidesshow: 3,
         },
         1200: {
            items: 4,
            slideBy: 4,
            margin: 32.60,
         }
      }
   });

   $('.slider-button--left').click(function () {
      team_slider.trigger('prev.owl.carousel');
   });

   $('.slider-button--right').click(function () {
      team_slider.trigger('next.owl.carousel');
   });
});



// $(function headerMenu() {

//    $('.mobile-menu').on('click', function () {
//       $('.site-navigation-list').fadeToggle(0, function () {
//          $('#icon-item').css({transform: 'rotate(90deg)'});
                
//       });
//       if ($('.site-navigation-list').css('display') !== 'none') {
//          $('#icon-item').css({transform: 'rotate(-90deg)'});
//       }
//    })
// })

