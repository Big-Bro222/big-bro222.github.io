import React, { Component } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default class Test extends Component {
  render() {
    return (
      <div>
        This page is still under construction, stay tuned ...{" "}
        <a href="/">go back home</a>
        <Player
          autoplay
          loop
          src="https://assets9.lottiefiles.com/packages/lf20_10jxod3a.json"
          style={{ height: "30vw", width: "30vw" }}
          speed={0.5}
        >
        </Player>
      </div>
    );
  }
}
