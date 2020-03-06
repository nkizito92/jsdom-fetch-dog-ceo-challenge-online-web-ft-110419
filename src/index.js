console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function fetchImage() {
  return fetch(imgUrl)
  .then(res => res.json())
  .then( json => renderImages(json));
  // .then( json => console.log(json));
 }

function renderImages(json) {
  const images = document.querySelector("#dog-image-container");
  json.message.forEach(dogs => {
  const img = document.createElement("img")
    img.src =dogs;
    images.appendChild(img);
  }); 
}

document.addEventListener('DOMContentLoaded', function() {
  fetchImage()
})
