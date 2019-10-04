import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import Ohgusu from '../../images/ohgusu.png'
import Australia from '../../images/australia.png'
import College from '../../images/college.png'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class History extends Component {
    render() {
        return (
            <div style={{ margin: '25px 0px' }}>
                <h3>学歴</h3>
                <Segment style={{ backgroundColor: '#CC9999' }}>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            date="2011-2014"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3>大楠中学校入学</h3>
                            海が見える校舎で青春を謳歌
                            <p>
                                <img src={Ohgusu} />
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            date="2014 - 2017"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3>横須賀総合高校入学</h3>
                            オーストラリアに短期留学
                            <p>
                                <img src={Australia} />
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            date="2017 - present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3>法政大学入学</h3>
                            データ工学研究室所属
                            <p>
                                <img src={College} />
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </Segment>
            </div>
        )
    }
}