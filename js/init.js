$(document).ready(function () {

  let m = (new Date).getMonth();
  month = ["Январe", "Февралe", "Мартe", "Апрелe", "Маe", "Июнe", "Июлe", "Августe", "Сентябрe", "Октябрe", "Ноябрe", "Декабрe"]
  $("#month").html(month[m]);

});


$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;

    var accordionHeader = this.el.find('.acc_header');
    accordionHeader.on('click', {
      el: this.el,
      multiple: this.multiple
    },
      this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      //this is the ul.submenuItems
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.maximenuck_body').not($next).slideUp().parent().removeClass('open');
    }
  }

  var accordion = new Accordion($('.acc'), false);
});
