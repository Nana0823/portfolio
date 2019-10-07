import React, { Component } from 'react'
import RecommendBlogCard from '../../molecules/card/recommend-blog-card'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { Segment } from 'semantic-ui-react'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};

const blogRecommend = [
    { idx: 1, title: 'タイトル1', picture: 'https://react.semantic-ui.com/images/wireframe/image.png', text: '本文ーーーーーーーーーーー' },
    { idx: 2, title: 'タイトル2', picture: 'https://react.semantic-ui.com/images/wireframe/image.png', text: '本文ーーーーーーーーーーー' },
    { idx: 3, title: 'タイトル3', picture: 'https://react.semantic-ui.com/images/wireframe/image.png', text: '本文ーーーーーーーーーーー' },
    { idx: 4, title: 'タイトル4', picture: 'https://react.semantic-ui.com/images/wireframe/image.png', text: '本文ーーーーーーーーーーー' },
]
export default class RecommendBlog extends Component {
    render() {
        return (
            <div>
                <Slider {...settings} style={{ marginTop: '30px' }}>
                    {blogRecommend.map((blog) => {
                        return <RecommendBlogCard
                            key={blog.idx}
                            title={blog.title}
                            picture={blog.picture}
                            text={blog.text}
                        />
                    })}
                </Slider>
            </div>
        )
    }
}