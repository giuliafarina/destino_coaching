import React from "react";
import Card from "./card";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick";


const Carousel = () => {

    const sliderSettings = {
        dots: true,
        dotsClass: "slider-dots",
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const data = useStaticQuery(graphql`
        query TestimonalQuery {
            allContentfulTestimonial {
                nodes {
                    id
                    name
                    description {
                        childMarkdownRemark{
                            html
                        }
                    }
                    picture {
                        file {
                           url
                        }
                    }
                }
            }
        }
      `);

    return (
        <div>
            <Slider {...sliderSettings}>
                {data.allContentfulTestimonial.nodes.map(node =>
                    <Card
                        key={node.id}
                        description={node.description.childMarkdownRemark.html}
                        caption={node.name}
                        pic={node.picture.file.url}
                    />)}
            </Slider>
        </div>
    );
}

export default Carousel;