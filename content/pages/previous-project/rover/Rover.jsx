import React, { Component } from 'react'
import "../../../../src/ProjectStyle.css";
import Portfolio_01 from '../../../../src/img/Rover/Portfolio_01.png'
import Portfolio_02 from '../../../../src/img/Rover/Portfolio_02.png'
import Portfolio_03 from '../../../../src/img/Rover/Portfolio_03.png'
import Portfolio_04 from '../../../../src/img/Rover/Portfolio_04.png'
import Portfolio_05 from '../../../../src/img/Rover/Portfolio_05.png'
import Portfolio_06 from '../../../../src/img/Rover/Portfolio_06.png'
import Portfolio_07 from '../../../../src/img/Rover/Portfolio_07.png'
import Portfolio_08 from '../../../../src/img/Rover/Portfolio_08.png'
import Portfolio_09 from '../../../../src/img/Rover/Portfolio_09.png'
import VideoUrl from '../../../../src/img/Rover/Video.png'
import ScrollSceneUrl from '../../../../src/img/Rover/ScrollScene.gif'
import collaborativeUrl from '../../../../src/img/Rover/collaborative.gif'




export default class Rover extends Component {



    render() {


        return (

            <div>
                 <div id="Home">
                 </div>
                <img src={Portfolio_01} className="UIWideImage" alt="Portfolio_01"></img>
                <img src={Portfolio_02} className="UIWideImage"alt="Portfolio_02"></img>
                <img src={Portfolio_03} className="UIWideImage"alt="Portfolio_03"></img>
                <div className="absolute">
                   <img src={Portfolio_04} className="UIWideImage"alt="Portfolio_04"></img>
                   <div id="imagevideo">                   
                       <a href="https://youtu.be/4GpSNYoW7hM" target="blank">
                           <img src={VideoUrl} className="UIWideImage"alt="VideoUrl"></img>
                           </a>
                   </div>
                </div>
                <img src={Portfolio_05} className="UIWideImage"alt="Portfolio_05"></img>
                <div className="absolute">
                   <img src={Portfolio_06} className="UIWideImage"alt="Portfolio_06"></img>
                   <div id="imagescroll">                   
                       <img src={ScrollSceneUrl} className="UIWideImage"alt="ScrollSceneUrl"></img>
                   </div>
                </div>
                <img src={Portfolio_07} className="UIWideImage"alt="Portfolio_07"></img>
                <div className="absolute">
                   <img src={Portfolio_08} className="UIWideImage"alt="Portfolio_08"></img>
                   <div id="imagescollab">                   
                       <img src={collaborativeUrl} className="UIWideImage"alt="collaborativeUrl"></img>
                   </div>
                </div>
                <img src={Portfolio_09} className="UIWideImage"alt="Portfolio_09"></img>
            </div>
        )
    }
}
