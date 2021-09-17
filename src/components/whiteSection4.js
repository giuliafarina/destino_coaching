import * as React from "react";
import * as styles from "../styles/whiteSection4.module.css"
import desk5 from "../images/desk5.jpg"


const WhiteSection4 = () => {
    return <>
        <div className={styles.container_section_white}>
            <div className={styles.container_image}>
                <img className={styles.desk5_image} src={desk5} />
            </div>
            <div className={styles.container_content_white}>
                <div className={styles.content_white}><h1 className={styles.title_white}>Destino Flagship Programmes for Schools</h1>

                    <em>Achieving Great Programme</em>
                    <p>Designed to support new or promising teachers, who need that extra bit of support to secure great teaching, every day.
                        Nadia works alongside the teacher as an instructional coach.</p><br />
                    <p> The package includes:
                        <ul><li>Three days direct work in school</li>
                            <li>Day meeting time with teacher and/or line manager</li>
                            <li> Written report and further recommendations</li></ul></p><br />
                    <p>We identify goals with the teacher and their line manager and then nadia observes,
                        team-teaches and uses role play and live feedback to coach the teacher through improving practice in the classroom.</p><br />

                    <p>Time can be allocated to planning and evaluation of impact in pupils’ work.</p><br />
                    <p>At the end of the school based work, we will provide a written report on what has been
                        covered, how the participant has improved and recommended next steps, including
                        research and reading suggestions.</p>

                    2.	Staff Wellbeing Programme
                    We work together to design and implement your unique staff wellbeing strategy.We start by collecting and analysing data and I then deliver training, coaching and leadership support to introduce and impact the strategy.At the end of the programme, schools have a clear approach to their staff wellbeing, a meaningful policy and an action plan to develop and embed the strategy.
                    3.	Coaching in Schools Programme
                    We work together to explore how coaching approaches can support your mission.Then we provide training, support and coaching to introduce and implement your unique coaching programme.This can include coaching for pupils, staff, leaders and parents.
                    4. Bespoke Training
                    Nadia is an experienced facilitator and provides training in leadership, curriculum, subject leadership, coaching and wellbeing.She also has extensive knowledge and experience of SEND.

                </div>
            </div>

        </div>
    </>
}

export default WhiteSection4;