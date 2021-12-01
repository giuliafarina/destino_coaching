import * as React from "react"
import Layout from "../components/layout";
import ServicesPrev from "../components/ServicesPrev";
import Hero from "../components/hero";
import GreenPrev from "../components/greenPrev";
import { Helmet } from "react-helmet";
import favicon from "../images/destino.svg";



const IndexPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="Nadia Hewstone" />
          <meta name="description" content="Destino Coaching" />
          <meta property="og:title" content="Destino Coaching" />
          <meta property="og:description" content="Coaching Services" />
          <meta property="og:site_name" content="destinocoaching.co.uk" />
          <title>Destino Coaching</title>
          <link rel="icon" type="image/svg+xml" href={favicon} />
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-213980477-1"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){`dataLayer.push(arguments);`}
            gtag('js', new Date());

            gtag('config', 'UA-213980477-1');
          </script>

        </head>
      </Helmet>
      <Layout>
        <Hero idProp="Hero" />
        <ServicesPrev idProp="ServicesPrev" />
        <GreenPrev idProp="GreenPrev" />
      </Layout>
    </React.Fragment>
  )

}

export default IndexPage
