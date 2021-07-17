import * as React from "react";
import Layout from "../components/layout";
import coaching from "../images/coaching.jpg";
import coaching2 from "../images/coaching2.jpg";



const Services = () => {
    return <Layout><h1 className="title">What I do</h1><div><img className="coaching-img" src={coaching} /></div><div className="services-description"><p>Explorations two ghostly white figures in coveralls and helmets are softly dancing concept of the number one decipherment the ash of stellar alchemy billions upon billions.
    Vastness is bearable only through love across
    the centuries cosmic fugue something incredible is waiting to
    be known from which we spring permanence of the stars. Network of wormholes a
    mote of dust suspended in a sunbeam finite but unbounded hearts of the stars a
    very small stage in a vast cosmic arena how far away and billions upon billions
     upon billions upon billions upon billions upon billions upon billions.</p></div>

        <h1 className="title">How</h1><div><img className="coaching-img" src={coaching2} /></div><div className="services-description"><p>Explorations two ghostly white figures in coveralls and helmets are softly dancing concept of the number one decipherment the ash of stellar alchemy billions upon billions.
        Vastness is bearable only through love across
        the centuries cosmic fugue something incredible is waiting to
        be known from which we spring permanence of the stars. Network of wormholes a
        mote of dust suspended in a sunbeam finite but unbounded hearts of the stars a
        very small stage in a vast cosmic arena how far away and billions upon billions
     upon billions upon billions upon billions upon billions upon billions.</p></div>


    </Layout>


}

export default Services;