import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./AboutMePage.css";

export default class SelfIntroPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="aboutme">
        Hi! I am Qi. As an XR enthusiastic, I participants in HoloPiano, a AR
        prototype system for enhance piano learning experience. During my
        internship, I focused on combining AR with monitor for improving data
        analysis. I also explored possiblity for combining HoloLens with Leap
        motion. Being an UX Designer, I always focus the experience of whole
        process and details, taking a holistic approach of understanding people,
        relationships and values. I have a solid background in Human-centered
        design skills. I had traditional UX project as Lifinger, a in-City
        delivery application. Also I learn how to collaborate with other
        designers and generate new ideas and iterate through various design
        techniques during the HCIBootcamp. As a Unity game developer, I
        developed several mini games and Now I am working with a talented
        designer for a Indie game "Natal". Trained as an multi-displine
        designer, my background equipped me with design thinking mindset and
        technical skills to understand and collaborate with team members.
      </div>
    );
  }
}
