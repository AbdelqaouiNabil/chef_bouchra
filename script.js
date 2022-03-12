const burger = document.querySelector(".burger");
const navlinks = document.querySelector(".navlinks");
const links = document.querySelectorAll(".navlinks li");

const lines = document.querySelectorAll(".line");


burger.addEventListener('click',()=>{
    navlinks.classList.toggle("open");
    lines.forEach(line =>{
        line.classList.toggle("changeColor");
    });
    links.forEach(link=>{
        link.classList.toggle("fade");
    })
})




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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


  

function up(max) {
  document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
  if (document.getElementById("myNumber").value >= parseInt(max)) {
      document.getElementById("myNumber").value = max;
  }
}
function down(min) {
  document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
  if (document.getElementById("myNumber").value <= parseInt(min)) {
      document.getElementById("myNumber").value = min;
  }
}