import Card from "./card";
import React, { Component } from "react";
import Slider from "react-slick";
import virginia from "../images/Virginia.png";
import liz from "../images/Liz.png"
import benJ from "../images/benJ.png";
import benG from "../images/benG.png";
import luigi from "../images/luigi.png";
import stephanyH from "../images/stephanyH.png";


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
                        <Card description="Nadia is a leader and coach of the highest integrity and skill. Her dynamism drive and ambition are defining features of her leadership and her compassion for others makes her skilful and affective coach. Choose energetic, positive and humble. I love working with Nadia highly recommend her work.
" caption="Liz Robinson, Co-Director, Big Education " pic={liz} />

                    </div>
                    <div>
                        <Card description="I used Nadia to work with a teacher who had great potential but was not yet fulfilling this. Nadia quickly earnt the teacher's trust and they worked brilliantly together. Because of this trust and the excellent relationship they quickly developed Nadia was able to work in the teacher's classroom and team teach to show exactly what she was trying to get across. This proved very effective and far more useful than being sat down in an office.
The teacher Nadia has worked with has blossomed since working with Nadia and her confidence has grown. Most importantly of all, the quality of teaching and learning is even better.
I thoroughly recommend using Nadia to work with your teachers. " caption={"Ben Jeffery - Headteacher Westley Middle School"} pic={benJ} />

                    </div>
                    <div>
                        <Card description="Working with Nadia is hugely rewarding -
                    she listens attentively and asks the questions that prompt you to think and reflect on ways to move forward.
                    Her warm and vibrant personality contributes to coaching sessions that 
                    I enjoy and look forward to. 
                    She has helped me over the past few years to find myself and be the best 
                    version of me that I can be." caption="Stephany Hunter  - Headteacher" pic={stephanyH} />
                    </div>
                    <div>
                        <Card description="With you Nadia, I feel that everything is possible. 
                        There is certainly analysis on why such goals are set, but the secret weapon is making a plan, leaning onto action, making things real. 
                        I like to think of myself as a doer and you make me feel more and more like this, like it’s learning a new way to live, more direct, more brave, 
                        where what I want happens, because I dedicated time to create a good, compassionate, clever strategy, that is fuelled by my values and respects and strengthens how I am.
You make me feel like the best version of myself." caption="Virginia - UX Designer " pic={virginia} />
                    </div>
                    <div>
                        <Card description="There's a few ingredients in Nadia's secret sauce. 
                        She can look through my words and expressions and hit all the spots I did not think mattered. 
                        Her honesty and courage to say it as it is are hugely inspiring. 
                        The best ingredients are in her ways of working, which are focussed and objective-driven, 
                        looking at the real, practical ways of having an impact on well-trodden paths and habits. 
                        Our work is giving shape to the person I want to be and is guiding me through to being who I want to be. I wish I had we had met earlier!" caption="Luigi - Buisness Operations Manager " pic={luigi} />
                    </div>
                    <div>
                        <Card description="Nadia has a rare ability to listen well and to also cut quickly to the heart of an issue, saving time. I was surprised at how differently I saw the issues after coaching with her.  I honestly don't think I'd have got there alone, and most definitely not so fast.  Can't recommend highly enough."
                            caption="Kate Wilson - Head of Department  " />
                    </div>
                    <div>
                        <Card description="Nadia is an amazing life and leadership coach! She has completely changed my mindset and attitude toward what success looks like so that I have been able to rethink the pace at which I have been living my life. I now have a better work/life balance and am much happier since working with her. Her approach to coaching is kind and patient, yet always challenges me to go outside of my comfort zone. I can’t thank Nadia enough for empowering me to become a happier, more effective person in all areas of my life."
                            caption="Stephany McAuliffe – Assistant Principal " />
                    </div>
                    <div>
                        <Card description="Nadia’s skills as a coach empower you personally and professionally.
                         Under her leadership and coaching I gained immense confidence to undertake what would have previously been difficult challenges. 
                        Prepare to answer challenging and enlightening questions you didn’t realise were that important!"
                            caption="Ben Graham-Sharpe - Phase Leader" pic={benG} />
                    </div>
                </Slider>
            </div>
        );
    }
}