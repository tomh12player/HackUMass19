import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

export default {
  componentDidMount,

  getToken
};

function componentDidMount() {
  getToken.call(this);
  getMyRecentlyPlayed.call(this);
}

//==============================================================================

async function getMyRecentlyPlayed() {
  await spotifyApi
    .getMyRecentlyPlayedTracks()
    .then(response => {
      this.setState(
        {
          recentlyPlayed: response.items[0]
        },
          () => getRecommendations.call(this)
      );
    })
    .catch(() => {
      this.setState({
        recentlyPlayed: undefined
      });
    });
}

async function getRecommendations() {
  const recentId = this.state.recentlyPlayed.track.id;

  await spotifyApi
    .getRecommendations({ seed_tracks: [recentId], limit: 100 })
    .then(response => {
      this.setState({
        tracks: response.tracks
      });
    })
    .catch(() => {
      this.setState({
        tracks: undefined
      });
    });
}

//----------------------------------------------------------------------------------------

function getToken() {
  const params = getHashParams();
  const token = params.access_token;
  if (token) {
    spotifyApi.setAccessToken(token);
  }
  this.setState({
    loggedIn: token ? true : false
  });
}

//========================================================================================

function getHashParams() {
  const hashParams = {};
  let e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  e = r.exec(q);
  while (e) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
    e = r.exec(q);
  }
  return hashParams;
}
