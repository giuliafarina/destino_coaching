import * as React from "react";
import "./Contacts.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';

const Contacts = ({ idProp }) => {
    return (

        <footer className="social"><p>Feel free to get in touch:</p>

            <p id={idProp}><a href="mailto:paperino@gmail.com" ><MailIcon /></a><a><TwitterIcon /></a><a><LinkedInIcon /></a><InstagramIcon /><a><FacebookIcon /></a></p>

        </footer>
    )
}
export default Contacts;