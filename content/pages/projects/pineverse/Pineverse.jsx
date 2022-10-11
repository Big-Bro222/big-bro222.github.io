import React, { Component } from "react";
import ReactPlayer from "react-player";
import "../../ProjectStyle.css";

export default class Pineverse extends Component {
  render() {
    return (
      <div>
        <div className="Content">
          <h1 className="title">Outputs</h1>
          <div className="video-wrapper">
            <ReactPlayer
              className="video"
              width="100%"
              height="20vw"
              url="https://youtu.be/jjik5CwaJoA"
              loop
              controls
            />
          </div>
        </div>
        <h3>this page is under construction, stay tuned ...</h3>
      </div>
    );
  }
}
