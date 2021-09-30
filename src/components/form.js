import * as React from "react";
import * as styles from "../styles/form.module.css"

const Form = () => {

    return <>
        <div className={styles.form_container}>
            <h1>Let's chat!</h1><br />
            <p>Please contact me if you would like to book a consultation call.
                Use this form to send me a message and we'll arrange a meeting.</p><br />
            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" action="/ThankYou">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <label for="fname">Name</label><br />
                <input type="text" id="fname" name="fname" placeholder="Type in your name"></input><br />
                <label for="email">Email</label><br />
                <input type="email" id="email" name="email" placeholder="Type in your email"></input><br />
                <label for="message">Message</label><br />
                <textarea id="message" name="message" placeholder="Type in your message"></textarea><br />
                <input className={styles.submit_button} type="submit" value="Submit" />

            </form></div>
    </>

}

export default Form;