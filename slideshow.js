// js/slideshow.js
const images = [
  "pingpongcomp.jpg",
  "CSforFinal.jpg",
  "gaming.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  index = (index + 1) % images.length;
  slide.src = images[index];
}, 3000);
