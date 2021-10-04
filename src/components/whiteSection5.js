import * as React from "react";
import * as styles from "../styles/whiteSection5.module.css"
import crochet3 from "../images/crochet3.jpeg"





const WhiteSection5 = () => {
    return <>
        <div className={styles.container_section_white}>
            <div className={styles.container_image}>
                <img className={styles.crochet3_image} src={crochet3} alt="" />

            </div>
            <div className={styles.container_content_white}>
                <div className={styles.content_white}>
                    <h1 className={styles.title_white}>Book your Consultation Call</h1><br />
                    <p>
                        If you are interested in coaching for yourself or for a member of your team,
                        in the consultation call we will discuss your requirements and what type of coaching would best suit you.</p><br />
                    <p>Coaching sessions can take place virtually or in my practice in Norfolk or in school, if that works.

                    </p>





                </div>
            </div>

        </div>
    </>
}

export default WhiteSection5;