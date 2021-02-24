$(document).ready(function(){
  $(".contactIcons").children().css("display", "none");
  $(".contactInfo").children().css("display", "none");
  $("#Contact").on("click",function(){
    if($("#contactBox").css("display")==="none")
    {
      $("#contactBox").slideDown(1100,"swing", function () {
        $(this).css('display', 'flex');
        $(".ig").fadeIn(700);
        $(".discord").fadeIn(2000);
        $(".gmail").fadeIn(4000);
        $(".linkedin").fadeIn(5000);
    });
    }
    else
    {
      $(".usernames").fadeOut();
      $(".icons").fadeOut();
      // $(".ig").fadeOut();
      // $(".discord").fadeOut();
      // $(".gmail").fadeOut();
      // $(".linkedin").fadeOut();
      $("#contactBox").delay(200).slideUp(950);
    }
    // document.getElementById("contactBox").setAttribute("display","flex");
  });
});