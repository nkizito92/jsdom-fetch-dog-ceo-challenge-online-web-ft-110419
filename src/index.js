console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
function fetchImage() {
  return fetch(imgUrl)
  .then(res => res.json())
  .then( json => renderImages(json));
  // .then( json => console.log(json));
}
 let pick = document.querySelector("#breed-dropdown, option");
function renderImages(json) {
  const images = document.querySelector("#dog-image-container");
  json.message.forEach(dogs => {
  const img = document.createElement("img")
    img.src =dogs;
    images.appendChild(img);
  }); 
}

 function fetchBreed() {
   return fetch(breedUrl)
   .then(res => res.json())
  .then(json => renderBreeds(json));
 }

function renderBreeds(json) {
  const breeds = document.querySelector("#dog-breeds");
   for(let char in json.message ){
         if(json.message[char] != ""){
        
              breeds.innerHTML +=`<li id="dog">There are ${char}: ${json.message[char].join(", ")}</li> <br>`;
        const clickDog = document.querySelector("#dog");
            clickDog.addEventListener("click", colorChange);
         } else {
            breeds.innerHTML +=`<li>There is no breed for ${char} Dogs </li>`;
          }
         } 
      
}

function colorChange () {
  this.style.color = "green"
}

document.addEventListener('DOMContentLoaded', function() {

  fetchImage();
  fetchBreed();
})
