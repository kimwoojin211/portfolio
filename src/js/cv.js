import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/cv.css';
import Nav from './nav.js';
import PdfFile from '../assets/images/CV-portfolio.pdf'

async function navbarInitCV() {
  await Nav.navbarInit();
  $("#cvNav").addClass("active");
  $("#cvNav > .sr-only").text("(current)");
}

$(function () {
  navbarInitCV(); 
  $("#pdf").html(`<embed src=${PdfFile} target='_blank' width="100%" height="100%"/>`);
})

// const sections=["Education","Professional Experience","Research", "Skills","Accolades","Leadership"]

// classes: Sections, Headers, Subheaders, Details (BulletPoints), Location, Date From, Date To, Skills, Language

// format skill into little rounded bubbles like hiration did, color code by number of years/experience level
// maybe take a picture of diploma and upload?

// research senior paper, machine learning exercise, etc
