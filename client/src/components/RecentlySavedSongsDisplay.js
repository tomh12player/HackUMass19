import React from "react";

export default class RecentlySavedSongsDisplay extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>{this.props.savedTracks.length}</div>
        )
    }
}