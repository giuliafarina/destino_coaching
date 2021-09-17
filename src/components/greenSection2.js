import * as React from "react";
import * as styles from "../styles/greenSection2.module.css"


import desk6 from "../images/desk6.jpg"
import desk7 from "../images/desk7.jpg"

const greenSection2 = () => {
    return <>
        <div className={styles.wrapper_section_green}>
            <div className={styles.container_section_green}>
                <div className={styles.container_image}>


                    <img className={styles.desk6_image} src={desk6} />

                    <img className={styles.desk7_image} src={desk7} />

                </div>

                <div className={styles.container_content_green}>
                    <div className={styles.content_green}>
                        <h1 className={styles.title_green}>Staff Wellbeing Programme</h1>
                        <p>We work together to design and implement your unique staff wellbeing strategy.</p><br />
                        <p>We start by collecting and analysing data and I then deliver training,
                            coaching and leadership support to introduce and impact the strategy.</p><br />
                        <p>At the end of the programme, schools have a clear approach to their staff wellbeing,
                            a meaningful policy and an action plan to develop and embed the strategy.</p><br />
                        <h1 className={styles.title_green}>Coaching in Schools Programme</h1>
                        <p>We work together to explore how coaching approaches can support your mission.</p><br />
                        <p>Then we provide training, support and coaching to introduce and implement your unique coaching programme.</p><br />
                        <p>This can include coaching for pupils, staff, leaders and parents.</p><br />
                        <h1 className={styles.title_green}>Bespoke Training</h1>
                        <p>Nadia is an experienced facilitator and provides training
                            in leadership, curriculum, subject leadership, coaching and wellbeing.</p><br />
                        <p>She also has extensive knowledge and experience of SEND. </p>
                    </div>
                </div>
            </div>
            <p className={styles.last_line}>In your initial consultation I will help you assess the type of coaching would best suit your needs.</p>
        </div>
    </>
}

export default greenSection2;