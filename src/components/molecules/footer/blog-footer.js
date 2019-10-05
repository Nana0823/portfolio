import React, { Component } from 'react'
import { Grid, GridColumn, Button, Icon } from 'semantic-ui-react'
export default class BlogFooter extends Component {
    render() {
        return (
            <Grid style={{ textAlign: 'center', marginTop: '30px' }}>
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
        )
    }
}