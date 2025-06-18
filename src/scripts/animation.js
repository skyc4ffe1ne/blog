import { gsap } from "gsap";

const cont_logo = document.querySelector(".cont_logo");
const asterisk = document.querySelector(".asterisk");
const tl = gsap.timeline({ paused: true });

tl.to(asterisk, {
  rotate: 360,
  duration: 1,
  ease: "bounce.out",
});
cont_logo.addEventListener("mouseenter", function() {
  tl.restart();
});
