import React, { Component } from "react";
import TypeAnimation from "react-type-animation";
export default class TypeAnim extends Component {
  render() {
    return (
      <b>
        I am{" "}
        <TypeAnimation
          cursor={true}
          sequence={[
            "a Unity Developer",
            3000,
            "a UX Engineer",
            3000,
            "an XR Enthusiast",
            3000,
            "a Traveller",
          ]}
          wrapper="text"
          repeat={Infinity}
        />
      </b>
    );
  }
}
