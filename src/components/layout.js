import * as React from "react";
import "../styles/global.css";

import Scroll from "../components/scroll"
import Menu from "./menu";
import Contacts from "./Contacts";




const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Menu />
            <div>
                {children}
            </div>
            <Scroll />

            <Contacts idProp="Contacts" />
        </div>
    )

}

export default Layout;