import * as React from "react";
import Layout from "../components/layout";
import coaching from "../images/coaching.jpg";
import coaching2 from "../images/coaching2.jpg";
import * as styles from "../styles/services.module.css";
import Card from "../components/card";





const Services = () => {
    return <Layout><h1 className={styles.title}>WHAT I DO</h1>
        <div><img className={styles.coaching_img} src={coaching} /></div>
        <div className={styles.description}>
            <p>
                I am a certified <b>life and leadership coach</b> and I work with clients in a few different ways.</p><br />
            <p>In all my coaching work, I challenge clients to stretch their capacity by asking for far more than they
                have done before.</p><br /><p> I use a <b>non-judgemental approach</b> while being open and honest about what I hear and see.</p><br /><p>
                <b>Coaching </b>is confidential, developmental, safe and provokes the client into action.
                I am a warm and sincere coach and take pride in making sure my clients feel their goal has been achieved through coaching.
                I keep in touch with clients between sessions and continually improve my
                coaching skills through my own ongoing professional development.</p>
        </div>

        <div className="container_section_green">

            <div className={styles.description_section_green}>   <h1 className={styles.title}>Coaching Services</h1><p><h3>Leadership coaching</h3>
                <p>Leadership coaching identifies leadership strengths and areas of improvement for an individual or a team. It focuses on developing  emotional intelligence and defining a future vision for oneself as a leader.</p>
                <h3>Executive coaching</h3>
                Executive coaching is for leaders and improves  leadership abilities as well as the challenges associated with managing organisational change. This is ideal for Headteachers,, executive leaders and CEOs.
                3. Instructional coaching
                Instructional coaching focusses on Improving effectiveness and performance as an employee. I am very experienced in instructional coaching for teachers and school leaders and also offer a coaching programme for schools.
                4. Life coaching
                Life coaching supports the client to create a more fulfilled life;
                Identifying values, purpose, goals and dreams; Recognizing barriers;
                Taking action towards goal achievement.</p>

            </div>
        </div>



        <div className={styles.testimonials_container}><h1 className={styles.title}>Some people say</h1>

            <div className={styles.row}>
                <div className={styles.column}><Card description="Working with Nadia is hugely rewarding -
                    she listens attentively and asks the questions that prompt you to think and reflect on ways to move forward.
                    Her warm and vibrant personality contributes to coaching sessions that 
                    I enjoy and look forward to. 
                    She has helped me over the past few years to find myself and be the best 
                    version of me that I can be." caption="Stephany Hunter  - leadership coaching "
                /></div><div className={styles.column}> <Card description="Nadia is a leader and coach of the highest integrity and skill. 
                Her dynamism drive and ambition are defining features of her leadership and her compassion for others makes her skilful and affective coach. 
                Choose energetic, positive and humble. I love working with Nadia highly recommend her work."
                    caption="Liz Robinson, Co-Director, Big Education"
                /></div>
            </div>


            <div className={styles.row}>
                <div className={styles.column}><Card description="Coaching with Nadia has made a huge impact on my professional growth. I love having my thinking challenged! I have become comfortable with feeling uncomfortable in a safe and confidential environment. Thank you Nadia." caption="Louise Scott HT – executive coaching"
                /></div><div className={styles.column}> <Card description="There's a few ingredients in Nadia's secret sauce. She can look through my words and expressions and hit all the spots I did not think mattered. 
                Her honesty and courage to say it as it is are hugely inspiring. 
                The best ingredients are in her ways of working, which are focussed and objective-driven, 
                looking at the real, practical ways of having an impact on well-trodden paths and habits. 
                Our work is giving shape to the person I want to be and is guiding me through to being who I want to be. 
                I wish I had we had met earlier!" caption="Luigi , Business Operations Manager"
                /></div>
            </div>






        </div>


    </Layout>


}

export default Services;