const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')
burger.addEventListener('click',()=>{
  burger.classList.toggle('active')
  nav.classList.toggle('open')
})

// slider slick
$(document).ready(function () {
  $('.promo__slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: "<img src='img/icon/arrowLeft.png' class='prev' alt='1'>",
    nextArrow: "<img src='img/icon/arrowRigth.png' class='next' alt='2'>",
  });
});
$(document).ready(function () {
  $('.solutions__slider').slick({
    dots: false,
    slidesToShow: 1,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: "<img src='img/icon/arrowLeft2.png' class='prev' alt='1'>",
    nextArrow: "<img src='img/icon/arrowRigth2.png' class='next' alt='2'>",
  });
});

//tabs
const tabButtons = document.querySelectorAll('.button-nav')
const contents = document.querySelectorAll('.content-item')
tabButtons.forEach(function(item){
  item.addEventListener('click',()=>{
    let currentBtn = item
    let tabId = currentBtn.getAttribute('data-tab')
    console.log(tabId)
    let contentItem = document.querySelector(tabId)
    
    tabButtons.forEach(function(item){
      item.classList.remove('button-nav_active')
    })
    contents.forEach(function(item){
      item.classList.remove('content__item_active')
    })
    currentBtn.classList.add('button-nav_active')
    contentItem.classList.add('content__item_active')
  })
})

document.querySelector('.button-nav:nth-child(2)').click()

