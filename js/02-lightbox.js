import { galleryItems } from './gallery-items.js';
// Change code below this line

const gelleryBox = document.querySelector(".gallery");
const galleryMarkup = createMarkupGallery(galleryItems);


gelleryBox.insertAdjacentHTML("beforeend",galleryMarkup);


const lightbox = new SimpleLightbox(".gallery a",{captionDelay:250});




function createMarkupGallery(array) {
  return array
  .map (({preview,original,description}) =>{
     const markupItemsGallery = `<a class = "gallery__item" href="${original}">
     <img class = "gallery__image" src = "${preview}" alt ="${description}" title ="${description}" />
     <a/>`;
     return markupItemsGallery;
  })
  .join("");
}



















// const imagesContainer = document.querySelector(".gallery");
// const imagesMarkup = createPictureGallary(galleryItems);
// imagesContainer.insertAdjacentHTML("beforeend", imagesMarkup);
// function createPictureGallary(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `<div class = "gallery__item">
//         <a class ="gallery__link" href = "${original}">
//         <img
//         class ="gallery__image"
//         src ="${preview}"
//         data-source ="${original}"
//         alt ="${description}"
//         />
//         </a>
//         </div>`;
//     })
//     .join("");
// }
// var lightbox = $('.gallery a').simpleLightbox({captionsData: 'alt',captionDelay:250,});
// conslole.log(simpleLightbox)
// imagesContainer.addEventListener("click", (eve) => {
//   eve.preventDefault();
//   if (eve.target.nodeName !== "IMG") {
//     return;
//   }
//   const urlLargeImage = eve.target.getAttribute("data-source");
//   const instance = basicLightbox.create(`
// <img src = "${urlLargeImage}" width = "800" height = "600">`);
//   instance.show();
// });
// console.log(galleryItems);
