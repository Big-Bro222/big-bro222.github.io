import React, { Component } from "react";
import TypeAnim from "./TypeAnim.jsx";
import "./LandingPage.css";
import VideoBackground from './VideoProject.mp4'

export class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const hours = new Date().getHours();
    var test;
    switch (true) {
      // If score is 90 or greater
      case hours >= 18:
        test = "Good evening ! 晚上好 ！";
        break;
      // If score is 80 or greater
      case hours >= 13:
        test = "Good afternoon ! 下午好 ！";
        break;
      // If score is 70 or greater
      case hours >= 11:
        test = "Hi ! 你好 ！";
        break;
      // If score is 60 or greater
      case hours >= 6:
        test = "Good morning ! 早上好 ！";
        break;
      // Anything 59 or below is failing
      default:
        test = "Hi ! 你好！";
    }

    return (
      <div className ="wrapper">
        <div id="description">
          <div className="p">{test}</div>
          <div className="p">I'm Qi. Welcome to my blog.</div>
          <TypeAnim />
        </div>
        <video className="videobackground" autoPlay loop muted>
          <source src={VideoBackground} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default LandingPage;
