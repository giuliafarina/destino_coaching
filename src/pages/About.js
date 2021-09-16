import * as React from "react";
import Layout from "../components/layout";

import * as styles from '../styles/about.module.css';
import WhiteSection from "../components/whiteSection";
import PinkSection from "../components/pinkSection";
import Testimonials from "../components/testimonials";
import WhiteSection2 from "../components/whiteSection2";
import Form from "../components/form";


const About = () => {
    return <Layout>
        <WhiteSection />
        <WhiteSection2 />
        <PinkSection />
        <Testimonials />
        <Form />






    </Layout>
}

export default About;