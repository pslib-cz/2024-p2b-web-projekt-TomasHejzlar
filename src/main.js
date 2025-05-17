import './style.css';
import './normalize.css';

import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
  // LightGallery
  const galleryContainer = document.querySelector('.gallery');
  if (galleryContainer) {
    lightGallery(galleryContainer, {
      selector: 'a', // všechny <a> tagy uvnitř .gallery
    });
  }

  // Swiper
  const swiper = new Swiper('.mySwiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Dropdown tlačítko
  const toggleBtn = document.getElementById('toggleImages');
  const hiddenImages = document.querySelector('.hidden-images');

  if (toggleBtn && hiddenImages) {
    toggleBtn.addEventListener('click', () => {
      hiddenImages.classList.toggle('visible');
      toggleBtn.textContent = hiddenImages.classList.contains('visible') ? 'Skrýt' : 'Zobrazit více';
    });
  }

  // Hamburger menu
  const hamburger = document.getElementById("hamburger");
  const navbarMenu = document.getElementById("navbarMenu");
  const overlay = document.getElementById("overlay");

  if (hamburger && navbarMenu && overlay) {
    hamburger.addEventListener("click", () => {
      navbarMenu.classList.toggle("open");
      overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
      navbarMenu.classList.remove("open");
      overlay.classList.remove("active");
    });

    document.querySelectorAll(".navbar-right a").forEach(link => {
      link.addEventListener("click", () => {
        navbarMenu.classList.remove("open");
        overlay.classList.remove("active");
      });
    });
  }
});
