
import React, { Component } from 'react'

export class LandingPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  render() {
    var time=true;
    if(time){
        return (
            <div>LandingPage</div>
          )
    }else{
        return(
            <div>LandingPage False</div>
        )
    }

  }
}

export default LandingPage

