import Card from "./card";
import React, { Component } from "react";
import Slider from "react-slick";


export default class Responsive extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }


                }]
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
                        <Card description="With you Nadia, I feel that everything is possible. 
                        There is certainly analysis on why such goals are set, but the secret weapon is making a plan, leaning onto action, making things real. 
                        I like to think of myself as a doer and you make me feel more and more like this, like it’s learning a new way to live, more direct, more brave, 
                        where what I want happens, because I dedicated time to create a good, compassionate, clever strategy, that is fuelled by my values and respects and strengthens how I am.
You make me feel like the best version of myself." caption="Virginia - UX Designer " />
                    </div>
                    <div>
                        <Card description="Working with Nadia is hugely rewarding -
                    she listens attentively and asks the questions that prompt you to think and reflect on ways to move forward.
                    Her warm and vibrant personality contributes to coaching sessions that 
                    I enjoy and look forward to. 
                    She has helped me over the past few years to find myself and be the best 
                    version of me that I can be." caption="Luigi - Buisness Operations Manager " />
                    </div>
                    <div>
                        <Card description="Nadia is a leader and coach of the highest integrity and skill. Her dynamism drive and ambition are defining features of her leadership and her compassion for others makes her skilful and affective coach. Choose energetic, positive and humble. I love working with Nadia highly recommend her work.
" caption="Liz Robinson, Co-Director, Big Education " />

                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}