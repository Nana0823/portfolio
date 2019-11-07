import React, { Component } from 'react'
import Introduce from '../../atoms/introduce'

const introduces = [
    { title: '出身地', text: '神奈川県藤沢市' },
    { title: '所在地', text: '東京都小金井市' },
    { title: '趣味', text: '旅行、ライブ' },
    { title: '誕生日', text: '1998年8月' },
    { title: '好きな本', text: 'ソロモンの偽証' },
    { title: '好きな映画', text: 'プリティ・ウーマン' },
]
export default class IntroduceList extends Component {
    render() {
        return (
            <div>
                {introduces.map((introduce) => {
                    return <Introduce
                        title={introduce.title}
                        text={introduce.text}
                    />
                })}
            </div>
        )
    }
}