import * as React from "react";
import "./layout.css"

import Scroll from "../components/scroll"
import Menu from "../components/MenuSection/menu";
import Contacts from "../components/ContactSection/Contacts";



const Layout = ({ children }) => {
    return <>
        <Menu />
        <div>
            {children}</div>
        <Scroll />

        <Contacts idProp="Contacts" /></>

}

export default Layout;