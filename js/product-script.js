var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
var smallpic01=document.getElementsByClassName("demo")[0];
var smallpic02=document.getElementsByClassName("demo")[1];
var smallpic03=document.getElementsByClassName("demo")[2];
var smallpic04=document.getElementsByClassName("demo")[3];

smallpic01.onclick = function(){
    currentSlide(1);
}
smallpic02.onclick = function(){
    currentSlide(2);
}
smallpic03.onclick = function(){
    currentSlide(3);
}
smallpic04.onclick = function(){
    currentSlide(4);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Get the Image modal
var modal01 = document.getElementById("myModal01");
var modalImg = document.getElementById("img01");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img01 = document.getElementsByClassName("myImg01")[0];
var img02 = document.getElementsByClassName("myImg01")[1];
var img03 = document.getElementsByClassName("myImg01")[2];
var img04 = document.getElementsByClassName("myImg01")[3];

var expandbutton01=document.getElementsByClassName("expand-button")[0];
var expandbutton02=document.getElementsByClassName("expand-button")[1];
var expandbutton03=document.getElementsByClassName("expand-button")[2];
var expandbutton04=document.getElementsByClassName("expand-button")[3];

expandbutton01.onclick = function(){
    modal01.style.display = "block";
    modalImg.src = img01.src;
}
expandbutton02.onclick = function(){
    modal01.style.display = "block";
    modalImg.src = img02.src;
}
expandbutton03.onclick = function(){
    modal01.style.display = "block";
    modalImg.src = img03.src;
}
expandbutton04.onclick = function(){
    modal01.style.display = "block";
    modalImg.src = img04.src;
}

// Get the <span> element that closes the modal
var span01 = document.getElementsByClassName("close01")[0];

// When the user clicks on <span> (x), close the modal
span01.onclick = function() {
  modal01.style.display = "none";
}
//the read more script
var readmore=document.getElementById("more");
var readmorebtn=document.getElementById("myBtn");

readmorebtn.onlclick = function(){
    readmore.style.display="block";
}

var readmorebtn=document.getElementById("myBtn");

readmorebtn.onclick=function () {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}
//print page
var printbutton=document.querySelector('#print');
printbutton.addEventListener('click',()=>{

  window.print();

});
//PDP Page quantity
const amount = document.querySelector(".quantity-PDP");

function quantityPDP(){

  //added the values of the buttons in some constants
	const minus = document.querySelector(".decrease-PDP");
	const plus = document.querySelector(".increase-PDP");

	// Initial value of the input
	amount.value = 1;

	// Interaction and amount validate
	minus.addEventListener("click", () => {

		amount.focus();
		amount.value <= 1 ? amount.value = 1 : amount.value--;
    
    //we save the quantity into a localstorage it will help us with the adding to cart
    localStorage.setItem('quantityPDP',amount.value);
	}, true);

	plus.addEventListener("click", () => {

		amount.focus();

		amount.value >= 99 ? amount.value = 9 : amount.value++;

    //the same as above
    localStorage.setItem('quantityPDP',amount.value);
	}, true);
}
quantityPDP();
    //now we will add the function for adding to cart on the PDP page
let cartPDP=document.querySelectorAll('.add-to-cart');

for(let i=0;i<cartPDP.length;i++){
  cartPDP[i].addEventListener('click',()=>{
    quantityNumber();
  });
}
function onLoadCartPDPNumbers(){
  let quantitynr=localStorage.getItem('cartNumbers');

  if(quantitynr){
    document.querySelector('.cart span').textContent=quantitynr;
  }
}
function quantityNumber(){

  let quantNumber=localStorage.getItem('quantityPDP');
  quantNumber=parseInt(quantNumber);
  let cartnr=localStorage.getItem('cartNumbers');
  cartnr=parseInt(cartnr);
  
  if(quantNumber){
    localStorage.setItem('cartNumbers', cartnr + quantNumber);
    document.querySelector('.cart span').textContent=cartnr;
  }else{
    localStorage.setItem('cartNumbers',cartnr);
    document.querySelector('.cart span').textContent=cartnr;
  }
}
onLoadCartPDPNumbers();