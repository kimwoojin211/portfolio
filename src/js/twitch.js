import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/twitch.css';
import Nav from './nav.js';

async function navbarInitTwitch() {
  await Nav.navbarInit();
  $("#twitchNav").addClass("active");
  $("#twitchNav > .sr-only").text("(current)");
}

$(function () {
  navbarInitTwitch();
});