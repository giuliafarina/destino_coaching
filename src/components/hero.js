import * as React from "react";

import * as styles from '../styles/hero.module.css';
import { Link } from "gatsby";

import Button from "./button.js";

const Hero = ({ idProp }) => {









    return <div className={styles.container_hero_image}>
        <div className={styles.container_content} id={idProp}>
            <div className={styles.content}><h1 className={styles.title}>Hi! I'm Nadia</h1>
                <p>Hi! I'm Nadia, founding director of Destino Coaching.<br /> I grew up in London with my Mum and brother and moved to East Anglia to take up Headship in 2015.</p>
                <p className={styles.paragraph} >I now love life in the countryside and live here with my partner and two children.</p>
                <Link to="/About"><Button /></Link>
            </div>
        </div></div>
}

export default Hero;