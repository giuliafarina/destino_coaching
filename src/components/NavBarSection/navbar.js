import * as React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import "./navbar.css";



const Navbar = () => {
    return <nav>

        <div className="brand-name">Destino Coaching</div><a href="#" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
        <div className="navBar_links">
            <ul>
                <li>

                    <Link className="linkItem" to="/About"> About </Link>
                </li>
                <li>
                    <Link className="linkItem" to="/Services"> My services </Link>
                </li>
                <li>
                    <AnchorLink className="linkItem" to="/#Testimonials"> Testimonials</AnchorLink>
                </li>
            </ul>
        </div>



    </nav>

}

export default Navbar;