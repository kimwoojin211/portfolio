import Nav from './nav.js';
import '../css/styles.css';

$(function(){
  navbarInitHome();
});

async function navbarInitHome(){
  await Nav.navbarInit();
  $("#homeNav").addClass("active");
  $("#homeNav > .sr-only").text("(current)");
}