import './style.css';
import './normalize.css';

import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  if (gallery) {
    lightGallery(gallery, {
      selector: 'a',
    });
  }

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
  
  document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    if (gallery) {
      lightGallery(gallery, {
        selector: 'a',
      });
    }
  
    const toggleBtn = document.getElementById('toggleImages');
    const hiddenImages = document.querySelector('.hidden-images');
  
    if (toggleBtn && hiddenImages) {
      toggleBtn.addEventListener('click', () => {
        hiddenImages.classList.toggle('visible');
        toggleBtn.textContent = hiddenImages.classList.contains('visible') ? 'Skrýt' : 'Zobrazit více';
      });
    }
  });
  
  
});
