import * as React from "react";
import * as styles from "../styles/greenSection2.module.css"


import desk6 from "../images/desk6.jpg"
import desk7 from "../images/desk7.jpg"

const greenSection2 = () => {
    return <>
        <div className={styles.wrapper_section_green}>
            <div className={styles.container_section_green}>
                <div className={styles.container_image}>
                    <img className={styles.desk6_image} src={desk6} alt="" />
                    <img className={styles.desk7_image} src={desk7} alt="" />
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
                        <p>I am an experienced facilitator and provide training
                            in leadership, curriculum, subject leadership, coaching and wellbeing.</p><br />
                        <p>I also have extensive knowledge and experience of SEND. </p><br />
                        <h2 className={styles.contact}>Contact</h2><br />
                        <p>To find out more, please contact me to arrange a consultation call.</p><br />

                        <p><b>If you are interested in coaching</b> for yourself or for a member of your team,
                            in the consultation call we will discuss your requirements and what type of coaching would best suit you.
                            Coaching sessions can take place virtually or in my practice in Norfolk or in school, if that works.</p><br />
                        <p> <b>If you are interested in <em>Destino Services for Schools</em></b>,
                            in the consultation call we will discuss your organisation’s needs and if one of the Destino Flagship programmes suit would you.
                            We may decide to combine elements of each programme.
                            After the consultation, you will receive a Proposal of Services for your consideration, with costings. </p><br />
                    </div>
                </div>

            </div>
            <p className={styles.last_line}>In your initial consultation I will help you assess the type of coaching that would best suit your needs.</p>
        </div>
    </>
}

export default greenSection2;