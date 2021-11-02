
// Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function openModal() {
    document.getElementById('id01').style.display = 'block';
}

$(document).ready(() => {
    $('.nav li a').on("click", () => {
        if (window.innerWidth < 768) {
            $('#navbar-toggle')[0].click();
        }
    });
    clockUpdate();
  setInterval(clockUpdate, 1000);
});

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';    
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0 ) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';    
});

carouselSlide.addEventListener('transitionend', () => {

    if(carouselImages[counter].id === 'lastImg'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2 ;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
    }
    if(carouselImages[counter].id === 'firstImg'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter ;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
    }
});

function clockUpdate() {
  var date = new Date();
  $('.digital-clock').css({'color': '#fff', 'text-shadow': '0 0 6px #ff0'});
  function addZero(x) {
    if (x < 10) {
      return x = '0' + x;
    } else {
      return x;
    }
  }

  function twelveHour(x) {
    if (x > 12) {
      return x = x - 12;
    } else if (x == 0) {
      return x = 12;
    } else {
      return x;
    }
  }

  var h = addZero(twelveHour(date.getHours()));
  var m = addZero(date.getMinutes());
  var s = addZero(date.getSeconds());

  $('.digital-clock').text(h + ':' + m + ':' + s)
}