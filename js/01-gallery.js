import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__link" href=${original}>
        <img class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
        />
    </a>`)
    .join('');    

galleryRef.insertAdjacentHTML('afterbegin', galleryMarkup);

const galleryItemRef = document.querySelectorAll('.gallery__link');

galleryItemRef.forEach(item => item.addEventListener('click', onGalleryItemClick)); 

function onGalleryItemClick(evt) {
    evt.preventDefault();   
}


galleryRef.addEventListener('click', onGalleryImageClick);

function onGalleryImageClick(evt) {
   
    const galleryImage = evt.target.classList.contains("gallery__image");
    
    if (!galleryImage) {
        return
    }

    const instance = basicLightbox.create(`
        <div class="modal">            
            <img class="gallery__image"
                src=${evt.target.dataset.source}                    
            />            
        </div>
    `, {
        onShow: (instance) => {
            document.addEventListener('keydown', onEscClick);            
        },
        onClose: (instance) => {
            document.removeEventListener('keydown', onEscClick)            
        }
    });

    function onEscClick(evt) {
            
        if (evt.code === 'Escape') {            
            instance.close();            
        }        
    }
    
    instance.show();    
}