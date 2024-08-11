
(() => {

  let menu = document.querySelector('.js_menu');
  let button = document.querySelector('.js_button');
  let close = document.querySelector('.js_close');

  button.addEventListener('click', function () {
    console.log('2');
    menu.classList.toggle('active');
  })

  close.addEventListener('click', function () {
    menu.classList.remove('active');
  })

})();

(() => {

  let item = document.querySelectorAll('.maximenuck_item');

  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', menuDrop);
  }

  function menuDrop() {
    let paren = this.closest('.maximenuck.level1');
    let box = paren.querySelector('.maximenuck_box');
    box.classList.toggle('active');
  }



})();

(() => {

  const anchors = document.querySelectorAll('a[href^="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

})();


(() => {

  let button = document.querySelectorAll('.b24-web-form-popup-btn-5');
  let formPopUp = document.querySelector('.pop_up');
  let close = document.querySelector('.pop_up_close')

  for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', function(){
      formPopUp.classList.add('active');
    })
  }
  close.addEventListener('click', function(){
    formPopUp.classList.remove('active');
  })

})();