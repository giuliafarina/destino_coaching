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
            <div className="container_credits"><p className="credits"><b>© Destino Coaching 2021</b><br />Design: <a href="https://www.linkedin.com/in/virginia-b-7188b15a">Virginia Broadhead</a>  <br />Coding: <a href="https://www.giuliafarina.com">Giulia Farina</a> <br />Photo credits: <a href="https://www.emmacullenphotography.com/">Emma Cullen</a></p></div>
        </footer>
    )
}
export default Contacts;