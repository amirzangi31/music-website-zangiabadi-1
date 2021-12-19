//slider show

let sliderIndex = 1;

function setSlide(input, index) {
  sliderIndex = index;
  let item = document.querySelector(`#${input}`);
  console.log(item.className);
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
