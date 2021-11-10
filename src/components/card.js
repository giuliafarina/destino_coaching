
import * as React from "react";
import * as styles from "../styles/card.module.css"


const Card = (props) => {
    return <div className={styles.card_body}>
        <img src={props.pic} alt={props.caption} />
        <figcaption className={styles.card_caption}>
            {props.caption}
        </figcaption>
        <div className={styles.card_description} dangerouslySetInnerHTML={{
            __html: props.description,
        }}>
        </div>
    </div>
}



export default Card;