/*Codigos para el cambio de biografias--------------------------------------------------------------------------------------*/
const imageB1 = document.getElementById('Mita');
const imageB2 = document.getElementById('Aaron');
const imageB3 = document.getElementById('Rosinin');

const textB1 = document.getElementById('tb1');
const textB2 = document.getElementById('tb2');
const textB3 = document.getElementById('tb3');


imageB1.addEventListener('click', ()=>{
    textB1.style.display = 'inline-block'
    textB2.style.display = 'none'
    textB3.style.display = 'none'
})

imageB2.addEventListener('click', ()=>{
    textB1.style.display = 'none'
    textB2.style.display = 'inline-block'
    textB3.style.display = 'none'
})

imageB3.addEventListener('click', ()=>{
    textB1.style.display = 'none'
    textB2.style.display = 'none'
    textB3.style.display = 'inline-block'
})


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



