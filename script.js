const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuToggler = document.querySelector(".mobile-menu-icon");
const toggleMenu = () => {
  if (mobileMenu.style.opacity === "1") {
    mobileMenu.style.opacity = "0";
  } else {
    mobileMenu.style.opacity = "1";
  }
};

mobileMenuToggler.addEventListener("mousedown", toggleMenu);
