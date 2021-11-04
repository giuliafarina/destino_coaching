import React from "react";
import Card from "./card";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick";


const Responsive = () => {

    const settings = {
        dots: true,
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
            }]
    };

    const data = useStaticQuery(graphql`
        query TestimonalQuery {
            allContentfulTestimonial {
                nodes {
                    name
                    description {
                        childMarkdownRemark{
                               rawMarkdownBody
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
            <Slider {...settings}>
                {data.allContentfulTestimonial.nodes.map(node =>
                    <Card
                        key={node.name}
                        description={node.description.childMarkdownRemark.rawMarkdownBody}
                        caption={node.name}
                        pic={node.picture.file.url}
                    />)}
            </Slider>
        </div>
    );
}

export default Responsive;