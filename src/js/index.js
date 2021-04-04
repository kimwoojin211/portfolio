import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Nav from './nav.js';

$(function(){
  navbarInitHome();
});

async function navbarInitHome(){
  await Nav.navbarInit();
  $("#homeNav").addClass("active");
  $("#homeNav > .sr-only").text("(current)");
}