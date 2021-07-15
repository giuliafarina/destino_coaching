import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./menu.css";
import { Navbar, Nav, Dropdown, NavItem, NavLink } from "react-bootstrap";
import Logo from "../logo";




const Menu = () => {
    const [isOpen, setOpen] = useState(false)


    return <Nav className="ml-auto justify-content-center">
        <Navbar bg="transparent" variant="dark" collapseOnSelect expand="lg" className=" justify-content-center">
            <Logo />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />


            <Navbar.Collapse id="responsive-navbar navbarScroll" className={isOpen ? "show " : "" + "order-md-1"}>

                <Nav.Item >
                    <Nav.Link className="linkItem" href="/About"
                    >About Me</Nav.Link></Nav.Item>

                <Dropdown className="linkItem" as={NavItem}>
                    <Dropdown.Toggle>Services</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as={NavLink} href="/Services" >Coaching Services</Dropdown.Item>
                        <Dropdown.Item as={NavLink} href="/Support">Support for Schools</Dropdown.Item>
                        <Dropdown.Item as={NavLink} href="/Testimonials">Testimonials</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>



                <Nav.Item >
                    <AnchorLink className="linkItem" to="#Contacts">Contacts</AnchorLink>
                </Nav.Item>

            </Navbar.Collapse>

        </Navbar>

    </Nav>


}

export default Menu;