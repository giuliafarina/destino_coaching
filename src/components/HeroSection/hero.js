import * as React from "react";
import "./heroSection.css"
import example from "../../images/example.jpg";
const Hero = () => {
    return <div className="container.hero">
        <div>
            <img className="hero-img" src={example} />
        </div>
        <div className="quote"><blockquote>
            <p>“But I don’t want comfort. </p><p>I want God, I want poetry, I want real danger, I want freedom, I want goodness. I want sin."</p></blockquote>
            <figcaption>—Aldous Huxley, <cite>Brave New World</cite></figcaption>
        </div>
        <div className="description"><p>
            Billions upon billions how far away venture rogue shores of the cosmic ocean white dwarf. Are creatures of the cosmos adipisci velit Euclid a mote of dust suspended in a sunbeam courage of our questions extraordinary claims require extraordinary evidence. Not a sunrise but a galaxyrise a mote of dust suspended in a sunbeam concept of the number one Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur another world Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p></div>



    </div>
}

export default Hero;