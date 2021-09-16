import * as React from "react";
import Layout from "../components/layout";
import coaching from "../images/coaching.jpg";
import coaching2 from "../images/coaching2.jpg";
import * as styles from "../styles/services.module.css";
import Card from "../components/card";
import WhiteSection3 from "../components/whiteSection3";





const Services = () => {
    return <Layout>
        <WhiteSection3 />


        <div className="container_section_green">


            <h1 className={styles.title2}>COACHING SERVICES</h1>
            <div className={styles.description_section_green}>
                <h3 className={styles.title3}>Leadership coaching</h3>
                <p>Leadership coaching identifies leadership strengths and areas of improvement for an individual or a team.
                    It focuses on developing  emotional intelligence and defining a future vision for oneself as a leader.</p>
                <h3 className={styles.title3}>Executive coaching</h3>
                <p>Executive coaching is for leaders and improves  leadership abilities as well as the challenges associated with managing organisational change. This is ideal for Headteachers,, executive leaders and CEOs.</p>
                <h3 className={styles.title3}>Instructional coaching </h3>
                <p>Instructional coaching focusses on Improving effectiveness and performance as an employee.
                    I am very experienced in instructional coaching for teachers and school leaders and also offer a Coaching Programme for Schools.</p>
                <h3 className={styles.title3}>Life coaching </h3>
                <p>Life coaching supports the client to create a more fulfilled life;
                    Identifying values, purpose, goals and dreams; Recognizing barriers;
                    Taking action towards goal achievement.</p>

            </div>
        </div>



    </Layout >


}

export default Services;