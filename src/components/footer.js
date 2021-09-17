import * as React from "react";
import { AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5"
import { IoLogoFacebook } from "react-icons/io";




const Footer = () => {
    return (

        <footer >
            <p className="social">
                <a className="instaIcon" href="https://www.instagram.com/destino.coaching_nadia/">  <AiFillInstagram /></a>
                <a className="linkedinIcon" href="https://www.linkedin.com/in/nadia-hewstone-79b95579"><IoLogoLinkedin /></a>
                <a className="twitterIcon" href="https://twitter.com/DestinoNadia"><AiFillTwitterSquare /></a>
                <a className="facebookIcon" href="https://www.facebook.com/NadiaDestino"><IoLogoFacebook /></a></p>
            <div className="container_credits"><p className="credits"><p className="copyright"><b>© Destino Coaching 2021</b></p>Design: <a href="https://www.linkedin.com/in/virginia-b-7188b15a">Virginia Broadhead</a>  <br />Coding: <a href="https://www.giuliafarina.com">Giulia Farina</a> <br />Photo credits: <a href="https://www.emmacullenphotography.com/">Emma Cullen</a></p></div>
        </footer>
    )
}
export default Footer;