import * as React from "react";
import { useState } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

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

            {/* <Link className="logo-link" to="/"> */}
            <div className="logo">
                <img className="destino_logo" src={logo}></img>
                <h1 className="destino-header">Destino Coaching</h1>
            </div>
            <ul className={renderClasses()}>
                <li><AnchorLink className="nav-item" to="/#Hero">What is <b>DESTINO</b>? </AnchorLink></li>
                <li><AnchorLink className="nav-item" to="/#ServicesPrev">Services </AnchorLink></li>
                <li><AnchorLink className="nav-item" to="#Contacts">Contacts </AnchorLink></li>
            </ul>
            <div onClick={handleToggle} className="hamburger" role="button">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

        </nav>

    </>

}

export default Menu;