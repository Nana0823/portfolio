import React, { Component } from 'react'
import { Image, Grid, GridColumn } from 'semantic-ui-react'
import Childhood from '../../images/history.png'
export default class History extends Component {
    render() {
        return (
            <div style={{ margin: '25px 0px' }}>
                <h3>ヒストリー</h3>
                <Grid>
                    <GridColumn width={4}>
                        <p>
                            <Image src={Childhood} />
                        </p>
                    </GridColumn>
                    <GridColumn width={12}>
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    </GridColumn>
                </Grid>
            </div>
        )
    }
}