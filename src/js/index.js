import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Nav from './nav.js';
import Footer from './footer.js';

$(function(){
  InitHome();
});

async function InitHome(){
  await Nav.navbarInit();
  await Footer.footerInit();
  $("#homeNav").addClass("active");
  $("#homeNav > .sr-only").text("(current)");
  scrollTransitions();
  
}

function scrollTransitions(){
  const transitions = () => {
    const yScroll = window.scrollY;
    if (yScroll > $("#aboutMe").height()) {
      $("#aboutMe").css("opacity", (yScroll - $("#aboutMe").height()) / ($("#aboutMe").height() / 2));
    }
    else {
      $("#aboutMe").css("opacity", 0);
    }

    if (yScroll > 400) {
      $(".hero").addClass('active');
    }
    else {
      $(".hero").removeClass('active');
    }

    if (yScroll > 120) {
      $(".hero h1").css("opacity", 1 - (yScroll - 170) / 400);
    }
  };
  window.addEventListener('scroll', transitions);
}