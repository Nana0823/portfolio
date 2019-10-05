import React, { Component } from 'react'
import { Image, Grid, GridColumn } from 'semantic-ui-react'
import Hobby from '../../atoms/images/hobby.png'
import IntroduceList from '../../molecules/profile/introduce-list'
export default class Introduces extends Component {
    render() {
        return (
            <div style={{ margin: '25px 0px' }}>
                <h3>紹介文</h3>
                <Grid>
                    <GridColumn width={12}>
                        <IntroduceList />
                    </GridColumn>
                    <GridColumn width={4}>
                        <Image src={Hobby} />
                    </GridColumn>
                </Grid>
            </div>
        )
    }
}