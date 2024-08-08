$(document).ready(function () {

  let m = (new Date).getMonth();
  month = ["Январe", "Февралe", "Мартe", "Апрелe", "Маe", "Июнe", "Июлe", "Августe", "Сентябрe", "Октябрe", "Ноябрe", "Декабрe"]
  $("#month").html(month[m]);

});