import * as React from "react";
import * as styles from "../styles/greenSection.module.css"


import desk3 from "../images/desk3.jpg"
import desk4 from "../images/desk4.jpg"

const greenSection = () => {
    return <>
        <div className={styles.wrapper_section_green}>
            <div className={styles.container_section_green}>
                <div className={styles.container_image}>


                    <img className={styles.desk3_image} src={desk3} />

                    <img className={styles.desk4_image} src={desk4} />

                </div>

                <div className={styles.container_content_green}>
                    <div className={styles.content_green}><h1 className={styles.title_green}>Types of coaching I offer</h1>
                        <h2>Leadership coaching</h2><br />
                        <p className={styles.description}>Leadership coaching identifies leadership strengths and areas of improvement for an individual or a team.
                            It focuses on developing  emotional intelligence and defining a future vision for oneself as a leader.</p><br />
                        <h2>Executive coaching</h2><br />
                        <p className={styles.description}>Executive coaching is for leaders and improves  leadership abilities as well as the challenges associated with managing organisational change.
                            This is ideal for Headteachers, executive leaders and CEOs.</p><br />
                        <h2>Instructional coaching </h2><br />
                        <p className={styles.description}>Instructional coaching focusses on Improving effectiveness and performance as an employee.
                            I am very experienced in instructional coaching for teachers and school leaders and also offer a Coaching Programme for Schools.</p><br />
                        <h2>Life coaching </h2><br />
                        <p className={styles.description}>Life coaching supports the client to create a more fulfilled life;
                            Identifying values, purpose, goals and dreams; Recognizing barriers;
                            Taking action towards goal achievement.</p><br />

                    </div>

                </div>



            </div>
            <p className={styles.last_line}>In your initial consultation I will help you assess the type of coaching would best suit your needs.</p>
        </div>
    </>
}

export default greenSection;