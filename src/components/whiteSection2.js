import * as React from "react";
import * as styles from "../styles/whiteSection2.module.css"


import nadia_daughter from "../images/nadia_daughter.jpg";
import crochet2 from "../images/crochet2.jpg";
import beach1 from "../images/beach1.jpg";

const WhiteSection2 = () => {
    return <>
        <div className={styles.container_section_white}>
            <div className={styles.container_image}>
                <img className={styles.nadia_daughter_image} src={nadia_daughter} alt="" />  </div>
            <div className={styles.container_image2}>
                <img className={styles.crochet2_image} src={crochet2} alt="" />
                <img className={styles.beach1_image} src={beach1} alt="" />  </div>

            <div className={styles.container_content_white}>
                <div className={styles.content_white}>

                    <p>Since leaving headship, I have been coaching school leaders and providing support to  schools that want to develop coaching approaches.</p><br />
                    <p>I also  work with <em>Achievement For All</em>, delivering their <em>Achieving Schools</em> and <em>Achieving Wellbeing</em> programmes, as well as <em>Ambition School Leadership</em>  and <em>Inspiration Trust</em>, facilitating on their NPQs.</p><br />
                    <p>I wholeheartedly believe coaching approaches will retain teachers, strengthen school leadership and serve our children and young people.</p><br />
                    <p>When I am not working, I enjoy walking, cycling (gently) and I have always found comfort in fabric and crafts (currently it’s crochet).
                    </p>
                </div>
            </div>

        </div>
    </>
}

export default WhiteSection2;