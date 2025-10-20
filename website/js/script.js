/*================typing animation ====================*/
var typed = new Typed(".typing", {
  strings: [
    "",
    "Data Scientist",
    "Data Analyst",
    "Machine Learning Specilist",
    "Cloud Engineer",
    "Web Developer",
  ],
  typeSpeed: 100,
  BackSpeed: 600,
  loop: true,
});

/*================ Aside ====================*/
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        // allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  //console.log(sectionIndex);
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

/*================ Image Slider ====================*/

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  dots.forEach((dot) => {
    dot.classList.remove("active-dot");
  });
  slides[n].classList.add("active");
  dots[n].classList.add("active-dot");
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function initSlider() {
  setInterval(nextSlide, 5000); // Change slide every 5 seconds

  // Add event listeners to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      slideIndex = index;
      showSlide(slideIndex);
    });
  });
}

initSlider();

// For the PopUp
// Function to display the popup after 5 seconds
function displayPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

// Set timeout to display the popup after 5 seconds
setTimeout(displayPopup, 5000);
// Function to close the popup
function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

// For image modal viewer
function showModal(imageSrc) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Filtering Portfolio Items
const filterButtons = document.querySelectorAll(".filter");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to the clicked button
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");
    portfolioItems.forEach((item) => {
      if (
        filterValue === "all" ||
        item.getAttribute("data-category") === filterValue
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  // Simulate a delay to show the loader (e.g., 2 seconds)
  setTimeout(function () {
    // Hide the loader
    document.getElementById("loader").style.display = "none";

    // Show the content
    document.getElementById("content").style.display = "block";

    // Restore scroll
    document.body.style.overflow = "auto";
  }, 2000); // 2-second delay for demonstration; adjust as needed
});
