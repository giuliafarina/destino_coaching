import * as React from "react";
import Layout from "../components/layout";
import nadia from "../images/nadia.jpg";
import * as styles from '../styles/about.module.css';

const About = () => {
    return <Layout>
        <div>
            <h1 className={styles.title}>The DESTINO story</h1>
            <img className={styles.about_img} src={nadia}></img>

            <div className={styles.description}>
                <p className={styles.greeting}>Hi, I am <b>Nadia</b>,
                    and I am the face behind <b>Destino Coaching.</b>
                </p>
                <br />
                <h1 className={styles.title}>About me</h1>
                <p> I grew up in London with my Mum and brother
                    and moved to East Anglia to take up Headship in 2015.
                </p>
                <br />
                <p>I now love life in the countryside and live here with my partner and two children
                    who are very annoying but also bring me great joy!
                </p>
                <br />
                <p>When I am not working, I enjoy walking, cycling (gently on a granny bike)
                    and I have always found comfort in fabric and crafts (currently it’s crochet).
                </p>
                <br />
            </div>

            <div className={`${styles.description} ${styles.container_pink}`}>
                <h1 className={styles.title}>About me</h1>
                <p>I worked in London schools for 15 years before moving East.</p>
                <p>The school I moved here to lead, was recognised as being in the bottom 2% of schools for academic performance when I arrived,
                    and the challenged that faced me, was greater than I ever imagined.</p>
                <br />
                <p>I realised quite quickly that the only way to lead in such circumstances was to be <b>the best person I possibly could be</b>, so I embarked on a <b>counselling training course</b> and started my journey to becoming a  coach.</p>
                <br />
                <h3><b>Coaching became a way of being in my school.</b></h3>
            </div>

            <div className={`${styles.description} ${styles.container_green}`}>
                <p>Since leaving headship, I have been coaching school leaders and providing <b>support to  schools that want to develop coaching approaches</b>.</p>
                <br /><p> I also  work with <b>Achievement For All</b>, delivering their <b>Achieving Schools</b> and <b>Achieving Wellbeing</b> programmes, as well as <b>Ambition School Leadership and Inspiration Trust</b>, facilitating on their <b>NPQs</b>.</p><br />
                <p> I wholeheartedly believe coaching approaches will retain teachers,
                    strengthen school leadership and serve our children and young people.</p><br />
                <p>My ultimate goal is to influence educational policy through empowering school leaders and I would love you to help me achieve this.</p>
            </div>
        </div>
    </Layout>
}

export default About;