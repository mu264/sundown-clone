const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation() {
    var container =  document.querySelector("#bottom-page-3-container")
    var fixed = document.querySelector(".fixed-image")

    container.addEventListener("mouseenter", function(){
        fixed.style.display = "block"
})

    container.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})
  
    var a = document.querySelectorAll(".bottom-page-3")
    a.forEach(function(e){
    e.addEventListener("mouseenter", function(){
    var image = e.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})
})
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

function menuAnimation() {
    var menu = document.querySelector("nav h3")
    var full = document.querySelector(".full-screen")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function() {
    if (flag == 0) {
        full.style.top = 0
        navimg.style.opacity = 0
        flag = 1
    }else{
        full.style.top = "-100%"
        navimg.style.opacity = 1
        flag = 0
    }
})
}

function loaderAnimation() {
    var loader = document.querySelector(".loader")
    setTimeout(function() {
        loader.style.top = "-100%"
    },4200)
}


page4Animation()
swiperAnimation()
menuAnimation()
loaderAnimation()
