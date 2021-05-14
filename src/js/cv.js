import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/cv.css';
import Nav from './nav.js';
import PdfFile from '../assets/images/CV-portfolio.pdf';

async function navbarInitCV() {
  await Nav.navbarInit();
  $("#cvNav").addClass("active");
  $("#cvNav > .sr-only").text("(current)");
}

$(function () {
  navbarInitCV(); 
  $("#pdf").html(`<embed src=${PdfFile} target='_blank' width="100%" height="100%"/>`);
});
