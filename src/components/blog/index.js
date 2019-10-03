import React, { Component } from 'react'
import BlogFooter from './blog-footer'
import BlogItem from './blog-item'
import BlogCard from './blog-card'
import BlogProfile from './blog-profile'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { Grid, GridColumn } from 'semantic-ui-react';

const picture = 'https://react.semantic-ui.com/images/wireframe/image.png'
const title = 'タイトル'
const date = '2019/10/20'
const text = 'https://react.semantic-ui.com/images/wireframe/paragraph.png'

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
export default class Blog extends Component {
    render() {
        return (
            <div style={{ margin: '0 auto', maxWidth: '960px' }}>
                <img alt="トップ画像" src='https://react.semantic-ui.com/images/wireframe/image.png' style={{ width: '1250px', height: '300px', borderRadius: '5px', borderCollapse: 'separate' }} />
                <Grid>
                    <GridColumn width={12}>
                        <BlogItem
                            title={title}
                            date={date}
                            text={text}
                        />
                    </GridColumn>
                    <GridColumn width={4}>
                        <BlogProfile />
                    </GridColumn>
                </Grid>
                <h3 style={{ textAlign: 'center', marginTop: '30px' }}>オススメの記事</h3>
                <div style={{ background: '#E6E6FA', padding: '10px 40px' }}>
                    <Slider {...settings} style={{ marginTop: '30px' }}>
                        {blogRecommend.map((blog) => {
                            return <BlogCard
                                key={blog.idx}
                                title={blog.title}
                                picture={blog.picture}
                                text={blog.text}
                            />
                        })}
                    </Slider>
                </div>
                <BlogFooter />
            </div>
        )
    }
}