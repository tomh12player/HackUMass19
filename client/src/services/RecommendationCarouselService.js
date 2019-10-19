export default { skipSong, componentDidMount };

function componentDidMount() {
  setPreview.call(this);
}

function skipSong() {
  if (this.state.index < this.state.totalTracks - 1) {
    this.setState({
      index: this.state.index + 1
    },
        setPreview.call(this));
  } else {
    this.setState({
      index: 0
    },
        setPreview.call(this));
  }

}

function setPreview() {

  if(this.state.tracks[this.state.index].preview_url){
    console.log("Hello");
    this.setState({
      hasPreview: true
    })
  }
  else(
      this.setState({
        hasPreview: false
      },
          skipSong.call(this))
  )

}
