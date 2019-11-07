import React, { Component } from 'react'
import { Image, Grid, GridColumn, Segment, Responsive } from 'semantic-ui-react'
import Hobby from '../../atoms/images/hobby.png'
import IntroduceList from '../../molecules/profile/introduce-list'
export default class Introduces extends Component {
    render() {
        return (
            <div style={{ margin: '25px 0px' }}>
                <Responsive minWidth={600}>
                    <h3>紹介文</h3>
                    <Segment>
                        < Grid >
                            <GridColumn width={11} style={{ paddingTop: '5%' }}>
                                <IntroduceList />
                            </GridColumn>
                            <GridColumn width={5}>
                                <Image src={Hobby} style={{ margin: '0 auto', marginTop: '20px', border: 'solid', padding: '10px' }} />
                            </GridColumn>
                        </Grid>
                    </Segment>
                </Responsive>
                <Responsive maxWidth={600}>
                    <h3>紹介文</h3>
                    <Segment>
                        <IntroduceList />
                    </Segment>
                </Responsive>
            </div >
        )
    }
}