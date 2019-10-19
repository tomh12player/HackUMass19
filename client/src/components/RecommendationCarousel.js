import React from "react";

import RecommendationDisplay from "./RecommendationDisplay";
import RecommendationCarouselService from "../services/RecommendationCarouselService";

export default class RecommendationCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.skipSong = RecommendationCarouselService.skipSong.bind(this);

    this.state = {
      tracks: this.props.tracks,
      totalTracks: this.props.tracks.length,
      index: 0
    };
  }

  render() {
      console.log("Why");
      console.log(this.state);
    const currentTrack = this.state.tracks[this.state.index];
    return (
      <div>
        <RecommendationDisplay track={currentTrack} />
        <button onClick={this.skipSong}>Skip</button>
      </div>
    );
  }
}
