import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

export default {
  componentDidMount,

  getNowPlaying,
  getToken
};

function componentDidMount() {
  getToken.call(this);
}

//==============================================================================

async function getNowPlaying() {
  await spotifyApi
    .getMyCurrentPlaybackState()
    .then(response => {
      this.setState({
        nowPlaying: {
          name: response.item.name,
          albumArt: response.item.album.images[0].url
        }
      });
    })
    .catch(() => {
      this.setState({
        name: undefined,
        albumArt: undefined
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
  console.log(token);
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
