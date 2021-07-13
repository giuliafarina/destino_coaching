import * as React from "react"
import Layout from "../components/layout";
import Menu from "../components/MenuSection/menu";
import Hero from "../components/HeroSection/hero";
import Contacts from "../components/ContactSection/Contacts";

const IndexPage = () => {
  return (
    <Layout><Menu /><Hero />
      <Contacts idProp="Contacts" />


    </Layout>
  )

}

export default IndexPage
