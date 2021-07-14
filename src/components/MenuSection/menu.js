import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./menu.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../logo";




const Menu = () => {
    const [isOpen, setOpen] = useState(false)


    return <Nav className="ml-auto justify-content-center">
        <Navbar bg="transparent" variant="dark" collapseOnSelect expand="lg" className=" justify-content-center">
            <Logo />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />


            <Navbar.Collapse id="responsive-navbar navbarScroll" className={isOpen ? "show " : "" + "order-md-1"}>

                <Nav.Link >
                    <Link className="linkItem" to="/About"
                    >About Me</Link>
                </Nav.Link>
                <Nav.Link >
                    <Link className="linkItem" to="/Services">Coaching Services</Link>
                </Nav.Link>
                <Nav.Link >
                    <Link className="linkItem" to="/Support">Support for Schools</Link>
                </Nav.Link>
                <Nav.Link >
                    <AnchorLink className="linkItem" to="#Testimonials">Testimonials</AnchorLink>
                </Nav.Link>
                <Nav.Link >
                    <AnchorLink className="linkItem" to="/#Contacts">Contacts</AnchorLink>
                </Nav.Link>
            </Navbar.Collapse>

        </Navbar>

    </Nav>


}

export default Menu;