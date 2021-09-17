import * as React from "react";
import "../styles/global.css";

import Scroll from "../components/scroll"
import Menu from "./menu";
import Footer from "./footer";




const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Menu />
            {children}
            <Scroll />

            <Footer />
        </div>
    )

}

export default Layout;