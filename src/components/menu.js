import * as React from "react";

import { Link } from "gatsby";





const Menu = () => {



    return <nav>

        <ul> <h1>Destino Coaching</h1>
            <li><Link className="links" to="/">Home</Link></li>
            <li><Link className="links" to="/About">About Me</Link></li>
            <li><Link className="links" to="/Services">Services</Link></li>

            <li><Link className="links" to="#Contacts">Contacts</Link></li>
        </ul>

    </nav>


}

export default Menu;