import * as React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";
import logo from "../images/destino.svg";





const Menu = () => {



    return <nav>
        <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>

        <ul> <div><img className="destino_logo" src={logo}></img></div>
            <li><Link className="links" to="/">Home</Link></li>
            <li><AnchorLink className="links" to="/#AboutPrev">About Me</AnchorLink></li>
            <li><AnchorLink className="links" to="/#ServicesPrev">Services</AnchorLink></li>

            <li><AnchorLink className="links" to="/#Contacts">Contacts</AnchorLink></li>
        </ul>

    </nav>


}

export default Menu;