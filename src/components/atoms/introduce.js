import React, { Component } from 'react'
import { Label, GridColumn, Grid, Responsive } from 'semantic-ui-react'
export default class Introduce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            text: props.text
        };
    }
    render() {
        return (
            <div style={{ fontFamily: 'Century Gothic' }}>
                <Responsive minWidth={860}>
                    <Grid>
                        <GridColumn width={5}>
                            <Label as='a' tag style={{ backgroundColor: '#CC6666', color: 'white' }}>
                                {this.state.title}
                            </Label>
                        </GridColumn>
                        <GridColumn width={11} style={{ paddingTop: '4%' }}>
                            {this.state.text}
                        </GridColumn>
                    </Grid>
                </Responsive>
                <Responsive maxWidth={860}>
                    <p style={{ marginBottom: '10px' }}>
                        <Label as='a' size='small' style={{ padding: '5px', marginRight: '10px', color: '#663333' }}>
                            {this.state.title}
                        </Label>
                        {this.state.text}
                    </p>
                </Responsive>
            </div>
        )
    }
}