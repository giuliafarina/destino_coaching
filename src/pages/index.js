import * as React from "react"
import Layout from "../components/layout";

import ServicesPrev from "../components/servicesPrev";
import Hero from "../components/hero";



const IndexPage = () => {
  return (
    <Layout><Hero idProp="Hero" />
      <ServicesPrev idProp="ServicesPrev" />



    </Layout>
  )

}

export default IndexPage
