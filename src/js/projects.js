$(document).ready(function () {
  $('#navbar').load('nav.html', function () {
    $("#projectsNav").addClass("active");
    $("#projectsNav > .sr-only").text("(current)");
  });
});