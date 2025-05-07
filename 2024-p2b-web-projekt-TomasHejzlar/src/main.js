import './style.css'
import './normalize.css'
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';


document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  if (gallery) {
    lightGallery(gallery, {
      selector: 'a',
    });
  }
});
