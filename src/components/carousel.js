import Card from "./card";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>

                <Slider {...settings}>
                    <div>
                        <Card description="Working with Nadia is hugely rewarding -
                    she listens attentively and asks the questions that prompt you to think and reflect on ways to move forward.
                    Her warm and vibrant personality contributes to coaching sessions that 
                    I enjoy and look forward to. 
                    She has helped me over the past few years to find myself and be the best 
                    version of me that I can be." caption="Stephany Hunter  - leadership coaching " />


                    </div>
                    <div>
                        <Card description="Johnny be good" caption="Stephany Hunter  - leadership coaching " />
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}