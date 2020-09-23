import galleryItems from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a
    class="gallery__link"
   
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>
    `;
    })
    .join('');
}
/////////////////////  href=${original}
function onGalleryContainerClick(e) {
  const isPictureSelection = e.target.classList.contains('.gallery__item');

  if (!isPictureSelection) {
    return;
  }

  const swatchEl = e.target;
  const parentImageCard = swatchEl.closest('.gallery__item');
  console.log(parentImageCard);

  // removeActiveModalClass();

  // addActiveModalClass();

  // openImage(swatchEl.dataset.data.source, swatchEl.dataset.alt);
}

// function removeActiveModalClass() {
//   const currentActiveCard = document.querySelector('.js-lightbox .is-open');

//   if (currentActiveCard) {
//     currentActiveCard.classList.remove('is-open');
//   }
// }

// function addActiveModalClass() {
//   const modalWindow = querySelector('.js-lightbox');
//   modalWindow.classList.add('is-open');
// }

// function openImage() {
//   const bigPicture = document.querySelector('.lightbox__image');
//   bigPicture.src = swatchEl.dataset.data.source;
//   bigPicture.alt = swatchEl.dataset.alt;
// }
