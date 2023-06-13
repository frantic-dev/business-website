let slide = document.querySelector("#slide-wrapper");
let rightArrow = document.querySelector("#right-arrow");
let leftArrow = document.querySelector("#left-arrow");
let firstSlide = document.querySelector("#first-slide");
let scndSlide = document.querySelector("#scnd-slide");
let frstSlide = true;
function nextSlide() {
  if (frstSlide) {
    slide.className = "next-transition";
    frstSlide = false;
  }
}
function prvSlide() {
  if (!frstSlide) {
    slide.className = "prv-transition";
    frstSlide = true
  }
}
rightArrow.addEventListener("click", nextSlide)
leftArrow.addEventListener("click", prvSlide)