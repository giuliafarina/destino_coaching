import * as React from "react";
import * as styles from '../styles/hero.module.css';
import { Link } from "gatsby";
import hero from "../images/hero.jpg";
import Button from "./button.js";

const Hero = ({ idProp }) => {
    return <div className="container_section_white" id={idProp}>
        <div className={styles.container_hero_image}>
            <img src={hero} alt={styles.hero_image} />
        </div>
        <div className={styles.container_content}>
            <div className={styles.content}><h1 className={styles.title}>The birth of <b>DESTINO</b></h1>
                <p>Hi! I'm <b>Nadia</b>. I grew up in London with my Mum and brother and moved to East Anglia to take up Headship in 2015.
                    I now love life in the countryside and live here with my partner and two children.<br /></p>
                <Link to="/About"><Button /></Link>
            </div>
        </div>

    </div>
}

export default Hero;