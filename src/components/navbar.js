import * as React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Navbar = () => {
    return <nav><header>
        Destino Coaching <div><Link to="My services"> My services </Link></div><div><Link to="/About"> About </Link></div><div><AnchorLink to="/Testimonials"> Testimonials</AnchorLink></div>
    </header>

    </nav>

}

export default Navbar;