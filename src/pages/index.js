import * as React from "react"
import Layout from "../components/layout";

import ServicesPrev from "../components/ServicesPrev";
import Hero from "../components/hero";
import GreenPrev from "../components/greenPrev";



const IndexPage = () => {
  return (
    <Layout>
      <Hero idProp="Hero" />
      <ServicesPrev idProp="ServicesPrev" />
      <GreenPrev idProp="GreenPrev" />



    </Layout>
  )

}

export default IndexPage
