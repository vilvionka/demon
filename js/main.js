
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


