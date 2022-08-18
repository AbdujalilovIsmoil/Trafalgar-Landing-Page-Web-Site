window.addEventListener("DOMContentLoaded", () => {
  // Loader
  let loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2000);

  // Scroll
  window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  // Slider
  let faLeft = document.querySelector(".fa-arrow-left");
  let faRight = document.querySelector(".fa-arrow-right");
  let carouselCards = document.querySelectorAll(".section__carousel");
  let index = 0;

  function hideRight() {
    if (index == carouselCards.length - 1) {
      ColorsHidden();
    }
  }

  function showLeft() {
    if (index == 0) {
      ColorsShow();
    }
  }

  function ColorsHidden() {
    faRight.classList.add("active");
    faLeft.classList.add("active");
  }
  function ColorsShow() {
    faLeft.classList.remove("active");
    faRight.classList.remove("active");
  }

  function Slider() {
    if (index > carouselCards.length - 1) {
      index = carouselCards.length - 1;
      ColorsHidden();
    } else if (index < 0) {
      index = 0;
      ColorsShow();
    }

    carouselCards.forEach((item) => {
      item.style.transform = `translateX(${-index * 100}%)`;
    });
  }

  faRight.addEventListener("click", () => {
    index++;
    Slider();
    hideDot();
    showDot(index);
    hideRight();
  });
  faLeft.addEventListener("click", () => {
    index--;
    Slider();
    hideDot();
    showDot(index);
    showLeft();
  });

  // Dots Carousel
  let dot = document.querySelector(".section__carousel_dots_container");
  let dots = dot.querySelectorAll(".section__carousel_box_dot_box");

  function hideDot() {
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
  }
  function showDot(i = 0) {
    console.log(i);
    dots[i].classList.add("active");
  }
  hideDot();
  showDot();

  dot.addEventListener("click", (e) => {
    if (
      e.target &&
      e.target.classList.contains("section__carousel_box_dot_box")
    ) {
      dots.forEach((dot, index) => {
        if (dot == e.target) {
          hideDot();
          showDot(index);
        }
      });
    }
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      carouselCards.forEach((item) => {
        item.style.transform = `translateX(${-index * 100}%)`;
      });
    });
  });

  // AOS Library
  AOS.init();

  // Menu
  let faBars = document.querySelector(".fa-bars");
  let faTimes = document.querySelector(".fa-times");
  let secretNavbar = document.querySelector(".secret");
  let secretLinks = document.querySelectorAll(".secret__link");

  function openShowNavbar() {
    secretNavbar.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  }

  function CloseHideNavbar() {
    secretNavbar.classList.remove("active");
    document.querySelector("body").style.overflow = "";
  }

  faBars.addEventListener("click", () => {
    openShowNavbar();
  });

  faTimes.addEventListener("click", () => {
    CloseHideNavbar();
  });

  secretLinks.forEach((link) => {
    link.addEventListener("click", () => {
      CloseHideNavbar();
    });
  });

  this.addEventListener("keydown", (event) => {
    if (event.code == "Escape") {
      CloseHideNavbar();
    }
  });
});
