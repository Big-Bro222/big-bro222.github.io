import React, { Component } from "react";
import ReactPlayer from "react-player";
import "../../ProjectStyle.css";


export default class MRVis extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="Home"></div>
        <div className="Content">
          <div className="section">
            <h1 className="title">Project Demo</h1>
            <p className="description">
              This project is a research project I participate in while I was
              the HCI research assistant at Inria(Institut national de recherche
              en sciences et technologies du numérique) The primary goal is to
              identify challenges in placing and understanding information in
              immersive visual analytics, in particular combining AR with
              external displays. Also, this project provides a solution for
              conducting remote study using HoloLens.
            </p>
            <div className="video-wrapper">
              <ReactPlayer
                className="video"
                width="100%"
                url="https://youtu.be/5i0EqaLv56Q"
                controls
              />
            </div>
          </div>

          <div className="section  ">
            <h1 className="title">Design Space</h1>
            <p className="description">
              A Design Space intends to collect existing designs for a certain
              topic, challenge or context. It is an approach to represent design
              rationale. Inside that space exist design axes, which are used to
              position a potential design based on its characteristics. We first
              built eight different MR Visaulizations to explore the benefits
              and drawbacks of combining MR with Digital display. To Check more
              information about this, you can have a look at my blog:
              <a href="/blog/masterthesis/1">
                <text className="link">
                  Design Space initial implementation(Master Thesis Part1)
                </text>
              </a>
            </p>
            <div className="singlewrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/MRVis/Visualization_ShowCase.jpg"
                className="WideImage"
                alt="Design Concept"
              ></img>
              <p className="Figurediscription">
                Figure1 Visualization Design Space illustration
              </p>
            </div>

            <div className="video-wrapper">
              <ReactPlayer
                className="video"
                width="100%"
                url="https://youtu.be/aQQepF0rnM8"
                controls
              />
            </div>
            <p></p>
            <p className="description">
              The end goal of this exploration was to come up with the eleven
              design dimensions. We have grouped our designs and previous
              research work based on these dimensions. So our design space can
              act as both an organization tool for work that combines AR and
              monitors, but also as a way to identify possible opportunities for
              design.
            </p>
            <div className="singlewrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/MRVis/DesignSpaceSheet.png"
                className="WideImage"
                alt="Design Space"
              ></img>
              <p className="Figurediscription">Figure2 Design Space sheet</p>
            </div>
          </div>

          <div className="section  ">
            <h1 className="title">Remote User Test setup</h1>
            <p className="description">
              For the purpose of remote study, we built a remote usability lab
              called Virtual room. Based on Photon Network package, the Virtual
              room has the following functions:
              <ul>
                <li>Observe user behavior in Virtual room</li>
                <li>Access to user interaction event</li>
                <li>Log and replay user behavior</li>
              </ul>
              For more detail of the development of Virtual room:
              <a href="/blog/masterthesis/2">
                <text className="link">
                  Remote User testing Setup(Master Thesis Part2)
                </text>
              </a>
            </p>
            <div className="doublewrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/MRVis/FirstPersonView.gif"
                className="double"
                alt="First Person View"
              ></img>
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/MRVis/ThirdPersonView.gif"
                className="double"
                alt="Third Person View"
              ></img>
              <p className="Figurediscription">
                Figure3 First Person View and Third Person View screen shot
              </p>
            </div>

            <div className="video-wrapper">
              <ReactPlayer
                className="video"
                width="100%"
                url="https://youtu.be/poiR4EaJY9s"
                controls
              />
            </div>
          </div>

          <div className="section">
            <h1 className="title">Resize and Interact with Mouse</h1>
            <p className="description">
              After decided to shift from wall-size display to a desktop
              display, we tried to shrink the size of the whole visualization.
              This increases the difficulty of interaction. For example, the
              button will become too small to interact with and sitting scenario
              makes it much more difficult to move an object in a long distance.
              <br />
              <br />
              To address these problems, we built a mouse interaction system
              which sends mouse event to HoloLens through network and enable
              useing mouse interaction and hand interaction at the same time.
              please read my blog for more details of the design and
              implementation:
              <a href="/blog/masterthesis/3">
                <text className="link">
                  Resize and Interact with Mouse(Master Thesis Part3)
                </text>
              </a>
            </p>
            <div className="video-wrapper">
              <ReactPlayer
                className="video"
                width="100%"
                url="https://youtu.be/Y0IpzQqa0Yk"
                controls
              />
            </div>
          </div>

          <div className="section">
            <h1 className="title">Map User Case study</h1>
            <p className="description">
              Based on the exploration, we built a Focus+ context scenario.The
              basic idea with Focus+Context visualizations is to enable viewers
              to see the object of primary interest presented in full detail
              while at the same time getting a overview–impression of all the
              surrounding information — or context — available.
              <br></br>
              Focus+context systems therefore allow to have the information of
              interest in the foreground and all the remaining information in
              the background simultaneously visible — Seeing the trees without
              missing the forest.
            </p>
            <div className="doublewrapper">
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/MRVis/AR.png"
                className="double"
                alt="AR"
              ></img>
              <img
                src="https://cdn.jsdelivr.net/gh/Big-Bro222/StaticFileServer/big-bro222.github.io/projects/MRVis/Monitor.png"
                className="double"
                alt="Monitor"
              ></img>
              <p className="Figurediscription">
                Figure4 The main 2D Map visualization is shown on monitor and
                extend into AR area{" "}
              </p>
            </div>

            <div className="video-wrapper">
              <ReactPlayer
                className="video"
                width="100%"
                url="https://youtu.be/AqQr7v09k7U"
                controls
                playing={true}
                loop={true}
                muted
              />
            </div>

            <p className="description">
              This is a show case of all the practical part. To understand more
              detail of this work, please read my report
              <br></br>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
