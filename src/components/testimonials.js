
import * as React from "react";

import Carousel from "./carousel";
import * as styles from "../styles/carousel.module.css"

const Testimonials = () => {
    return <>
        <div className={styles.container_testimonials}>
            <h1 className={styles.title_testimonials}>What they say about me</h1>
            <Carousel />
        </div>


    </>
}


export default Testimonials;