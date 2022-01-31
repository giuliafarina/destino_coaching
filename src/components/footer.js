import * as React from "react";
import { AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5"
import { IoLogoFacebook } from "react-icons/io";
import logoHT from "../images/logoHT.png"
import logoICF from "../images/logoICF.png"




const Footer = () => {
    return (

        <footer >
            <p className="social">
                <a className="instaIcon" href="https://www.instagram.com/destino.coaching_nadia/">  <AiFillInstagram alt="instagram link" /></a>
                <a className="linkedinIcon" href="https://www.linkedin.com/in/nadia-hewstone-79b95579"><IoLogoLinkedin alt="linkedin link" /></a>
                <a className="twitterIcon" href="https://twitter.com/DestinoNadia"><AiFillTwitterSquare alt="twitter link" /></a>
                <a className="facebookIcon" href="https://www.facebook.com/NadiaDestino"><IoLogoFacebook alt="facebook link" /></a></p>
            <div className="container_credits"><p className="credits"><p className="copyright"><b>© Destino Coaching 2021</b>
                <img className="logoHT" src={logoHT} /><img className="logoICF" src={logoICF} /></p>Design: <a href="https://www.vbroadheadux.com">Virginia Broadhead</a>  <br />Coding: <a href="https://www.giuliafarina.com">Giulia Farina</a> <br />Photo credits: <a href="https://www.emmacullenphotography.com/">Emma Cullen</a></p></div>
        </footer>
    )
}
export default Footer;