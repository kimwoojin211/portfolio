import Nav from './nav.js';

$(function(){
  navbarInitHome();
});

async function navbarInitHome(){
  await Nav.navbarInit();
  $("#homeNav").addClass("active");
  $("#homeNav > .sr-only").text("(current)");
}