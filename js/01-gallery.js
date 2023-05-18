import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const pictureMarkup = createPictureCards(galleryItems);

gallery.insertAdjacentHTML("beforeend", pictureMarkup)
// console.log(createPictureCards(galleryItems));

gallery.addEventListener('click', onClickCard)

function createPictureCards(galleryItems) {
    const markup = galleryItems.map(({preview, original, description}) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join('')
    return markup;
}

function onClickCard(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `)
  instance.show(() => {
     window.addEventListener('keydown', onCloseEsc)
  
    function onCloseEsc(evt) {
      if (evt.code === 'Escape') {
        instance.close(() => {
         window.removeEventListener('keydown', onCloseEsc) 
        })
      }
      console.log(evt)
    }
  })

  
}

