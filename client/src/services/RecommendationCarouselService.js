export default { skipSong };

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
