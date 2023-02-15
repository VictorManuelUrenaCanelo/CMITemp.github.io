var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.navigation-btn');
let currentSlide = 1; 

//Javascript for image slider manual navigation 
var manualNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", ()=>{
        manualNav(i);
        currentSlide = i; 
    });
}); 

//Javascript for image slider autoplay navigation
var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1; 

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) =>{
                activeSlide.classList.remove('active');
            });


            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length == i){
                i = 0; 
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 10000);
    }

    repeater();
}

repeat();

//Agrupaciones musicales slider

const carousel = document.querySelector(".agru-carousel");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".agru-wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;



const showHideIcons = () =>{
    // showing and hidding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block"; 
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block"; 
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () =>{
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it 
        carousel.scrollLeft += icon.id == "icon-left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () =>{
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive; 
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft){ // if user is scrolling to the right
       return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : positionDiff 
}

const dragStart = (e) =>{
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) =>{
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart)return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons()
}

const dragStop = () =>{
    isDragStart = false;
    carousel.classList.remove("dragging");
    
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);