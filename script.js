let slide = document.querySelector('#slide-wrapper');
let rightArrow = document.querySelector('#right-arrow');
let leftArrow = document.querySelector('#left-arrow');
let firstSlide = document.querySelector('#first-slide');
let scndSlide = document.querySelector('#scnd-slide');
function nextSlide() {
  let frstSlide = true;
  if(frstSlide) {
    slide.className = "transition";
  }
}
rightArrow.addEventListener('click',nextSlide)