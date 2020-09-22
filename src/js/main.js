import galleryItems from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

// console.log(cardsMarkup);
function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
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

function onGalleryContainerClick(e) {
  const isPictureSelection = e.target.classList.contains('gallery__item');

  if (!isPictureSelection) {
    return;
  }
  // console.log(isPictureSelection);

  //   const swatchEl = evt.target;
  //   const parentColorCard = swatchEl.closest('.color-card');

  //   removeActiveCardClass();
  //   addActiveCardClass(parentColorCard);
  //   setBodyBgColor(swatchEl.dataset.hex);
}

// function setBodyBgColor(color) {
//   document.body.style.backgroundColor = color;
// }

// function removeActiveCardClass() {
//   const currentActiveCard = document.querySelector('.color-card.is-active');

//   if (currentActiveCard) {
//     currentActiveCard.classList.remove('is-active');
//   }
// }

// function addActiveCardClass(card) {
//   card.classList.add('is-active');
// }
