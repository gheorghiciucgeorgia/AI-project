//making the carousel banner work
var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

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
var dot1=document.getElementsByClassName('dot')[0];
var dot2=document.getElementsByClassName('dot')[1];
var dot3=document.getElementsByClassName('dot')[2];
var dot4=document.getElementsByClassName('dot')[3];
var dot5=document.getElementsByClassName('dot')[4];


dot1.onclick=function(){
  currentSlide(1);
}
dot2.onclick=function(){
  currentSlide(2);
}
dot3.onclick=function(){
  currentSlide(3);
}
dot4.onclick=function(){
  currentSlide(4);
}
dot5.onclick=function(){
  currentSlide(5);
}
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
$('.slick-prev').each(function() {
     $(this).html('<i class="fa-solid fa-circle-arrow-left"></i>');
});
$('.slick-next').each(function() {
  $(this).html('<i class="fa-solid fa-circle-arrow-right"></i>');
});



