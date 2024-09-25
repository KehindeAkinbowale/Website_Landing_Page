const mybutton = document.querySelector('.service-slide-container');
mybutton.onmousemove = function (e) {
    const x = e.pageX - mybutton.offsetLeft;
    const y = e.pageY - mybutton.offsetTop;

    mybutton.style.setProperty('--x', x + 'px');
    mybutton.style.setProperty('--y', y + 'px');
}
/*document.addEventListener('DOMContentLoaded', function() {

    // Check if there are elements with the class "banner-active"
    if (document.querySelectorAll('.banner-active').length > 0) {
      let sliderActive1 = '.banner-active';
  
      // Initialize Swiper
      let sliderInit1 = new Swiper(sliderActive1, {
        slidesPerView: 1,
        slidesPerColumn: 1,
        paginationClickable: true,
        fadeEffect: {
          crossFade: true,
        },
        loop: true,
        effect: 'fade',
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: '.slider__button-prev',
          prevEl: '.slider__button-next',
        },
        pagination: {
          el: '.banner-dot',
          clickable: true,
        },
        a11y: false,
      });
  
      function animated_swiper(selector, init) {
        let animated = function() {
          document.querySelectorAll(selector + ' [data-animation]').forEach(function(el) {
            let anim = el.dataset.animation;
            let delay = el.dataset.delay;
            let duration = el.dataset.duration;
  
            el.classList.remove('anim' + anim);
            el.classList.add(anim, 'animated');
            el.style.animationDelay = delay;
            el.style.animationDuration = duration;
  
            el.addEventListener('animationend', function() {
              el.classList.remove(anim, 'animated');
            });
          });
        };
  
        animated();
  
        // Make animated when slide changes
        init.on('slideChange', function() {
          document.querySelectorAll(sliderActive1 + ' [data-animation]').forEach(function(el) {
            el.classList.remove('animated');
          });
        });
  
        init.on('slideChange', animated);
      }
  
      animated_swiper(sliderActive1, sliderInit1);
    }
  
  }); */ 


var swiper = new Swiper (".carousel-swiper", {
        slidesPerView: 1,
        slidesPerColumn: 1,
        paginationClickable: true,
        fadeEffect: {
            crossFade: true,
        },
        loop: true,
        loopPreventsSlide: true,
        effect: "fade",
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: ".slider__button-prev",
            prevEl: ".slider__button-next",
        },
        pagination: {
            el: ".banner-dot",
            clickable: true,
        },
        a11y: false,
});

    var swiper = new Swiper(".service-slide-container", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        speed: 1200,
        centerSlide: "true",
        grabCursor: "true",
        fade: "true",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            375:{
                slidesPerView: 1
            },
            992:{
                slidesPerView: 2
            },
            1248:{
                slidesPerView: 3
            }
        },
    });

    var swiper = new Swiper(".swiper-two-container", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        speed: 1200,
        centerSlide: "true",
        grabCursor: "true",
        fade: "true",
        longSwipes: true,
        longSwipesRatio: 4,
        /*autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }*/
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            "1400": {
                slidesPerView: 4,
            },
            "1200": {
                slidesPerView: 3,
            },
            "992": {
                slidesPerView: 2,
            },
            "768": {
                slidesPerView: 2,
            },
            "576": {
                slidesPerView: 1,
            },
            "0": {
                slidesPerView: 1,
            },
        },
    });
    
        //write js code under this line 
     

    
/*var project = new Swiper(".swiper-two-container", {
    spaceBetween: 30,
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    loopAdditionalSlides: 0,

    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        "1400": {
            slidesPerView: 4,
        },
        "1200": {
            slidesPerView: 3,
        },
        "992": {
            slidesPerView: 2,
        },
        "768": {
            slidesPerView: 2,
        },
        "576": {
            slidesPerView: 1,
        },
        "0": {
            slidesPerView: 1,
        },
    },
    speed: 1000,
});*

        //write code above the line */
        
        var slide_three = new Swiper(".swiper-three-container", {
            spaceBetween: 30,
            slidesPerView: 2,
            slidesPerGroup: 4,
            loop: true,
            loopAdditionalSlides: 0,
            /*autoplay: {
                delay: 3000,
            },*/
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                "1400": {
                    slidesPerView: 2,
                },
                "1200": {
                    slidesPerView: 2,
                },
                "992": {
                    slidesPerView: 2,
                },
                "768": {
                    slidesPerView: 1,
                },
                "576": {
                    slidesPerView: 1,
                },
                "0": {
                    slidesPerView: 1,
                },
            },
            speed: 1000,
        });

        var swiper = new Swiper(".brand-slide-container", {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            speed: 1200,
            centerSlide: "true",
            grabCursor: "true",
            fade: "true",
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets: true
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                375:{
                    slidesPerView: 2
                },
                768:{
                    slidesPerView: 3
                },
                992:{
                    slidesPerView: 4
                },
                1248:{
                    slidesPerView: 4
                }
            },
        });