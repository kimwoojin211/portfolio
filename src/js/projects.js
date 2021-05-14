import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/projects.css';
import Nav from './nav.js';
import GithubService from './github-service.js';

async function navbarInitProject() {
  await Nav.navbarInit();
  $("#projectsNav").addClass("active");
  $("#projectsNav > .sr-only").text("(current)");
}

function getFeaturedRepos(repos) {
  const featuredRepoNames = { TournamentOrganizer: "TournamentOrganizer.Solution", BreathOfTheWildRecipebook: "BOTW-RecipeBook", TapRoomReduxRemix: "tap-room-redux-remix", Repo4:""};
  let featuredRepoHTML = ``;
  let repoId = 0;
  let repo;

  for (const repoName in featuredRepoNames) {
    repoId++;
    let repoDescription;
    let repoLanguage;
    repo = repos.find(rep => rep.name === featuredRepoNames[repoName]);
    if (typeof repo === "undefined"){
      repo = { name: "", svn_url:"https://github.com/kimwoojin211"};
      repoDescription = "";
      repoLanguage = "";
    }
    else{
      repoDescription = repo.description;
      repoLanguage = repo.language;
    }
    featuredRepoHTML = `
      <a id="featuredRepo${repoId}" href="${repo.svn_url}" >
        <div class="card">
          <p class="card-text">${reformatString(repoName)}</p>
        </div>
      </a>
    `;
    $("#featuredRepos").append(featuredRepoHTML);
    document.getElementById(`featuredRepo${repoId}`).addEventListener("mouseover", event => {
      $("#descriptionName").text(reformatString(repoName));
      $("#descriptionDesc").text(repoDescription);
      $("#descriptionLanguages").text(repoLanguage);
      $("#description>*").show();

    });
    document.getElementById(`featuredRepo${repoId}`).addEventListener("mouseout", event => {
      $("#description>*").hide();
    });
  }
}

function reformatString(str) {
  if(str == null || str.slice(0,4)=="Repo"){
    return "";
  }
  else {
    const regex = /([A-Z][a-z]+)/g;
    const words = str.split(regex);
    return words.filter(entry => entry !== "").join(" ").toString();
  }
}

$(function () {
  navbarInitProject(); 
  GithubService.getRepo()
    .then(function(response){
      if (response instanceof Error) {
        throw Error(`Github API error: ${response.message}`);
      }
      const repos = response;
      getFeaturedRepos(repos);
    });

  $("#featuredReposButton").on("click", function (event) {
    $("#allRepos").hide();
    $("#featuredRepos").show();
    $("#view").text("Featured Github Repositories");
  });
});

