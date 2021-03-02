$(document).ready(function () {
  $('#navbar').load('nav.html', function () {
    $("#resumeNav").addClass("active");
    $("#resumeNav > .sr-only").text("(current)");
  });
});