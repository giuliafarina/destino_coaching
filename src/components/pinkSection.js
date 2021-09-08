import * as React from "react";
import * as styles from "../styles/pinkSection.module.css"

import nadiacup from "../images/nadiacup.jpeg";

const pinkSection = () => {
    return <>
        <div className={styles.container_section_pink}>

            <div className={styles.container_content_pink}>
                <div className={styles.content_pink}><h1 className={styles.title_pink}>Destino</h1>


                    <p>Since leaving headship, I have been coaching school leaders and providing <b>support to  schools that want to develop coaching approaches</b>.</p>
                    <br /><p> I also  work with <b>Achievement For All</b>, delivering their <b>Achieving Schools</b> and <b>Achieving Wellbeing</b> programmes, as well as <b>Ambition School Leadership and Inspiration Trust</b>, facilitating on their <b>NPQs</b>.</p><br />
                    <p> I wholeheartedly believe coaching approaches will retain teachers,
                        strengthen school leadership and serve our children and young people.</p><br />
                    <p>My ultimate goal is to influence educational policy through empowering school leaders and I would love you to help me achieve this.</p>


                </div>
            </div>

        </div>
    </>
}

export default pinkSection;