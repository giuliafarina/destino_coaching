import * as React from "react";
import "./Contacts.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';

const Contacts = ({ idProp }) => {
    return (
        <footer>
            <p id={idProp}>Email: <MailIcon /></p>
            <p className="social" id={idProp}><TwitterIcon /><LinkedInIcon /><InstagramIcon /><FacebookIcon /></p>

        </footer>
    )
}
export default Contacts;