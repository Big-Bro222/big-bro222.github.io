import React, { Component } from "react";
import TypeAnim from "./TypeAnim.jsx";
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
        test = "Good evening !";
        break;
      // If score is 80 or greater
      case hours >= 13:
        test = "Good afternoon !";
        break;
      // If score is 70 or greater
      case hours >= 11:
        test = "Hi !";
        break;
      // If score is 60 or greater
      case hours >= 6:
        test = "Good morning !";
        break;
      // Anything 59 or below is failing
      default:
        test = "Hi !";
    }

    var time = true;

    if (time) {
      return (
        <div>
          <div>{test}</div>
          <div>I'm Qi. Welcome to my blog.</div>
          <TypeAnim/>
        </div>
      );
    } else {
      return <div>LandingPage False</div>;
    }
  }
}

export default LandingPage;
