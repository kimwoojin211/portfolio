export default class TwitchService {
  static getTwitchInfo() {
    return fetch(`https://api.twitch.tv/helix/search/channels?query=w00j__`,{
      headers:{
        'Client-ID': `${process.env.TWITCH_CLIENTID}`,
        'Authorization': `Bearer ${process.env.TWITCH_ACCESSTOKEN}`
      }
    })
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}