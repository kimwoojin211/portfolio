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
  let featuredRepoNames = ["portfolio", "TournamentOrganizer.Solution", "BOTW-Recipebook", ""];
  let featuredRepoHTML = ``;
  let repoId = 0;
  let repo;

  featuredRepoNames.forEach(repoName => {
    if (repoName!==""){
      repoId++;
      repo = repos.find(rep => rep.name === repoName);
      console.log(JSON.stringify(repo) + " " + typeof(repos) );
      // const name = repo.name;
      // const url = repo.svn_url;
      featuredRepoHTML = `
      <a id="featuredRepo${repoId}" >
        <div class="card">
          <p class="card-text">Hey ${repoId}</p>
        </div>
      </a>
    `;
    }
    $("#featuredRepos").append(featuredRepoHTML);
  });
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
  });

  $("#featuredReposButton").on("click", function (event) {
    $("#allRepos").hide();
    $("#featuredRepos").show();
  });


});


/*
goals:

make an animation 

*/