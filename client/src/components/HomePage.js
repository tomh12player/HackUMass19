import React from "react";
import SpotifyService from "../services/SpotifyService";
import HomePageService from "../services/HomePageService";
import RecommendationCarousel from "./RecommendationCarousel";
import RecentlySavedSongsDisplay from "./RecentlySavedSongsDisplay";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.getToken = SpotifyService.getToken.bind(this);
    this.getMyRecentlyPlayed = SpotifyService.getMyRecentlyPlayed.bind(this);

    this.componentDidMount = HomePageService.componentDidMount.bind(this);
    this.saveTrack = HomePageService.saveTrack.bind(this);
    this.onSavedTracksPressed = HomePageService.onSavedTracksPressed.bind(this);

    this.state = {
      savedTracksView: false,
      savedTracks: [],
      loggedIn: false
    };
  }

  render() {
    return (
      <div className="App">
        {!this.state.savedTracksView ? (
          <div>
            {!this.state.loggedIn && (
              <a onClick={this.getToken} href="http://localhost:8888">
                {" "}
                Login to Spotify{" "}
              </a>
            )}
            {this.state.loggedIn && this.state.tracks && (
              <div>
                <RecommendationCarousel
                  tracks={this.state.tracks}
                  saveTrack={this.saveTrack}
                />
                <button onClick={this.onSavedTracksPressed}>
                  See Saved Songs From Session
                </button>
              </div>
            )}
          </div>
        ) : (
          <RecentlySavedSongsDisplay savedTracks={this.state.savedTracks} />
        )}
      </div>
    );
  }
}
