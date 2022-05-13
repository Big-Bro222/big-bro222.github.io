import React, { Component } from 'react'
import "../../../../src/ProjectStyle.css";
import GamePostertUrl from '../../../../src/img/DesignPractise/GamePoster.png'
import BannerUrl from '../../../../src/img/DesignPractise/Banner.png'
import PosterDesignUrl from '../../../../src/img/DesignPractise/Poster Design.png'
import RadioUrl from '../../../../src/img/DesignPractise/Radio.png'
import ThreeDmodelUrl from '../../../../src/img/DesignPractise/3D modeling.png'



export default class DesignPractice extends Component {
    render() {
        return (
            <div>
                <div id="Home"></div>
                <div className="DesignBackground">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img src={GamePostertUrl} className="designimage" alt='GamePostertUrl'></img>
                    <img src={RadioUrl} className="designimage" alt='RadioUrl'></img>
                    <img src={ThreeDmodelUrl} className="designimage" alt='ThreeDmodelUrl'></img>
                    <img src={BannerUrl} className="designimage" alt='BannerUrl'></img>
                    <img src={PosterDesignUrl} className="designimage" alt='PosterDesignUrl'></img>
                </div>
            </div>
        )
    }
}
