import * as React from "react";
import Layout from "../components/layout";
import coaching from "../images/coaching.jpg";
import coaching2 from "../images/coaching2.jpg";
import * as styles from "../styles/services.module.css";
import Card from "../components/card";





const Services = () => {
    return <Layout><h1 className={styles.title}>WHAT I DO</h1><div><img className={styles.coaching_img} src={coaching} /></div><div className={styles.description}>
        <p>
            I am a certified <b>life and leadership coach</b> and I work with clients in a few different ways.</p><br />
        <p>In all my coaching work, I challenge clients to stretch their capacity by asking for far more than they
            have done before.</p><br /><p> I use a <b>non-judgemental approach</b> while being open and honest about what I hear and see.</p><br /><p>
            <b>Coaching </b>is confidential, developmental, safe and provokes the client into action.
            I am a warm and sincere coach and take pride in making sure my clients feel their goal has been achieved through coaching.
            I keep in touch with clients between sessions and continually improve my
            coaching skills through my own ongoing professional development.</p></div>

        <div className="container_section_green">
            <h1>Coaching Services</h1>
            <div className={styles.description}><p>1. Leadership coaching
                Leadership coaching identifies leadership strengths and areas of improvement for an individual or a team. It focuses on developing  emotional intelligence and defining a future vision for oneself as a leader.
                2. Executive coaching
                Executive coaching is for leaders and improves  leadership abilities as well as the challenges associated with managing organisational change. This is ideal for Headteachers,, executive leaders and CEOs.
                3. Instructional coaching
                Instructional coaching focusses on Improving effectiveness and performance as an employee. I am very experienced in instructional coaching for teachers and school leaders and also offer a coaching programme for schools.
                4. Life coaching
                Life coaching supports the client to create a more fulfilled life; Identifying values, purpose, goals and dreams; Recognizing barriers; Taking action towards goal achievement.
            </p></div>
        </div>



        <div className={styles.testimonials_container}>
            <h1 className={styles.title}>What people say</h1><div className="container_section_pink" >
                <Card description="Working with Nadia is hugely rewarding -
                    she listens attentively and asks the questions that prompt you to think and reflect on ways to move forward.
                    Her warm and vibrant personality contributes to coaching sessions that 
                    I enjoy and look forward to. 
                    She has helped me over the past few years to find myself and be the best 
                    version of me that I can be." caption="Stephen Huxley"
                />
                <Card description="Working with Nadia is hugely rewarding -
                    she listens attentively and asks the questions that prompt you to think and reflect on ways to move forward.
                    Her warm and vibrant personality contributes to coaching sessions that 
                    I enjoy and look forward to. 
                    She has helped me over the past few years to find myself and be the best 
                    version of me that I can be." caption="Stephen Huxley"
                />
                <Card description="I love Nadia: She's the best." caption="Stephen Huxley"
                />
                <Card description="Working with Nadia is hugely rewarding -
                    she listens attentively and asks the questions that prompt you to think and reflect on ways to move forward.
                    Her warm and vibrant personality contributes to coaching sessions that 
                    I enjoy and look forward to. 
                    She has helped me over the past few years to find myself and be the best 
                    version of me that I can be." caption="Stephen Huxley"
                />
            </div>
        </div>


    </Layout>


}

export default Services;