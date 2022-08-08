import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__item" href=${original}>
        <img class="gallery__image"
            src=${preview}
            alt=${description}
            title="${description}"
        />
    </a>`)
    .join('');    

galleryRef.insertAdjacentHTML('afterbegin', galleryMarkup);


galleryRef.addEventListener('click', onGalleryImageClick);


function onGalleryImageClick(evt) {

    evt.preventDefault();
   
    const galleryImage = evt.target.classList.contains("gallery__image");

        
    if (!galleryImage) {
        return
    }    

    let lightbox = new SimpleLightbox('.gallery a',
        {
            captionDelay: 250,        
        });    
}