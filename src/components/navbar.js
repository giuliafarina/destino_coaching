import * as React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";


const Navbar = () => {
    return <nav>
        <header>
            Destino Coaching</header> <ul><li><Link className="linkItem" to="/Services"> My services </Link></li>
            <li><Link className="linkItem" to="/About"> About </Link></li>
            <li><AnchorLink className="linkItem" to="/#Testimonials"> Testimonials</AnchorLink></li></ul>


    </nav>

}

export default Navbar;