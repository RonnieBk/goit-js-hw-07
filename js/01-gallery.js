import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
    data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");

galleryList.innerHTML = markup;

galleryList.addEventListener("click", openLargerPicture);

function openLargerPicture(event) {
  event.preventDefault();
  const largerPicture = event.target.dataset.source;

  const instance = basicLightbox.create(`
      <img src="${largerPicture}" width="800" height="600">
  `);
  instance.show();

  document.addEventListener("keydown", (e) => {
    if (instance.visible() && e.key === "Escape") {
      instance.close();
    }
  });
}
