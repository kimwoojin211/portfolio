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

  for (const repoName in featuredRepoNames) {
    repoId++;
    repo = repos.find(rep => rep.name === featuredRepoNames[repoName]);
    if (typeof repo === "undefined"){
      repo = { name: "", svn_url:"projects.html"};
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
      $(".box iframe").attr('src', `https://kimwoojin211.github.io/portfolio`);
    });
    document.getElementById(`featuredRepo${repoId}`).addEventListener("mouseout", event => {
      $(".box iframe").attr('src', '');
    });
    }
  }

function reformatString(string) {
  if(string.slice(0,4)=="Repo"){
    return "";
  }
  else {
    const regex = /([A-Z][a-z]+)/g;
    const words = string.split(regex);
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

make an animation 

*/