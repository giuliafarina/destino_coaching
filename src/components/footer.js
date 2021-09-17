import * as React from "react";
import { AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5"
import { IoLogoFacebook } from "react-icons/io";




const Footer = () => {
    return (

        <footer >
            <p className="social">
                <a className="instaIcon">  <AiFillInstagram /></a>
                <a className="linkedinIcon"><IoLogoLinkedin /></a>
                <a className="twitterIcon"><AiFillTwitterSquare /></a>
                <a className="facebookIcon"><IoLogoFacebook /></a></p>
            <div className="container_credits"><p className="credits"><p className="copyright"><b>© Destino Coaching 2021</b></p>Design: <a href="https://www.linkedin.com/in/virginia-b-7188b15a">Virginia Broadhead</a>  <br />Coding: <a href="https://www.giuliafarina.com">Giulia Farina</a> <br />Photo credits: <a href="https://www.emmacullenphotography.com/">Emma Cullen</a></p></div>
        </footer>
    )
}
export default Footer;