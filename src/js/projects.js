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
  const featuredRepoNames = { TournamentOrganizer: "TournamentOrganizer.Solution", BreathOfTheWildRecipebook: "BOTW-RecipeBook", Repo3: "", Repo4:""};
  let featuredRepoHTML = ``;
  let repoId = 0;
  let repo;
  let repoIframe;

  for (const repoName in featuredRepoNames) {
    repoId++;
    let repoDescription;
    let repoLanguage;
    repo = repos.find(rep => rep.name === featuredRepoNames[repoName]);
    if (typeof repo === "undefined"){
      repo = { name: "", svn_url:"https://github.com/kimwoojin211"};
      repoIframe = "assets/images/Github.png";
      repoDescription = "";
      repoLanguage = "";
    }
    else{
      repoDescription = repo.description;
      repoLanguage = repo.language;
      repoIframe = `https://kimwoojin211.github.io/${repoName}`;
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
      // $(".box iframe").attr('src', repoIframe);
      $("#descriptionName").text(reformatString(repoName));
      $("#descriptionDesc").text(repoDescription);
      $("#descriptionLanguages").text(repoLanguage);
      $("#description>*").show();

    });
    document.getElementById(`featuredRepo${repoId}`).addEventListener("mouseout", event => {
      $(".box iframe").attr('src', '');
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

function getAllRepos(repos)
{
  let allReposHTML =``;
  let repoId = 0;
  repos.forEach(repo => {
    repoId++;
    const name = repo.name;
    const url = repo.svn_url;
    const description = repo.description;
    const language = repo.language_url;
    allReposHTML = `
      <a id="allRepos${repoId}" href="${url}">
        <div class="card">
          <p class="card-text">${name}</p>
          <p class="card-text">${description}</p>
          <p class="card-text">${url}</p>
          <p class="card-text">${language}</p>
        </div>
      </a>
    `;

    $("#allRepos").append(allReposHTML);

    document.getElementById(`allRepos${repoId}`).addEventListener("mouseover", event => {
      $(".box iframe").attr('src',`${url}`);
    });
    document.getElementById(`allRepos${repoId}`).addEventListener("mouseout", event => {
      $(".box iframe").attr('src', '');
    });

  }); 
}

$(function () {
  navbarInitProject(); 
  GithubService.getRepo()
    .then(function(response){
      if (response instanceof Error) {
        throw Error(`Github API error: ${response.message}`);
      }
      const repos = response;
      getAllRepos(repos);
      getFeaturedRepos(repos);
    });

  $("#allReposButton").on("click", function (event) {
    $("#allRepos").show();
    $("#featuredRepos").hide();
    $("#view").text("All Github Repositories");
  });

  $("#featuredReposButton").on("click", function (event) {
    $("#allRepos").hide();
    $("#featuredRepos").show();
    $("#view").text("Featured Github Repositories");
  });


});


/*
goals:

make a version where repositories are listed horizontally on the bottom (with a scrollbar(or pages) for all repositories)
make 2 categories: standalone projects and specific function website.
make another version where every project is listed as expandable cards

*/