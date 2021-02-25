$(document).ready(function(){
  $(".contactIcons").children().css("display", "none");
  $(".contactInfo").children().css("display", "none");
  const navbar = document.querySelector('.navbar');
  
  const fixedNav = () => {
    if(window.scrollY > navbar.offsetHeight)
    {
      $(".navbar").addClass('active');
      $(".hero").addClass('active');
      $("#contactBox").addClass('active');    
    }
    else
    {
      $(".navbar").removeClass('active');
      $(".hero").removeClass('active'); 
      $("#contactBox").removeClass('active'); 
    }
  
  }

  window.addEventListener('scroll', fixedNav);
  //click on contact function
  $("#contact").on("click",function(event){
    event.preventDefault();
    if($("#contactBox").css("display")==="none")
    {
      $("#contact").addClass('active');
      $("#contactBox").slideDown(1100,"swing", function () {
        $(this).css('display', 'flex');
        $(".ig").fadeIn(700);
        $(".discord").fadeIn(1300);
        $(".linkedin").fadeIn(2000);
        $(".gmail").fadeIn(2800);
      });
    }
    else
    {
    $(".usernames").fadeOut();
    $(".icons").fadeOut();
    $("#contactBox").delay(200).slideUp(950);
    $("#contact").removeClass('active'); 
    }
  });
});