import React, { Component } from "react";
import ReactPlayer from "react-player";
import "../../ProjectStyle.css"


export default class HCIBootcamp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "#db3943",
    };
  }

  render() {
    return (
      <div>
        <div id="Home"></div>
        <div className="Fix">
          <div className="section ">
            <h1 className="title"> Breakdown Analysis </h1>
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
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/HCIBootcamp/PeerIntrospection.png"
                className="WideImage"
                alt="PeerIntrospectionUrl"
              ></img>
              <p className="Figurediscription">
                Figure1 Sheet used for peer instropection
              </p>
            </div>
          </div>

          <div className="section ">
            <h1 className="title"> Brainstorming </h1>
            <p className="description">
              {" "}
              After we do the oral brainstorming based on our system breakdown
              analysis, we got 15 initial ideas. Our technique is that each one
              thinks of one "stupid" idea without telling other people. This may
              inspire other ideas. To better communicate our idea, we did video
              brainstorming.
            </p>
            <div className="singlewrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/HCIBootcamp/Ideation.png"
                className="WideImage"
                alt="WideImage"
              ></img>
              <p className="Figurediscription">Figure3 Ideation Process</p>
            </div>
            <div className="section">
              <div className="video-wrapper">
                <ReactPlayer
                  className="video"
                  width="100%"
                  height="300px"
                  url="https://youtu.be/Eq-B2ueMrg4"
                  loop
                  controls
                />
              </div>
            </div>
          </div>

          <div className="section ">
            <h1 className="title"> Design Problem </h1>
            <p className="description">
              People live in rural areas always have the problem of switching
              between different map applications.
              <ul>
                <li>Local map is not friendly for walking users</li>
                <li>Google map doesn’t have the public transportation info</li>
              </ul>
            </p>
            <div className="singlewrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/HCIBootcamp/iconVis.png"
                className="WideImage"
                alt="iconVisUrl"
              ></img>
              <p className="Figurediscription">Figure4 Design Features</p>
            </div>
          </div>

          <div className="section ">
            <h1 className="title"> Storyboard </h1>
            <p className="description">
              Anna and Bob live in different areas of the city. They need to
              meet, they individually search 4 places, then compare. Bob has to
              copy and paste all the location he wants to go and sends to Anna
              one by one. Anna has to copy and paste each location to her local
              map to figure out which is the most convenient place for her to
              go.
            </p>
            <img
              src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/HCIBootcamp/Storyboard.png"
              style={{ width: "100%" }}
              className="WideImage"
              alt="StoryboardUrl"
            ></img>
          </div>

          <div className="section ">
            <h1 className="title"> User Profile </h1>
            <div className="singlewrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/HCIBootcamp/User_profile.png"
                className="WideImage"
                alt=" UserprofileUrl"
              ></img>
              <p className="Figurediscription">Figure5 User Profile</p>
            </div>
          </div>

          <div className="section ">
            <h1 className="title"> Video StoryBoard </h1>
            <p className="description">
              Our purpose of building a storyboard is to communicate the
              interaction process and guide the video prototype shooting.
              Because we focused on each interaction point and the logic can be
              complicated.
            </p>
            <div className="singlewrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/HCIBootcamp/storyBoard_1.png"
                className="WideImage"
                alt="Storyboard1Url"
              ></img>
            </div>
            <div className="video-wrapper">
              <ReactPlayer
                className="video"
                width="100%"
                height="300px"
                url="https://youtu.be/wMQS0a9nySw"
                loop
                controls
              />
            </div>
          </div>

          <div className="section ">
            <h1 className="title"> Iteration </h1>
            <p className="description">
              During the design iteration phase, we conducted a design
              walkthrough technique with our peer design groups and gain several
              insights.
              <ul>
                <li>Don't understand how to share the location exactly</li>
                <li>
                  Don't know how to recognize the difference between location
                  and routine information in the clipboard
                </li>
                <li>
                  The interaction of switching between different maps is unclear
                </li>
              </ul>
            </p>
            <div className="singlewrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/HCIBootcamp/DesignWalkthrough.png"
                className="WideImage"
                alt="DesignWalkthroughUrl"
              ></img>
              <p className="Figurediscription">
                Figure7 Design walkthrough scene
              </p>
            </div>
          </div>

          <div className="section ">
            <h1 className="title"> Improvement </h1>
            <div className="singlewrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/HCIBootcamp/Improvement.png"
                className="WideImage"
                alt="ImprovementUrl"
              ></img>
            </div>
          </div>

          <div className="section ">
            <h1 className="title">Final Output</h1>
            <div className="singlewrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/HCIBootcamp/WhiteboardStoryBoard.png"
                className="WideImage"
                alt="WhiteboardStoryBoardUrl"
              ></img>
            </div>
            <div className="video-wrapper">
              <ReactPlayer
                className="video"
                width="100%"
                height="300px"
                url="https://youtu.be/5iU9n5A0Pxk"
                loop
                controls
              />
            </div>
          </div>

          <div className="section ">
            <h1 className="title"> Self-reflection </h1>
            <p className="description">
              During this project, we were more likely focused on the ideation
              phase of the design process. Our task here is to generate a
              structured idea to communicate with other designers.
            </p>
            <p className="description">
              I learned a lot about prototyping techniques and how to cooperate
              with other designers. When there is disagreement in the team, we
              should get to do something and iterate the idea instead of
              arguing.
            </p>
            <div className="doublewrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/HCIBootcamp/Discussion_scene1.png"
                className="double"
                alt="Discussionscene1Url"
              ></img>
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/HCIBootcamp/Discussion_scene2.png"
                className="double"
                alt="Discussionscene2Url"
              ></img>
              <p className="Figurediscription">
                Figure9 Team discussion during the Bootcamp
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
