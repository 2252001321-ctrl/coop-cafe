let images = [
  "https://i.ibb.co/hFTP7zDr/Whats-App-Image-2026-06-26-at-3-53-29-PM.jpg",
  "https://i.ibb.co/ch4ZncjG/Whats-App-Image-2026-06-26-at-3-46-50-PM.jpg",
    "images/gallery3.jpg",
];

let index = 0;

function slideShow(){

    document.getElementById("slide").src = images[index];

    index++;

    if(index == images.length){
        index = 0;
    }
}

setInterval(slideShow, 3000);
let slideIndex = 0;
let slides = document.getElementsByClassName("slides");

showSlides();

// Auto Slide
function showSlides() {

    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }

    slideIndex++;

    if(slideIndex>slides.length){
        slideIndex=1;
    }

    slides[slideIndex-1].style.display="block";

    setTimeout(showSlides,3000);
}

// Previous / Next
function changeSlide(n){

    slideIndex += n;

    if(slideIndex>slides.length){
        slideIndex=1;
    }

    if(slideIndex<1){
        slideIndex=slides.length;
    }

    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }

    slides[slideIndex-1].style.display="block";
}