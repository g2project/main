var slideIndex = 0; //slide index

// HTML 로드가 끝난 후 동작
window.onload=function(){
  showSlides(slideIndex);

  // Auto Move Slide
  var sec = 3000;
  setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);

  }, sec);
}


// Next/previous controls
function moveSlides(n) {
  slideIndex = slideIndex + n
  showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {

  var slides = document.getElementsByClassName("mySlides");
  var size = slides.length;

  if ((n+1) > size) {
    slideIndex = 0; n = 0;
  }else if (n < 0) {
    slideIndex = (size-1);
    n = (size-1);
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[n].style.display = "block";
}

$(document).ready(function(){
  let weatherIcon = {
      '01' : 'fas fa-sun',
      '02' : 'fas fa-cloud-sun',
      '03' : 'fas fa-cloud',
      '04' : 'fas fa-cloud-meatball',
      '09' : 'fas fa-cloud-sun-rain',
      '10' : 'fas fa-cloud-showers-heavy',
      '11' : 'fas fa-poo-storm',
      '13' : 'far fa-snowflake',
      '50' : 'fas fa-smog'
  };

  $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=Jeju&appid=dab36ab4bb7115dc1e4e1592c7e0d2d4&units=metric',
      dataType: 'json',
      type: 'GET',
      success: function(data){
          var $Icon = (data.weather[0].icon).substr(0,2);
          var $Temp = Math.floor(data.main.temp) + 'º';
          var $city = data.name;

           $('.CurrIcon').append('<i class="' + weatherIcon[$Icon] + '"></i>');
           $('.CurrTemp').prepend($Temp);
           $('.City').append($city);
      }
  })
});