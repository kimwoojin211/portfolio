$(document).ready(function(){
  $('#navbar').load('nav.html', function () {
    $("#homeNav").addClass("active");
    $("#homeNav > .sr-only").text("(current)");
  });
});