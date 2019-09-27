import React, { Component } from 'react'
import { Image, Grid, GridColumn, Button, Icon } from 'semantic-ui-react'
export default class Blog extends Component {
    render() {
        return (
            <div style={{ margin: '0 auto', maxWidth: '960px' }}>
                <img alt="トップ画像" src='https://react.semantic-ui.com/images/wireframe/image.png' style={{ width: '1250px', height: '300px', borderRadius: '5px', borderCollapse: 'separate' }} />
                <h2 style={{ textAlign: 'center' }}>タイトル</h2>
                <p style={{ textAlign: 'center' }}>2019/10/20</p>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ margin: '0 auto' }} />
                <Grid style={{ textAlign: 'center', marginTop: 's30px' }}>
                    <Grid.Row columns={3}>
                        <GridColumn >
                            <Button icon labelPosition='left' size='mini'>
                                <Icon name='angle left' />
                                前の記事
                                </Button>
                        </GridColumn>
                        <GridColumn>
                            <Button size='mini'>記事一覧</Button>
                        </GridColumn>
                        <GridColumn>
                            <Button icon labelPosition='right' size='mini'>
                                次の記事
                                    <Icon name='angle right' />
                            </Button>
                        </GridColumn>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}