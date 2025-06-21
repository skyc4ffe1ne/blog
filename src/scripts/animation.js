import { gsap } from "gsap";

const cont_logo = document.querySelector(".cont_logo");
const tl = gsap.timeline({ paused: true });

const hero_section = document.getElementById("hero_section");
const box_orange = document.getElementById("box-orange");

tl.to(".asterisk", {
  rotate: 360,
  duration: 1,
  ease: "bounce.out",
});
cont_logo.addEventListener("mouseenter", function() {
  tl.restart();
});

function calculate_line() {
  const height_line = hero_section.clientHeight - box_orange.clientHeight * 2;
  const width_line = hero_section.clientWidth - box_orange.clientWidth * 2;

  gsap.to("#line", {
    duration: 2,
    height: height_line + "px",
  });

  gsap.to("#line_h", {
    duration: 2,
    width: width_line + "px",
  });
}

calculate_line();
