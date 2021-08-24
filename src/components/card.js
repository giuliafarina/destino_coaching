
import * as React from "react";
import * as styles from "../styles/card.module.css"


const Card = (props) => {
    return <div className={styles.card_body}><blockquote className={styles.card_description}><q>{props.description}</q>

    </blockquote><figcaption className={styles.card_caption}>{props.caption}</figcaption>




    </div>
}

export default Card;