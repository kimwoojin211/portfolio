import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Nav from './nav.js';

$(function () {
  navbarInitHome();
});

async function navbarInitHome() {
  await Nav.navbarInit();
  $("#projectsNav").addClass("active");
  $("#projectsNav > .sr-only").text("(current)");
}
