$(document).ready(function () {
  $('#navbar').load('nav.html', function () {
    $("#hobbiesNav").addClass("active");
    $("#hobbiesNav > .sr-only").text("(current)");
  });
});