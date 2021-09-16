import * as React from "react";

const Form = () => {

    return <>
        <h1>Let's chat!</h1>
        <p>Please contact me if you would like to book a consultation call.
            Use this form to send me a message and we'll arrange a meeting.</p>
        <form action="emailto:nadia_destino@outlook.com">
            <label for="fname">Name</label><br />
            <input type="text" id="fname" name="fname" placeholder="Type in your name"></input><br />
            <label for="email">Email</label><br />
            <input type="email" id="email" name="email" placeholder="Type in your email"></input><br />
            <label for="message">Message</label><br />
            <textarea id="message" name="message" placeholder="Type in your message"></textarea><br />
            <input type="submit" value="Submit" />

        </form>
    </>

}

export default Form;