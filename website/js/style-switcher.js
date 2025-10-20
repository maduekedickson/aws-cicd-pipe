/* ==== Toggle Style Switcher  ====  */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
// hide - switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});
/* ================== theme colors =====================*/
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });

  // Update the color class of social media and icon bar icons
  updateSocialMediaColorClass(color);
}
/* ================== theme light and dark mode =====================*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
// Function to update the class of social media and icon bar icons based on the active color
function updateSocialMediaColorClass(color) {
  const colorClass = "color-" + color.split("-")[1];

  // Update social media icons
  const socialMediaIcons = document.querySelectorAll(".social-media i");
  socialMediaIcons.forEach((icon) => {
    icon.classList.remove(
      "color-1",
      "color-2",
      "color-3",
      "color-4",
      "color-5"
    );
    icon.classList.add(colorClass);
  });

  // Update icon bar icons
  const iconBarIcons = document.querySelectorAll(".icon-bar i");
  iconBarIcons.forEach((icon) => {
    icon.classList.remove(
      "color-1",
      "color-2",
      "color-3",
      "color-4",
      "color-5"
    );
    icon.classList.add(colorClass);
  });
}
