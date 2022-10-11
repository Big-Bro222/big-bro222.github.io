import React, { Component } from "react";
import "./AboutMePage.css";

export default class SelfIntroPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="aboutme">
        <h2>你好！ Hi！</h2>
        <p>
          I'm Ze Qi. Currently working as a Unity developer（R&D）at {" "}
          <a href="http://pinefield.cn/"  target="_blank"><text className="link">PineField.Inc</text></a> @Beijing ,China.
        </p>{" "}
        <p>
          I am an enthusiastic Unity developer passionate about XR and HCI. As a
          developer and interaction designer, it is always stimulating for me
          to:
          <ul>
            <li>Design and create awesome visual elements with Unity.</li>
            <li>
              Make the interaction more immersive, enhance the relationship
              between humans and technology, and evaluate them quantitatively.
            </li>
            <li>
              Handle communication between Native OS and Unity, and plugin external libraries.
            </li>
            <li>
              Explore novel interaction mediums to deliver
              different experiences in VR and AR.
            </li>
            <li>
              Combine research theories to development practice and follow
              new technology trends.
            </li>
          </ul>
        </p>
        <p>
          As a person, I am:
          <ul>
            <li>Always curious about the world</li>
            <li>
              {" "}
              A traveler who has been to over 20 countries and stayed in three
              countries for at least one years.
            </li>
            <li>A quick learner, with a problem-oriented approach</li>
          </ul>
          I am currently learning IOS development in Swift and Machine learning
          basics 
          <br></br>
          Contact info: <text className="link">Ze.qi@outlook.com</text>
        </p>
      </div>
    );
  }
}
