import React, { Component } from 'react'
import { Responsive, Button, Grid, Select, GridColumn } from 'semantic-ui-react'

const kategories = [
    { key: 1, text: 'ブログ' },
    { key: 2, text: '学び' },
    { key: 3, text: '暮らし' },
    { key: 4, text: 'メモ' },
];
export default class BlogHeader extends Component {
    render() {
        const selectOptions = [
            { key: 're', value: 're', text: '新しい順' },
            { key: 'po', value: 'po', text: '古い順' },
            { key: 'ne', value: 'ne', text: '人気順' },
        ]
        return (
            <div>

                <Responsive minWidth={860}>
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
                </Responsive>
                <Responsive maxWidth={860}>
                    <Grid style={{ margin: '0 auto', marginBottom: '20px' }}>
                        <Grid.Row columns={3}>
                            <GridColumn>
                                <Button size='small'>絞り込み</Button>
                            </GridColumn>
                            <GridColumn style={{ textAlign: 'center' }}>
                                <h2>BLOG LIST</h2>
                            </GridColumn>
                            <GridColumn>
                                <Select placeholder='新しい順' options={selectOptions} />
                            </GridColumn>
                        </Grid.Row>
                    </Grid>
                </Responsive>
            </div>
        )
    }
}