import React from "react";

export default class RecommendationDisplay extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.track.name}</h1>
                <h2>{this.props.track.artists[0].name}</h2>
                <h3>{this.props.track.album.name}</h3>
            </div>
        )
    }
}