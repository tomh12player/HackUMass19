import React from "react";
import SpotifyService from "../services/SpotifyService";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.getToken = SpotifyService.getToken.bind(this);
    this.getNowPlaying = SpotifyService.getNowPlaying.bind(this);
    this.componentDidMount = SpotifyService.componentDidMount.bind(this);

    this.state = {
      loggedIn: false,
      nowPlaying: { name: "Not Checked", albumArt: "" }
    };
  }

  render() {
    return (
      <div className="App">
        <a onClick={this.getToken} href="http://localhost:8888">
          {" "}
          Login to Spotify{" "}
        </a>
        <div>Now Playing: {this.state.nowPlaying.name}</div>
        <div>
          <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }} />
        </div>
        {this.state.loggedIn && (
          <button onClick={this.getNowPlaying}>Check Now Playing</button>
        )}
      </div>
    );
  }
}
