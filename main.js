import "./style.css";

const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeBtn = document.querySelector("#close-btn");
const mobileNav = document.querySelector("#Mobile-nav");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
  mobileNav.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  closeBtn.classList.add("hidden");
  hamburgerBtn.classList.remove("hidden");
  mobileNav.classList.add("hidden");
});

// carousel-functionality
$(".carousel").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  responsive: [
    {
      breakpoint: 762,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        pauseOnFocus: false,
      },
    },
  ],
});
