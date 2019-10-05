import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import SchoolLife from '../../molecules/timeline/school-life'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Ohgusu from '../../atoms/images/ohgusu.png'
import Australia from '../../atoms/images/australia.png'
import College from '../../atoms/images/college.png'

const schools = [
    { date: '2011 - 2014', name: '大楠中学校入学', text: '海が見える校舎で青春を謳歌', picture: Ohgusu },
    { date: '2014 - 2017', name: '大楠中学校入学', text: '海が見える校舎で青春を謳歌', picture: Australia },
    { date: '2017 - present', name: '大楠中学校入学', text: '海が見える校舎で青春を謳歌', picture: College },
]
export default class Timeline extends Component {
    render() {
        return (
            <div style={{ margin: '25px 0px' }}>
                <h3>学歴</h3>
                <Segment style={{ backgroundColor: '#CC9999' }}>
                    <VerticalTimeline>
                        {schools.map((school) => {
                            return (
                                <SchoolLife
                                    key={school.date}
                                    date={school.date}
                                    name={school.name}
                                    text={school.text}
                                    picture={school.picture}
                                />
                            )
                        })}
                    </VerticalTimeline>
                </Segment>
            </div>
        )
    }
}