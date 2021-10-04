import * as React from "react";
import * as styles from "../styles/whiteSection3.module.css"
import whiteboard from "../images/whiteboard.jpg"


const WhiteSection3 = () => {
    return <>
        <div className={styles.container_section_white}>
            <div className={styles.container_image}>
                <img className={styles.whiteboard_image} src={whiteboard} alt="" />
            </div>
            <div className={styles.container_content_white}>
                <div className={styles.content_white}><h1 className={styles.title_white}>What I do</h1>

                    <p>I am a certified life and leadership coach and work with clients in a few different ways.</p><br />
                    <p> I challenge all my clients to stretch their capacity by asking for far more than they have done before. </p><br />
                    <p>I use a non-judgemental approach while being open and honest about what I hear and see. </p><br />
                    <p>Coaching is confidential, developmental, safe and provokes the client into action.
                        I am a warm and sincere coach and take pride in making sure my clients feel their goal has been achieved through coaching. </p><br />
                    <p>I keep in touch with clients between sessions and continually improve my coaching skills through my own ongoing professional development.</p>
                </div>
            </div>

        </div>
    </>
}

export default WhiteSection3;