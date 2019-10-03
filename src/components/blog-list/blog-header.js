import React, { Component } from 'react'
import { Input, Grid, Select, GridColumn } from 'semantic-ui-react'
export default class BlogHeader extends Component {
    render() {
        const selectOptions = [
            { key: 're', value: 're', text: '新しい順' },
            { key: 'po', value: 'po', text: '古い順' },
            { key: 'ne', value: 'ne', text: '人気順' },
        ]
        return (
            <Grid style={{ margin: '0 auto', marginBottom: '20px' }}>
                <Grid.Row columns={3}>
                    <GridColumn>
                    </GridColumn>
                    <GridColumn style={{ textAlign: 'center' }}>
                        <h2>BLOG LIST</h2>
                    </GridColumn>
                    <GridColumn>
                        <Select placeholder='新しい順' options={selectOptions} />
                    </GridColumn>
                </Grid.Row>
            </Grid>
        )
    }
}