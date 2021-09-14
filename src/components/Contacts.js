import * as React from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io5"
// import TwitterIcon from '@material-ui/icons/Twitter';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import { Facebook } from "@material-ui/icons";



const Contacts = ({ idProp }) => {
    return (

        <footer >
            <p className="social" id={idProp}>
                <a className="instaIcon">  <AiFillInstagram /></a>
                <a className="linkedinIcon"><IoLogoLinkedin /></a>
                <a className="twitterIcon"><AiFillTwitterCircle /></a>
                <a className="facebookIcon"><IoLogoFacebook /></a></p>
            <p className="credits">© Destino Coaching 2021<br /> Web Design: Virginia Broadhead & Giulia Farina <br />Photo credits: Emma Cullen</p>
        </footer>
    )
}
export default Contacts;