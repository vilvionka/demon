
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