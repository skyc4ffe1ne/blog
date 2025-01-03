document.querySelectorAll(".hamburger").forEach((el) => {
  el.addEventListener("click", function () {
    document.documentElement.classList.toggle("expanded");
  });
});
