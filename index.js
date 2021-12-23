const next = document.querySelector(".page_change1");
const back = document.querySelector(".page_change2");
const features = document.querySelector("#feature");
const dots = document.querySelector(".dots");
const testimonials = document.querySelector("#testimonials");
const slidef = document.querySelector(".slidef");
const slideb = document.querySelector(".slideb");
const dots2 = document.querySelector(".dots2");

next.addEventListener("click", function () {
  features.classList.add("translate_forward");
  dots.classList.add("rotate");
});

back.addEventListener("click", function () {
  features.classList.remove("translate_forward");
  dots.classList.remove("rotate");
});

slidef.addEventListener("click", function () {
  testimonials.classList.add("translate_testimonials");
  dots2.classList.add("rotate");
});

slideb.addEventListener("click", function () {
  testimonials.classList.remove("translate_testimonials");
  dots2.classList.remove("rotate");
});

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  features.classList.remove("translate_forward");
} else {
  console.info("Not reloaded");
}
