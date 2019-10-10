import React, { Component } from 'react'
import { Grid, Responsive, Image } from 'semantic-ui-react';
import { StaticQuery, graphql, Link } from "gatsby";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const Pcsettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};

const Mobilesettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
}
export default class BlogCard extends Component {
    render() {
        return (
            <StaticQuery
                query={graphql`
                     query MyQuery5 {
                        allContentfulBlog {
                            edges {
                                node {
                                    body {
                                        childMarkdownRemark {
                                            html
                                        }
                                    }
                                    title
                                    updatedAt
                                    description {
                                        description
                                    }
                                }
                            }
                        }
                    }
                     `
                }
                render={
                    data => {
                        return (
                            <div>
                                <Responsive minWidth={700}>
                                    <Slider {...Pcsettings} style={{ marginTop: '30px' }}>
                                        {data.allContentfulBlog.edges.map((blog) => {
                                            return (
                                                <>
                                                    <Grid.Column style={{
                                                        border: 'solid', borderWidth: '1px', padding: '0px', backgroundColor: 'white', margin: '0px 10px'
                                                    }}>
                                                        <Link to='blog-page'>
                                                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                                            <h4>{blog.node.title}</h4>
                                                        </Link>
                                                        <p style={{ marginBottom: '20px' }}>
                                                            {blog.node.description.description}
                                                        </p>
                                                    </Grid.Column>
                                                </>
                                            )
                                        })}
                                    </Slider>
                                </Responsive>
                                <Responsive maxWidth={700}>
                                    <Slider {...Mobilesettings} style={{ marginTop: '30px' }}>
                                        {data.allContentfulBlog.edges.map((blog) => {
                                            return (
                                                <>
                                                    <Grid.Column style={{
                                                        border: 'solid', borderWidth: '1px', padding: '0px', backgroundColor: 'white', margin: '0px 10px'
                                                    }}>
                                                        <Link to='blog-page'>
                                                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' style={{ marginBottom: '5px' }} />
                                                            <h4>{blog.node.title}</h4>
                                                        </Link>
                                                    </Grid.Column>
                                                </>
                                            )
                                        })}
                                    </Slider>
                                </Responsive>
                            </div>
                        )
                    }
                }
            />
        )
    }
}