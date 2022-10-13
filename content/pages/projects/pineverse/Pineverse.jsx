import React, { Component } from "react";
import ReactPlayer from "react-player";
import "../../ProjectStyle.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import lottie from './enjoying-sloth.json'

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
        <Player
          autoplay
          loop
          src={lottie}
          style={{ height: "300px", width: "300px" }}
          speed={0.6}
        >
        </Player>
        <h3>this page is under construction, stay tuned ...</h3>
      </div>
    );
  }
}
