import * as React from "react"
import Layout from "../components/layout";
import AboutPrev from "../components/AboutPrev";
import ServicesPrev from "../components/servicesPrev";
import Hero from "../components/hero";



const IndexPage = () => {
  return (
    <Layout><Hero /><AboutPrev idProp="AboutPrev" />
      <ServicesPrev idProp="ServicesPrev" />



    </Layout>
  )

}

export default IndexPage
