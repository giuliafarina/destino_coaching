import * as React from "react";
import * as styles from "../styles/pinkSection2.module.css"
import desk8 from "../images/desk8.jpg"





const PinkSection2 = () => {
    return <>
        <div className={styles.container_section_pink}>
            <div className={styles.container_image}>
                <img className={styles.desk8_image} src={desk8} />

            </div>
            <div className={styles.container_content_pink}>
                <div className={styles.content_pink}>
                    <h1 className={styles.title_pink}>Tailoring Coaching Services to your needs</h1><br />
                    <p>
                        If you are interested in Destino Services for Schools,
                        in the consultation call we will discuss your organisation’s needs
                        and if one of the Destino Flagship programmes suit would you. </p><br />
                    <p>We may decide to combine elements of each programme.</p><br />
                    <p>After the consultation, you will receive a Proposal of Services for your consideration, with costings. </p>








                </div>
            </div>

        </div>
    </>
}

export default PinkSection2;