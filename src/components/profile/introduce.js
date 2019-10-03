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
                        <p>
                            神奈川県藤沢生まれ、横須賀育ち

                        </p>
                    </GridColumn>
                    <GridColumn width={4}>
                        <Image src={Hobby} />
                    </GridColumn>
                </Grid>
            </div>
        )
    }
}