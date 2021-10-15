import * as React from "react";
import { useState } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

import logo from "../images/destino.svg";






const Menu = () => {

    const [navLinkOpen, navLinkToggle] = useState(false);

    const handleToggle = () => {
        navLinkToggle(!navLinkOpen)
    };

    const renderClasses = () => {
        let classes = "nav-links";
        if (navLinkOpen) {
            classes += " active"
        }

        return classes
    };



    return <>
        <nav>

            <div className="logo">
                <Link className="logo_link" to="/">
                    <img className="destino_logo" src={logo} alt="logo links to homepage"></img>
                    <h1 className="destino-header">Destino Coaching</h1></Link>
            </div>
            <ul className={renderClasses()}>
                <li><Link className="nav-item" to="/About">About</Link></li>
                <li><Link className="nav-item" to="/Services">Coaching</Link></li>
                <li><Link className="nav-item" to="/ServicesforSchools">Services for Schools</Link></li>
                <li><Link className="nav-item" to="/Contacts">Contacts </Link></li>
            </ul>
            <div onClick={handleToggle} onKeyDown={handleToggle} tabIndex={0} className="hamburger" role="button">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

        </nav>

    </>

}

export default Menu;