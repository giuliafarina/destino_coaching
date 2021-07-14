import * as React from "react"
import Layout from "../components/layout";
import Menu from "../components/MenuSection/menu";
import Hero from "../components/HeroSection/hero";
import Contacts from "../components/ContactSection/Contacts";
import Scroll from "../components/scroll";

const IndexPage = () => {
  return (
    <Layout><Menu /><Hero />
      <Contacts idProp="Contacts" />

      <Scroll />
    </Layout>
  )

}

export default IndexPage
