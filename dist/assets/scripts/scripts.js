//slider show///////////////////////////////////////////////////////

let sliderIndex = 1;

function setSlide(input, index) {
  sliderIndex = index;
  let item = document.querySelector(`#${input}`);

  let slides = [...document.querySelector(".slides").children];
  slides.forEach((element) => {
    element.className = "slide";
  });
  item.className = "activee";
}

setInterval(() => {
  sliderIndex += 1;
  if (sliderIndex === 4) {
    sliderIndex = 1;
  }

  setSlide(`slide-${sliderIndex}`, sliderIndex);
}, 5000);

///swiper js/////////////////////////////////////////////////////////////////////
let timing = 86400;
// let h = document.querySelector(".hour").innerHTML = 20;

function setTime() {
  if (timing == 0) return;
  let h = Math.floor(timing / 3600);
  let m = Math.floor((timing % 3600) / 60);
  let s = (timing % 3600) % 60;
  document.querySelector(".hour").innerHTML = h;
  document.querySelector(".minutes").innerHTML = m;
  document.querySelector(".seconds").innerHTML = s;
}

setInterval(() => {
  timing -= 1;
  setTime();
}, 1000);
