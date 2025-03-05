// Mobile menu toggle
const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
openMenuBtn.addEventListener("click", function () {
  mobileMenu.classList.add("active");
});
closeMenuBtn.addEventListener("click", function () {
  mobileMenu.classList.remove("active");
});
function closeMenu() {
  mobileMenu.classList.remove("active");
}
// Original Gallery slider functionality
let currentIndex = 0;
const galleryContainer = document.querySelector(".gallery-container");
const galleryItems = document.querySelectorAll(".gallery-item");
const totalItems = galleryItems.length;
document
  .querySelector(".gallery-nav.next")
  .addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % totalItems;
    updateGallery();
  });
document
  .querySelector(".gallery-nav.prev")
  .addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateGallery();
  });
function updateGallery() {
  const width = galleryItems[0].clientWidth;
  galleryContainer.style.transform =
    "translateX(" + -currentIndex * width + "px)";
}
window.addEventListener("resize", updateGallery);
// Vertical Gallery slider functionality (300x700px)
let currentIndex2 = 0;
const gallery2Container = document.querySelector(".gallery2-container");
const gallery2Items = document.querySelectorAll(".gallery2-item");
const totalItems2 = gallery2Items.length;
document
  .querySelector(".gallery2-nav.next")
  .addEventListener("click", function () {
    currentIndex2 = (currentIndex2 + 1) % totalItems2;
    updateGallery2();
  });
document
  .querySelector(".gallery2-nav.prev")
  .addEventListener("click", function () {
    currentIndex2 = (currentIndex2 - 1 + totalItems2) % totalItems2;
    updateGallery2();
  });
function updateGallery2() {
  const width2 = gallery2Items[0].clientWidth;
  gallery2Container.style.transform =
    "translateX(" + -currentIndex2 * width2 + "px)";
}
window.addEventListener("resize", updateGallery2);
