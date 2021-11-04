import * as React from "react";
import * as styles from "../styles/whiteSection4.module.css"
import desk5 from "../images/desk5.jpg"
import achieving from "../documents/achieving.pdf";




const WhiteSection4 = () => {
    return <>
        <div className={styles.container_section_white}>
            <div className={styles.container_image}>
                <img className={styles.desk5_image} src={desk5} alt="" />
                <span className={styles.span_pink}>
                    <p><em><a href={achieving} download><b>Download</b></a> a case study of how I supported Westley Middle School through Achieving Great</em></p></span>
            </div>
            <div className={styles.container_content_white}>
                <div className={styles.content_white}><h1 className={styles.title_white_big}>Destino Flagship Programmes for Schools</h1>

                    <h1 className={styles.title_white}><b>Achieving Great Programme</b></h1>
                    <p>Designed to support new or promising teachers, who need that extra bit of support to secure great teaching, every day.
                        Nadia works alongside the teacher as an instructional coach.
                    </p>
                    <br />
                    <p>The package includes:</p>
                    <ul>
                        <li>Three days direct work in school</li>
                        <li>Day meeting time with teacher and/or line manager</li>
                        <li> Written report and further recommendations</li>
                    </ul>
                    <br />
                    <p>We identify goals with the teacher and their line manager and then nadia observes,
                        team-teaches and uses role play and live feedback to coach the teacher through improving practice in the classroom.</p><br />

                    <p>Time can be allocated to planning and evaluation of impact in pupils’ work.</p><br />
                    <p>At the end of the school based work, we will provide a written report on what has been
                        covered, how the participant has improved and recommended next steps, including
                        research and reading suggestions.</p>



                </div>
            </div>

        </div>
    </>
}

export default WhiteSection4;