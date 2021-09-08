import * as React from "react";
import * as styles from "../styles/greenPrev.module.css"
import Button from "./button.js";
import { Link } from "gatsby";
import desk2 from "../images/desk2.jpeg";

const GreenPrev = ({ idProp }) => {
    return <>
        <div className={styles.container_section_green} id={idProp}>
            <div className={styles.container_image}>
                <img className={styles.desk_image} src={desk2} /></div>
            <div className={styles.container_content_green}>
                <div className={styles.content_green}><h1 className={styles.title_green}>Coaching Services</h1>
                    <p> I have a range of different services that I offer to my clients to best meet their needs. <br /></p>
                    <Link to="/Services"> <Button /></Link>
                </div>
            </div>

        </div>
    </>
}

export default GreenPrev;