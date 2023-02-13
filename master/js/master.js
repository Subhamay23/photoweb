
const preLoaderPage = document.getElementById('preloader');
function preLoader(){
preLoaderPage.style.display = 'none';
}

// navbar
const  menuToggle = document.querySelector('.toggle-btn');
const navList = document.querySelector('.nav-item');
menuToggle.addEventListener('click', function()
{
menuToggle.classList.toggle('active');
navList.classList.toggle('active');

if(menuToggle.classList.contains('active')){

 menuToggle.innerHTML='<i class="fas fa-bars"></i>'
}
else
{
    menuToggle.innerHTML='<i class="fas fa-xmark"></i>'
}

}
);

// 
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    speed: 500,
    autoplay: {
      delay: 5000,
    },

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //   filter
$(document).ready(function(){
  $('.filter-item').click(function(){
      const value = $(this).attr('data-filter')
      if(value == 'all'){
          $('.image-box').show('1000')
      }
      else{
          $('.image-box').not('.'+value).hide('1000')
          $('.image-box').filter('.'+value).show('1000')
          
      }
  });
      $('.filter-item').click(function(){
          $(this).addClass("active-filter").siblings().removeClass('active-filter');
      });
  });
  // 
  $(document).ready(function () {
    $(".gallery").magnificPopup({
      type: "image",
      delegate: 'a',
      gallery: {
        enabled: true
      },
      callbacks: {
        beforeOpen: function() {
            jQuery('body').css('overflow', 'hidden');
        },
        beforeClose: function() {
            jQuery('body').css('overflow', 'auto');
        }
    }

    });
  });
  // form
  let form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
    method: 'post',
    body: new FormData(document.getElementById('sheetdb-form')),
  }).then(
    response => response.json()
  ).then((html) => {
    alert("Thank You ❤️");
    window.location.reload(), reset();
  });
});
// 
$('.owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:6
      }
  }
})
//PreLoader 
