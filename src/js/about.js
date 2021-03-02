$(document).ready(function () {
  $('#navbar').load('nav.html', function () {
    $("#aboutNav").addClass("active");
    $("#aboutNav > .sr-only").text("(current)");
  });
});