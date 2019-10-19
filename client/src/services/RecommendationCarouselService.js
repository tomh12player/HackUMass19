import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

export default { skipSong, saveSong, seeSavedSongs};

function skipSong() {
  if (this.state.index < this.state.totalTracks - 1) {
    this.setState({
      index: this.state.index + 1
    });
  } else {
    this.setState({
      index: 0
    });
  }
}

async function saveSong() {
  const currentSongId = this.state.tracks[this.state.index].id;
  await spotifyApi
      .addToMySavedTracks([currentSongId])
      .catch(() => {
        console.log("save dunt work")
          }
      )

}

async function seeSavedSongs() {

  await spotifyApi
      .getMySavedTracks()
      .then(response => {
        console.log(response);
      });

}