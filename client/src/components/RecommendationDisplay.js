import React from "react";

export default class RecommendationDisplay extends React.Component {




    render() {
        console.log("Okay");
        console.log(this.props.track);
        return (
            <div>
                <h1>{this.props.track.name}</h1>
                <h2>{this.props.track.artists[0].name}</h2>
                <h3>{this.props.track.album.name}</h3>
            </div>
        )
    }
}