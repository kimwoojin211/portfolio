import '../css/nav.css';

export default class Nav {
  static navbarInit()
  {
    $("#navbar").html(`
    <nav class="navbar navbar-expand-md">
      <a class="navbar-brand mr-auto" href="./index.html">300hHZ</a>

      <div class="collapse navbar-collapse" id="navbarContent">
        <div class="navbar-nav ml-auto">
          <a class="nav-item nav-link" id="homeNav" href="./index.html">Home<span class="sr-only"></span></a>
          <a class="nav-item nav-link" id="aboutNav" href="#">About Me<span class="sr-only"></span></a>
          <a class="nav-item nav-link" id="resumeNav" href="#">Resume/CV<span class="sr-only"></span></a>
          <a class="nav-item nav-link" id="projectsNav" href="./projects.html">Projects<span class="sr-only"></span></a>
          <a class="nav-item nav-link" id="hobbiesNav" href="#">Hobbies<span class="sr-only"></span></a>
        </div>
      </div>
      <a class="nav-item" id="contact" href="#">Contact</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>


    <div id="contactBox">
      <div class="contactIcons col-4">
        <a href="https://www.instagram.com/w00j_w00j" class="ig icons"><img class="ig icons"
            src="https://freeiconshop.com/wp-content/uploads/edd/instagram-new-flat.png" alt="Instagram"></a>
        <a class="discord icons" href="https://discord.com/channels/@me"><img class="discord icons"
            src="https://cdn.iconscout.com/icon/free/png-256/discord-2752210-2285027.png" alt="Discord"></a>
        <a class="linkedin icons" href="https://www.linkedin.com/in/kimwoojin211/"><img class="linkedin icons"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg" alt="Linkedin"></a>
        <a class="gmail icons" href="mailto:kimwoojin211@gmail.com"><img class="gmail icons"
            src="https://pinkeyegraphics.co.uk/wp-content/uploads/gmail-new-icon.ico" alt="Gmail"></a>
      </div>
      <div class="contactInfo col-8">
        <a class="usernames ig" href="https://www.instagram.com/w00j_w00j">w00j_w00j</a>
        <a class="usernames discord" href="https://discord.com/channels/@me">Wooj#3015</a>
        <a class="usernames linkedin" href="https://www.linkedin.com/in/kimwoojin211/">kimwoojin211</a>
        <a class="usernames gmail" href="mailto:kimwoojin211@gmail.com">kimwoojin211</a>
      </div>
    </div>
    `);

    $(".contactIcons").children().css("display", "none");
    $(".contactInfo").children().css("display", "none");

    //click on contact function
    $("#contact").on("click", function (event) {
      event.preventDefault();
      if ($("#contactBox").css("display") === "none") {
        $("#contact").addClass('active');
        $("#contactBox").slideDown(1100, "swing", function () {
          $(this).css('display', 'flex');
          $(".ig").fadeIn(700);
          $(".discord").fadeIn(1300);
          $(".linkedin").fadeIn(2000);
          $(".gmail").fadeIn(2800);
        });
      }
      else {
        $(".usernames").fadeOut();
        $(".icons").fadeOut();
        $("#contactBox").delay(200).slideUp(950);
        $("#contact").removeClass('active');
      }
    }); 

    const fixedNav = () => {
      if (window.scrollY > 20) {
        $(".navbar").addClass('active');
        $(".hero").addClass('active');
        $("#contactBox").addClass('active');
      }
      else {
        $(".navbar").removeClass('active');
        $(".hero").removeClass('active');
        $("#contactBox").removeClass('active');
      }

    };
    window.addEventListener('scroll', fixedNav);
  }
}