import '../css/styles.css';
import '../css/nav.css';
import './nav.js';

$(document).ready(function(){
  $('#navbar').load('nav.html', function () {
    $("#homeNav").addClass("active");
    $("#homeNav > .sr-only").text("(current)");
  });
});