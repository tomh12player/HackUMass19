import React from "react";

import RecommendationDisplay from "./RecommendationDisplay";
import RecommendationCarouselService from "../services/RecommendationCarouselService";
import SpotifyService from "../services/SpotifyService";

export default class RecommendationCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.saveSong = SpotifyService.saveSong.bind(this);
    this.skipSong = RecommendationCarouselService.skipSong.bind(this);
    this.componentDidMount = RecommendationCarouselService.componentDidMount.bind(this);

    this.state = {
      tracks: this.props.tracks,
      totalTracks: this.props.tracks.length,
      index: 0,
      hasPreview: false
    };
  }

  render() {
    const currentTrack = this.state.tracks[this.state.index];
    return (
      <div>
        <RecommendationDisplay track={currentTrack} />
        <button onClick={this.skipSong}>Skip</button>
        <button onClick={() => this.saveSong(this.props.saveTrack)}>
          Save Song
        </button>
      </div>
    );
  }
}
