import * as React from "react";
import * as styles from '../styles/hero.module.css';
import { Link } from "gatsby";
import hero from "../images/hero.jpg";

const Hero = ({ idProp }) => {
    return <div className="container_section_white" id={idProp}>
        <div className="container_image">
            <img src={hero} />
        </div>
        <div className={styles.container_content}>
            <div className={styles.content}><h1 className={styles.title}>About me</h1>
                <p>Hi! I'm <b>Nadia</b>. I grew up in London with my Mum and brother and moved to East Anglia to take up Headship in 2015.
                    I now love life in the countryside and live here with my partner and two children.<br /></p>
                <button type="button" className="button"><Link to="/About">Read More</Link></button>
            </div>
        </div>

    </div>
}

export default Hero;