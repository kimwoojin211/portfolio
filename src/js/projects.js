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

function getAllRepos(repos)
{
  console.log("yo");
  let allRepos =``;
  let repoId = 0
  repos.forEach(repo => {
    repoId++;
    const name = repo.name;
    const url = repo.svn_url;
    const description = repo.description;
    const language = repo.language_url;
    allRepos = `
      <a id="allRepos${repoId}" href="${url}">
        <div class="card">
          <p class="card-text">${name}</p>
          <p class="card-text">${description}</p>
          <p class="card-text">${url}</p>
          <p class="card-text">${language}</p>
        </div>
      </a>
    `;

    // $(`#allRepos${repoId}`).hover(function () {
    //   const preview = `
    //     <iframe src="${url}">
    //     </iframe>
    //     `;
    //   $("#box").html(preview);
    // }, function () {
    //   $("#box").html(`
    //     <iframe src="">
    //     </iframe>
    //     `);
    // });
    $("#allRepos").append(allRepos);
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
      getAllRepos(response);
    });
});



/*
goals:

make an animation 

*/