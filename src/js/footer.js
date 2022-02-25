import $ from 'jquery';
import '../css/footer.css';

export default class Footer {
  static footerInit()
  {
        $("#footer").html(`
          <div class="footerWrapper">
            <div class="footerOverlay">
              <p>I'm currently working on a new version of this portfolio, using React!</p>
              <a href="https://kimwoojin211.github.io/portfolio-react"> Click here to see the work in progress!</a></p>
            </div>
          </div>
          `
          );
  }
}