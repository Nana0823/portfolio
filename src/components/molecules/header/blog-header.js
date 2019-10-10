import React, { Component } from 'react'
import { Responsive, Grid, Select, GridColumn } from 'semantic-ui-react'
import ModalSelect from '../../atoms/modal-select'
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
                    <h2 style={{ textAlign: 'center' }}>BLOG LIST</h2>
                    <Grid style={{ margin: '0 auto', marginBottom: '10px' }}>
                        <GridColumn width={10} style={{ padding: '0px' }}>
                            <Select placeholder='新しい順' options={selectOptions} style={{ width: '30px' }} />
                        </GridColumn>
                        <GridColumn width={6} style={{ padding: '0px', textAlign: 'right' }}>
                            <ModalSelect />
                        </GridColumn>
                    </Grid>
                </Responsive>
            </div>
        )
    }
}