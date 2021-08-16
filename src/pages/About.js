import * as React from "react";
import Layout from "../components/layout";
import about from "../images/about.jpg";
import * as styles from '../styles/about.module.css';

const About = () => {
    return <Layout>
        <div className="about" ><h1>About Me</h1>
            <img className={styles.about_img} src={about}></img>
            <p>Hi, I am Nadia. I grew up in London with my Mum and brother and moved to East Anglia to take up Headship in 2015. I now love life in the countryside and live here with my partner and two children
                who are very annoying but also bring me great joy!</p>
            <p>I worked in London schools for 15 years before moving East. The school I moved here to lead, was recognised as being in the bottom 2% of schools for academic performance when I arrived, and the challenged that faced me, was greater than I ever imagined. I realised quite quickly that the only way to lead in such circumstances was to be the best person I possibly could be, so I embarked on a counselling training course and started my journey to becoming a  coach.
                Coaching became a way of being in my school.</p>
            <p>My deputy had this to say:
                Working with Nadia is hugely rewarding - she listens attentively and asks the questions that prompt you to think and reflect on ways to move forward. Her warm and vibrant personality contributes to coaching sessions that I enjoy and look forward to. She has helped me over the past few years to find myself and be the best version of me that I can be.
                (Stephany hunter, Headteavher Barningham Primary School Suffolk).</p>
            <p>Since leaving headship, I have been coaching school leaders and providing support to  schools that want to develop coaching approaches. I also  work with Achievement For All, delivering their Achieving Schools and Achieving Wellbeing programmes, as well as Ambition School Leadership and Inspiration Trust, facilitating on their NPQs. I wholeheartedly believe coaching approaches will retain teachers,
                strengthen school leadership and serve our children and young people.</p>
            <p>When I am not working, I enjoy walking, cycling (gently on a granny bike) and I have always found comfort in fabric and crafts (currently it’s crochet).</p><p>My ultimate goal is to influence educational policy through empowering school leaders and I would love you to help me achieve this.</p>
        </div>
    </Layout>
}

export default About;