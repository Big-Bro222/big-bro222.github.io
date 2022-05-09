import React, { Component } from "react";
import ReactPlayer from "react-player";
import "../../../../src/ProjectStyle.css";
import StoryBoard1Url from "../../../../src/img/Rugbeats/storyboard1.png";
import StoryBoard2Url from "../../../../src/img/Rugbeats/storyboard2.png";
import UI1Url from "../../../../src/img/Rugbeats/UI1.png";
import UI2Url from "../../../../src/img/Rugbeats/UI2.png";
import UI3Url from "../../../../src/img/Rugbeats/UI3.png";
import UI4Url from "../../../../src/img/Rugbeats/UI4.png";
import UI5Url from "../../../../src/img/Rugbeats/UI5.png";

export default class Rugbeats extends Component {
  render() {
    return (
      <div>
        <div id="Home"></div>
        <div className="Content">
          <div className="section">
            <h1 className="title">Final Output</h1>
            <div>
              <div className="video-wrapper">
                <ReactPlayer
                  className="video"
                  width="100%"
                  height="30vw"
                  url="https://youtu.be/a40IY65OJKg"
                  loop
                  controls
                />
              </div>
            </div>
          </div>

          <div className="section">
            <h1 className="title">StoryBoard</h1>
            <p className="description">
              {" "}
              Our task was to build a maze game. But we find it less challenging
              and not attractive enough from the game perspective. So we decided
              to build a multiplayer maze game.To better communicate our idea
              and get feedback,we drew several storyboard to show the
              interaction point
            </p>
            <div className="singlewrapper">
              <img
                src={StoryBoard1Url}
                className="WideImage"
                alt="StoryBoard1"
              ></img>
              <img
                src={StoryBoard2Url}
                className="WideImage"
                alt="StoryBoard2"
              ></img>
              <p className="Figurediscription">Figure6 Menu Selection</p>
            </div>
          </div>

          <div className="section ">
            <h1 className="title">Game Interface</h1>
            <div className="singlewrapper">
              <img src={UI1Url} className="WideImage" alt="UI1"></img>
              <img src={UI2Url} className="WideImage" alt="UI2"></img>
              <img src={UI3Url} className="WideImage" alt="UI3"></img>
              <img src={UI4Url} className="WideImage" alt="UI4"></img>
              <img src={UI5Url} className="WideImage" alt="UI5"></img>
            </div>
          </div>

          <div className="section" id="test">
            <h1 className="title">Self-reflection</h1>
            <p className="description">
              I learned a lot about java UI programming, I managed to master
              Javafx. During the project , we basically cooperate on Github,
              it's a good experience to learn how to manage work flow.
            </p>
            <p className="description">
              Regarding to the aspect of gamification, we chose multiplayer game
              because we think it provides a more intense gaming experience. A
              good multiplayer game should be intense and also have a proper
              level of difficulty. And we should have thought of a story or
              theme to make our work more complete.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
