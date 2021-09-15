import * as React from "react";
import * as styles from "../styles/pinkSection.module.css"

import paperbook from "../images/paperbook.jpg";
import logo from "../images/destino.svg"

const pinkSection = () => {
    return <>
        <div className={styles.container_section_pink}>
            <div className={styles.container_image}>
                <img className={styles.logo_image} src={logo} />
                <img className={styles.paperbook_image} src={paperbook} />
            </div>

            <div className={styles.container_content_pink}>
                <div className={styles.content_pink}><h1 className={styles.title_pink}>Destino</h1>
                    <p>Through Destino I want to empower school leaders to have positive influence.</p><br />
                    <p> This mission was born out of my experience of coaching my own team as a Head, all of whom are now leading their own schools.</p><br />
                    <p> I believe true leadership is born when people are supported to be brave and live by their personal principles.</p><br />
                    <p>Destino means two things in Spanish, destiny and destination. As a keen linguist and fluent Spanish speaker, I wanted a word that expressed what coaching means to me.
                        I love the way some words express concepts in one language that cannot be expressed in any other.</p><br />
                    <p>Destino, for me is one of those words.</p><br />
                    <p> The idea of taking control of your own destiny as well as focussing on your journey and living in the now, captures the power of coaching perfectly, in my view.</p><br />
                    <p>I worked with Graphic Designer, David Blanco to design the Destino logo, which I hope shows my commitment to your brave journey within and to your chosen destination in work and life.</p><br />



                </div>
            </div>

        </div>
    </>
}

export default pinkSection;