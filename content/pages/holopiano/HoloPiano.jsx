import React, { Component } from "react";
import ReactPlayer from "react-player";
import DesignconceptUrl from "../../../src/img/holopiano/Design concept.png";
import TeachingScenarioUrl from "../../../src/img/holopiano/teaching scenario 1.png";
import StoryboardUrl from "../../../src/img/holopiano/Storyboard 2.png";
import Prototype1Url from "../../../src/img/holopiano/1st gen.png";
import Prototype2Url from "../../../src/img/holopiano/2nd gen 1.png";
import UserTestingUrl from "../../../src/img/holopiano/UserTesting 1.png";
import UIUrl from "../../../src/img/holopiano/UI.png";
import SystemdiagramUrl from "../../../src/img/holopiano/System diagram 1.png";
import SectionSelectionUrl from "../../../src/img/holopiano/SectionSelection.gif";
import MenuUrl from "../../../src/img/holopiano/Menu.gif";
import "../../../src/ProjectStyle.css";

export default class HoloPiano extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="Home"></div>
        <div className="Content">
          <div className="section  ">
            <h1 className="title">—— Design Diagram ——</h1>
            <p className="description">
              Our goal is to build a Mixed-Reality application to enhance the
              piano learning experience, both remotely and collaboratively . By
              visualizing the correct hand movement and notes to be played in
              Hololens, users’ learning curve increases by multiple
              folds.Because our design is a multi-device collaborative concept,
              so it’s necessary to define an overall workload for our design
              concept. we believe this gives us a blueprint to communicate on
              what we need to do.
            </p>
            <div className="singlewrapper">
              <img
                src={DesignconceptUrl}
                className="WideImage"
                alt="Design Concept"
              ></img>
              <p className="Figurediscription">Figure1 Design Diagram</p>
            </div>

            <div className="singlewrapper">
              <img
                src={TeachingScenarioUrl}
                className="WideImage"
                alt="Teaching Scenario"
              ></img>
              <p className="Figurediscription">
                Figure2 Teaching scenario sketch
              </p>
            </div>
          </div>

          <div className="section ">
            <h1 className="title">—— Storyboard ——</h1>

            <img
              src={StoryboardUrl}
              style={{ width: "100%" }}
              className="WideImage"
              alt="StoryBoard"
            ></img>
          </div>

          <div className="section  ">
            <h1 className="title">—— Prototyping ——</h1>
            <p className="description">
              Prototyping for XR applications is different from prototyping for
              web or mobile applications. There is no standard way to build a
              digital prototype. We decided to use body storming methodology to
              create a scene. One thing that we found interesting is that we
              built a paper prototype of the HoloLens device. This is really
              helpful for us to consider about the Field of View (FOV)
              limitation of HoloLens. And during the second iteration, we added
              ipad to get a taste of how it feels to interact with the menu
              digitally.
            </p>
            <div className="doublewrapper">
              <img
                className="double"
                src={Prototype1Url}
                alt="Prototype1"
              ></img>
              <img
                className="double"
                src={Prototype2Url}
                alt="Prototype2"
              ></img>
              <p className="Figurediscriptiondouble">
                Figure3 1st Version Prototype&2nd Version Prototype
              </p>
            </div>
            <div className="video-wrapper">
              <ReactPlayer
                className="video"
                width="100%"
                url="https://youtu.be/s3ZppjPnhYs"
                loop
                controls
              />
            </div>
          </div>

          <div className="section  ">
            <h1 className="title">—— Technological discussion ——</h1>
            <p className="description">
              At first, we decided to use the Live stream and Leap motion to
              implement the teaching function. However we found out that Leap
              motion cannot detect trivial finger movement while playing piano,
              so we finally decided to use Video to demonstrate tutorial.
            </p>
            <p className="description">
              For exploring the technical possibility for musical bar dropping
              function, I built a simple demo for the music rhythm game-the
              rhythm turtel.
            </p>
            <div className="video-wrapper">
              <ReactPlayer
                className="video"
                width="100%"
                url="https://youtu.be/VM3EuinmWpU"
                controls
              />
            </div>
          </div>

          <div className="section  ">
            <h1 className="title">—— Final system Diagram ——</h1>
            <div className="singlewrapper">
              <img
                src={SystemdiagramUrl}
                className="WideImage"
                alt="System Diagram"
              ></img>
              <p className="Figurediscription">Figure4 Final system Diagram</p>
            </div>
          </div>

          <div className="section  ">
            <h1 className="title">—— UI Design ——</h1>
            <img src={UIUrl} className="WideImage" alt="UIUrl"></img>
          </div>

          <div className="section  ">
            <h1 className="title">—— User testing&iteration ——</h1>
            <p className="description">
              We are fortunate enough to get our design tested by others at the
              exhibition and get valuable feedbacks. Based on those feedbacks,
              we improved our project by adding more feedback.
            </p>
            <div className="singlewrapper">
              <img
                src={UserTestingUrl}
                className="WideImage"
                alt="User testing"
              ></img>
              <p className="Figurediscription">Figure5 User test</p>
            </div>
            <p className="description">
              <ul>
                <li>
                  Make sure that people who have never used HoloLens before go
                  through the gesture tutorial first
                </li>
                <li>
                  Add feedback when user presses the wrong key on the Keyboard
                </li>
                <li>
                  Add different color(ivory and ebony) to the virtual keyboard
                  for better mapping the real keyboard
                </li>
              </ul>
            </p>
          </div>

          <div className="section  ">
            <h1 className="title">—— Final Output ——</h1>

            <div className="singlewrapper">
              <img src={MenuUrl} className="WideImage" alt="Menu"></img>
              <p className="Figurediscription">Figure6 Menu Selection</p>
            </div>
            <div className="singlewrapper">
              <img
                src={SectionSelectionUrl}
                className="WideImage"
                alt="SectionSelection"
              ></img>
              <p className="Figurediscription">Figure7 Section Practise</p>
            </div>

            <div className="video-wrapper">
              <ReactPlayer
                className="video"
                width="100%"
                url="https://youtu.be/zolst44_GLU"
                loop
                controls
              />
            </div>
          </div>

          <div className="section  ">
            <h1 className="title"> —— Self-reflection ——</h1>
            <p className="description">
              This is a really unique experience designing for HoloLens. There
              is no standard progress or theory for design for MR application.
              We referred to the Microsoft HoloLens developer documentation a
              lot and also experience from VR development. We found out that
              playing with physical prototypes and body storming are especially
              useful to design the system at early phase.
            </p>
            <p className="description">
              Regarding the User testing, it’s good to have a tutorial about the
              gestures and visual cues inside the application. Also, in MR
              design,it’s also worth noticing the trade-off between perfect user
              experience and technical possibility.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
