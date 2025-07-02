import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/all";

// Text that will be animated
const splitTitle = document.querySelectorAll(".splitTitle");

// Remove the warning "SplitText called before fonts loaded"
gsap.registerPlugin(ScrambleTextPlugin);
document.fonts.ready.then(() => {
  // Random chars used for the animation
  const defaultChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let scramble = (event) => {
    const target = event.target;
    if (!gsap.isTweening(target)) {
      // check if the animation is arleady running
      gsap.to(target, {
        duration: 0.8,
        ease: "sine.in",
        scrambleText: {
          text: target.innerText,
          chars: defaultChars,
          speed: 2,
        },
      });
    }
  };

  // Select only the text with the class splitTitle
  for (const titles of splitTitle) {
    titles.addEventListener("pointerenter", scramble);
    titles.addEventListener("focus", scramble);
  }
});

const cont_logo = document.querySelector(".cont_logo");
const hero_section = document.getElementById("hero_section");
const box_orange = document.getElementById("box-orange");

// Logo Animation
const tl = gsap.timeline({ paused: true });
tl.to(".asterisk", {
  rotate: 360,
  duration: 1,
  ease: "bounce.out",
});
cont_logo.addEventListener("mouseenter", function() {
  tl.restart();
});

// Hero animation
function calculate_line() {
  if (!hero_section?.clientWidth || !hero_section?.clientHeight) return;
  const height_line = hero_section.clientHeight - box_orange.clientHeight * 2;
  const width_line = hero_section.clientWidth - box_orange.clientWidth * 2;

  gsap.to("#line", {
    duration: 1,
    height: height_line + "px",
  });

  gsap.to("#line_h", {
    duration: 1,
    width: width_line + "px",
  });
}

calculate_line();
