
import * as React from "react";
import * as styles from "../styles/servicesPrev.module.css"
import Button from "./button.js";
import { Link } from "gatsby";

const ServicesPrev = ({ idProp }) => {
    return <>
        <div className="container_section_pink" id={idProp}>
            <div className={styles.container_content_pink}>
                <div className={styles.content_pink}><h1 className={styles.title_pink}>What I do</h1>
                    <p> I am a certified life and leadership coach and I work with clients in a few different ways. In all my coaching work,
                        I challenge clients to stretch their capacity by asking for far more than they have done before. <br /></p>
                    <Link to="/Services"> <Button /></Link>
                </div>
            </div>

        </div>
    </>
}

export default ServicesPrev;