/*  */
window.addEventListener('scroll', reveal);
    function reveal(){

    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++){
        
        var windowheight = window.innerHeight; 

        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if(revealtop < windowheight - revealpoint) { 
            reveals[i].classList.add('active');
    }
    else {
        reveals[i].classList.remove('active');
    }
    }
}
let count = 0;
let countEl = document.getElementsByClassName("count");
let countElTwo = document.getElementsByClassName("count-two");
let countElThree = document.getElementsByClassName("count-three");
let countElFour = document.getElementsByClassName("count-four");

function countTo100() {
    let count = 1;
    const intervalId = setInterval(function() {
      // If count reaches 100, stop the interval
      for(i = 0; i < countEl.length; i++){
        if (count === 254) {
            clearInterval(intervalId);
          }
          countEl[i].innerHTML = count + "K";
          count++;
      }
    }, 35);
 // Interval set to 1000 milliseconds (1 second)
}
function countTo196() {
    let count = 1;
    const intervalId = setInterval(function() {
      // If count reaches 100, stop the interval
      for(i = 0; i < countElTwo.length; i++){
        if (count === 196) {
            clearInterval(intervalId);
          }
          countElTwo[i].innerHTML = count;
          count++;
      }
    }, 25);
 // Interval set to 1000 milliseconds (1 second)
}
function countTo68() {
    let count = 1;
    const intervalId = setInterval(function() {

      for(i = 0; i < countElThree.length; i++){
        if (count === 68) {
            clearInterval(intervalId);
          }
          countElThree[i].innerHTML = count;
          count++;
      }
    }, 40);
 // Interval set to 1000 milliseconds (1 second)
}
function countTo42() {
    let count = 1;
    const intervalId = setInterval(function() {
      // If count reaches 100, stop the interval
      for(i = 0; i < countElFour.length; i++){
        if (count === 42) {
            clearInterval(intervalId);
          }
          countElFour[i].innerHTML = count;
          count++;
      }
    }, 50);
 // Interval set to 1000 milliseconds (1 second)
}
document.addEventListener('scroll', () => {
    countTo100();
    countTo196();
    countTo68();
    countTo42();
});

const testimonialSlider = document.querySelector('.testimonial-container');
let isDown = false;
let startX;
let scrollLeft;

testimonialSlider.addEventListener('mousedown', (e) => {
    isDown = true;
    testimonialSlider.classList.add('active');
    startX = e.pageX - testimonialSlider.offsetLeft;
    scrollLeft = testimonialSlider.scrollLeft;
});
testimonialSlider.addEventListener('mouseup', () => {
    isDown = false
    testimonialSlider.classList.remove('active');
});
testimonialSlider.addEventListener('mouseleave', () => {
 isDown = false;
 testimonialSlider.classList.remove('active');
});
testimonialSlider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - testimonialSlider.offsetLeft
    console.log({x, startX});
    const walk = x - startX;
    console.log(walk);
    testimonialSlider.scrollLeft = scrollLeft - walk;
});

var copy = document.querySelector('.logoSlide').cloneNode(true);
document.querySelector('.mySlide').appendChild(copy);


const testimonialContainer = document.querySelectorAll(".testimonial-container");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}
function addAnimation(){
    testimonialContainer.forEach((item) => {
        item.setAttribute("data-animated", true);
    });
}