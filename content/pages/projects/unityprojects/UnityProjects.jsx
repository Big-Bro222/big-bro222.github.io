import React, { Component } from "react";
import ReactPlayer from "react-player";
import "../../ProjectStyle.css"

export default class UnityProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <div className="videoParent">
          <ReactPlayer
            className="video"
            width="100%"
            url="https://youtu.be/LcrI5GrRV08"
            controls
          />
        </div>
        <div className="videoParent">
          <ReactPlayer
            className="video"
            width="100%"
            url="https://youtu.be/0ySjLPczxs4"
            controls
          />
        </div>{" "}
        <div className="videoParent">
          <ReactPlayer
            className="video"
            width="100%"
            url="https://youtu.be/ccCgWqAy-XU"
            controls
          />
        </div>{" "}
        <div className="videoParent">
          <ReactPlayer
            className="video"
            width="100%"
            url="https://youtu.be/-z_UGbtqF4s"
            controls
          />
        </div>
        <div className="videoParent">
          <ReactPlayer
            className="video"
            width="100%"
            url="https://youtu.be/MNocLu0O5l4"
            controls
          />
        </div>{" "}
        <div className="videoParent">
          <ReactPlayer
            className="video"
            width="100%"
            url="https://youtu.be/rcBT9Bcmwdo"
            controls
          />
        </div>{" "}
        <div className="videoParent">
          <ReactPlayer
            className="video"
            width="100%"
            url="https://youtu.be/CSKsFfWhbmI"
            controls
          />
        </div>{" "}
        <div className="videoParent">
          <ReactPlayer
            className="video"
            width="100%"
            url="https://youtu.be/VM3EuinmWpU"
            controls
          />
        </div>{" "}
        <div className="videoParent">
          <ReactPlayer
            className="video"
            width="100%"
            url="https://youtu.be/VIeii7B7O10"
            controls
          />
        </div>
      </div>
    );
  }
}
