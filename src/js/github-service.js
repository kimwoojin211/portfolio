export default class GithubService {
  static getRepo() {
    return fetch(`https://api.github.com/users/kimwoojin211/repos`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
      return response.json();
      })
      .catch(function (error) {
        return error;
      })
  }
}