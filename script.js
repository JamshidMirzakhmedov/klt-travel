const navbar = document.querySelector("header");
const navLists = document.querySelectorAll("header li a");
const cards = document.querySelector(".travel-package-cards");
window.onscroll = () => {
  if (window.scrollY > 10) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};

// language select

const languageSelects = document.getElementsByClassName("language-select");

// Set the default language based on the user's browser language

// Listen for changes to the language selector

for (let i = 0; i < languageSelects.length; i++) {
  languageSelects[i].addEventListener("change", (event) => {
    const newUrl = event.target.value;
    window.location.href = newUrl;
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith("ru")) {
      languageSelects[i].value = "index-ru.html";
    }
  });
}

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
const pageLang = document.documentElement.lang;

if (pageLang.startsWith("ru")) {
  showDestinationCard(destinationsRu);
} else {
  showDestinationCard(destinations);
}

function showDestinationCard(data) {
  for (let i = 0; i < data.length; i++) {
    const card = document.createElement("li");
    card.classList.add("travel-package-card");
    card.innerHTML = `<div class="card-img">
      <img src=${data[i].imgUrl} alt=${data[i].alt} />
    </div>
    
    <h4 class="location-name">
      <i class="fa-solid fa-location-dot"></i> ${data[i].name}
    </h4>`;
    cards.append(card);
  }
}

const travelPackageCards = document.querySelectorAll(".travel-package-card");
const travelModel = document.querySelector(".travel-package-model");
const travelModelOverlay = document.querySelector(".package-model-overlay ");
const closeTravelModelBtn = document.querySelector(".close-travel");
const travelModelContent = document.querySelector(".travel-package-content");

travelPackageCards.forEach(showPackageModel);

function showPackageModel(btn, i) {
  btn.addEventListener("click", () => {
    travelModel.classList.remove("hidden");
    travelModelOverlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    travelModelContent.innerHTML = ` ${
      pageLang.startsWith("ru") ? tourInfosRu[i] : tourInfos[i]
    }`;
  });
}
closeTravelModelBtn.addEventListener("click", closeTravelModel);
travelModelOverlay.addEventListener("click", closeTravelModel);
function closeTravelModel() {
  travelModel.classList.add("hidden");
  travelModelOverlay.classList.add("hidden");
  document.body.style.overflow = "auto";
}

const counters = document.querySelectorAll(".nbr");

counters.forEach((counter) => {
  const target = +counter.getAttribute("data-count");
  const duration = 2000; // animation duration in ms
  const increment = (target / duration) * 10; // increment value per frame (10ms)
  let current = 0;

  const updateCounter = () => {
    current += increment;
    counter.textContent = Math.floor(current);

    if (current < target) {
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target;
    }
  };

  updateCounter();
});

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
const Opal = { lat: 41.27105752077002, lng: 69.26131189772607 };
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: Tashkent,
    zoom: 15,
  });
  const marker = new google.maps.Marker({
    position: Opal,
    label: "Opal Travel Agency",
    // icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png",
    map: map,
  });
}

window.initMap = initMap;

const hamburger = document.querySelector(".menu-bar");
const menu = document.querySelector(".menu");
const closeBar = document.querySelector(".close-bar");
const menuItems = document.querySelectorAll(".menu .nav-links li");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

menuItems.forEach(closeMenuBar);

function closeMenuBar(btn) {
  btn.addEventListener("click", () => {
    menu.classList.remove("open");
  });
}
closeBar.addEventListener("click", () => {
  menu.classList.remove("open");
});
