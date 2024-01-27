/* Sidebar  Script */

const toggleBtn = document.querySelector(".toggle-btn");
const sideBar = document.querySelector(".side-bar");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("clicked");
  sideBar.classList.toggle("active");
  body.classList.toggle("disable-scrolling");

  overlay.style.backgroundColor =
    overlay.style.backgroundColor === "rgba(0, 0, 0, 0.4)"
      ? "rgba(0, 0, 0, 0)"
      : "rgba(0, 0, 0, 0.4)";

  overlay.style.pointerEvents =
    overlay.style.pointerEvents === "auto" ? "none" : "auto";
  overlay.addEventListener("click", closeSidebar);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeSidebar();
  }
});

function closeSidebar() {
  toggleBtn.classList.remove("clicked");
  sideBar.classList.remove("active");
  body.classList.remove("disable-scrolling");
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  overlay.style.pointerEvents = "none";
}

/* Navigation selected a */

const arr = document.querySelectorAll("ul li a");

for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", function () {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j % 4] !== arr[i % 4]) {
        arr[j].classList.remove("current");
      }
    }
    arr[i % 4].classList.add("current");
    arr[(i % 4) + 4].classList.add("current");
  });
}

// Slider script

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const totalSlides = slides.length;
let currentSlide = 0;

let autoSlide = setInterval(nextSlide, 3000);

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.opacity = "0";
  });

  currentSlide = index;
  slides[currentSlide].style.opacity = "1";
  activeDot(currentSlide);
  resetTimeout();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

function resetTimeout() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 3000);
}

function activeDot(index) {
  dots.forEach((dot) => (dot.style.backgroundColor = "#ffffff7f"));
  dots[index].style.backgroundColor = "#fff";
}

// Accordion script

const faqs = document.querySelectorAll(".FAQ");

faqs.forEach((faq) => {
  faq.addEventListener("click", function () {
    faqs.forEach((otherFaq) => {
      if (otherFaq !== faq) {
        otherFaq.classList.remove("active");
      }
    });

    faq.classList.toggle("active");
  });
});
