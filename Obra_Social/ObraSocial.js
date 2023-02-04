/*Codigos para el Navbar--------------------------------------------------------------------------------------*/
let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchBox');
let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');


searchBtn.onclick = function(){
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
    menuToggle.classList.add('hide');
    header.classList.remove('open');
}

closeBtn.onclick = function(){
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
    menuToggle.classList.remove('hide');
}   
 
menuToggle.onclick = function(){
    header.classList.toggle('open');
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
}

/*Codigos para slider-------------------------------------------------------------------------------------------*/
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevtBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0; 

//image slider next button
nextBtn.addEventListener("click", () =>{
slides.forEach((slide) => {
    slide.classList.remove("active2");
});
slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active2");
});

slideNumber++;

if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
}

slides[slideNumber].classList.add("active2");
slideIcons[slideNumber].classList.add("active2");

});

//Image slider previous button
prevtBtn.addEventListener("click", () => {

    slides.forEach((slide) => {
        slide.classList.remove("active2");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active2");
    });
    
    slideNumber--;
    
    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
    }
    
    slides[slideNumber].classList.add("active2");
    slideIcons[slideNumber].classList.add("active2");
});

//Image slider autoplay
var playSlider;

var repeater = () => {
    playSlider = setInterval(function(){
        slides.forEach((slide) => {
            slide.classList.remove("active2");
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active2");
        });
        
        slideNumber++;
        
        if(slideNumber > (numberOfSlides - 1)){
            slideNumber = 0;
        }
        
        slides[slideNumber].classList.add("active2");
        slideIcons[slideNumber].classList.add("active2");
    }, 4000);
}
repeater();

//Stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
})

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
    repeater();
})
