const moon_ftr = document.querySelector(".moon_footer");
const sun_ftr = document.querySelector(".sun_footer");

const theme = (() => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
})();

if (theme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
  sun_ftr.setAttribute("data-current", "");
} else {
  document.documentElement.setAttribute("data-theme", "dark");
  moon_ftr.setAttribute("data-current", "");
}

window.localStorage.setItem("theme", theme);

const handleToggleClick = () => {
  const element = document.documentElement;
  element.setAttribute(
    "data-theme",
    element.getAttribute("data-theme") === "dark" ? "light" : "dark",
  );

  const isDark = element.getAttribute("data-theme");
  window.localStorage.setItem("theme", isDark === "dark" ? "dark" : "light");

  if (isDark !== "dark") {
    sun_ftr.setAttribute("data-current", "");
    moon_ftr.removeAttribute("data-current");
  } else {
    moon_ftr.setAttribute("data-current", "");
    sun_ftr.removeAttribute("data-current");
  }
};

document
  .getElementById("themeToggle")
  .addEventListener("click", handleToggleClick);

moon_ftr.addEventListener("click", function() {
  const element = document.documentElement;

  if (element.getAttribute("data-theme") === "dark") {
    return;
  } else {
    element.setAttribute("data-theme", "dark");
    window.localStorage.setItem("theme", "dark");
    moon_ftr.setAttribute("data-current", "");
    sun_ftr.removeAttribute("data-current");
  }
});

sun_ftr.addEventListener("click", function() {
  const element = document.documentElement;

  if (element.getAttribute("data-theme") === "light") {
    return;
  } else {
    element.setAttribute("data-theme", "light");
    window.localStorage.setItem("theme", "light");
    sun_ftr.setAttribute("data-current", "");
    moon_ftr.removeAttribute("data-current");
  }
});
