import * as React from "react";
import * as styles from "../styles/whiteSection.module.css"

import crochet1 from "../images/crochet1.jpg";

const WhiteSection = () => {
    return <>
        <div className={styles.container_section_white}>
            <div className={styles.container_image}>
                <img className={styles.crochet1_image} src={crochet1} />
            </div>
            <div className={styles.container_content_white}>
                <div className={styles.content_white}><h1 className={styles.title_white}>Hi, I'm Nadia</h1><br />

                    <p>Hi, I'm Nadia, founding director of <b>Destino Coaching</b>.</p><br />
                    <p>I grew up in London with my Mum and brother and moved to East Anglia to take up Headship in 2015.
                        I now love life in the countryside and live here with my partner and two teenage children.</p><br />
                    <p>I worked in London schools for 15 years before moving East. The school I moved here to lead, was recognised as being in the bottom 2% of schools for academic performance when I arrived,
                        and the challenged that faced me, was greater than I ever imagined.</p>
                    <br />
                    <p>I realised quite quickly that the only way to lead in such circumstances was to be <b>the best person I possibly could be</b>, so I embarked on a <b>counselling training course</b> and started my journey to becoming a  coach.

                        Coaching became a way of being in my school.</p>
                </div>
            </div>

        </div>
    </>
}

export default WhiteSection;