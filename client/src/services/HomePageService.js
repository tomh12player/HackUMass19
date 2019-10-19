export default {
  componentDidMount,

  onSavedTracksPressed,
  saveTrack
};

function componentDidMount() {
  this.getToken();
  this.getMyRecentlyPlayed();
}

function saveTrack(track) {
  const currentSaved = this.state.savedTracks;
  currentSaved.push(track);
  this.setState({
    savedTracks: currentSaved
  });
}

function onSavedTracksPressed() {
  this.setState({
    savedTracksView: true
  });
}
