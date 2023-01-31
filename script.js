const navbar = document.querySelector("header");
const navLists = document.querySelectorAll("header li a");
const cards = document.querySelector(".cards");
const photos = document.querySelector(".photos");

window.onscroll = () => {
  if (window.scrollY > 10) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

for (let i = 0; i < destinations.length; i++) {
  const card = document.createElement("li");
  card.classList.add("card");
  card.innerHTML = `<div class="card-img">
    <img src=${destinations[i].imgUrl} alt=${destinations[i].alt} />
  </div>
  <p class="price">$ ${destinations[i].price} </p>
  <h4 class="location-name">
    <i class="fa-solid fa-location-dot"></i> ${destinations[i].name}
  </h4>`;
  cards.append(card);
}

for (let i = 0; i < destinations.length; i++) {
  const photo = document.createElement("li");
  photo.classList.add("photo");
  photo.innerHTML = `
  <img
  src=${destinations[i].imgUrl}
  alt=${destinations[i].alt}
/>
<span><i class="fa-solid fa-plus"></i></span>
<h3 class="photo-name">${destinations[i].name}</h3>`;
  photos.append(photo);
}

// ------PHOTO MODAL

const openCardImageBtns = document.querySelectorAll(".photos li span");
const modal = document.querySelector("#tour-gallery .modal");
const modalPhoto = document.getElementById("modal-photo");
const closeModalBtn = document.querySelector(".close-modal");
openCardImageBtns.forEach(showPhotoModal);
function showPhotoModal(btn, i) {
  btn.addEventListener("click", function () {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    modalPhoto.src = destinations[i].imgUrl;
  });
}

closeModalBtn.addEventListener("click", closeModal);
function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

var speed = 1;

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function incEltNbr(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function () {
      //Delay a bit before calling the function again.
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}

/*Function called on button click*/
function incNbr() {
  incEltNbr("nbr");
}

incEltNbr(
  "nbr"
); /*Call this funtion with the ID-name for that element to increase the number within*/

let viewIndex = 0;
showviews();

function showviews() {
  let i;
  let views = document.getElementsByClassName("views");
  for (i = 0; i < views.length; i++) {
    views[i].classList.remove("active");
  }
  viewIndex++;
  if (viewIndex > views.length) {
    viewIndex = 1;
  }
  views[viewIndex - 1].classList.add("active");
  setTimeout(showviews, 3000); // Change image every 2 seconds
}

let map;
let Tashkent = { lat: 41.27755756336031, lng: 69.21373823982567 };
const KLT = { lat: 41.275455143232215, lng: 69.21487669539822 };
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: Tashkent,
    zoom: 15,
  });
  const marker = new google.maps.Marker({
    position: KLT,
    label: "KLT Travel Agency",
    // icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png",
    map: map,
  });
}

window.initMap = initMap;
