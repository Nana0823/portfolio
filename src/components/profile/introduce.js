import React, { Component } from 'react'
import { Image, Grid, GridColumn } from 'semantic-ui-react'
import Hobby from '../../images/hobby.png'
export default class Introduce extends Component {
    render() {
        return (
            <div style={{ margin: '25px 0px' }}>
                <h3>紹介文</h3>
                <Grid>
                    <GridColumn width={12}>
                        <div>
                            <p>出身地：　　　　神奈川県藤沢市</p>
                            <p>所在地：　　　　東京都小金井市</p>
                            <p>趣味：　　　　　旅行、ライブ</p>
                            <p>誕生日：　　　　1998年8月</p>
                            <p>好きな本：　　　ソロモンの偽証</p>
                            <p>好きな映画：　　プリティ・ウーマン</p>



                        </div>
                    </GridColumn>
                    <GridColumn width={4}>
                        <Image src={Hobby} />
                    </GridColumn>
                </Grid>
            </div>
        )
    }
}