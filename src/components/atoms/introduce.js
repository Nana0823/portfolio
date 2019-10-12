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
            <div>
                <Responsive minWidth={860}>
                    <Grid style={{ fontFamily: 'Century Gothic' }}>
                        <GridColumn width={5}>
                            <Label as='a' color='teal' tag >
                                {this.state.title}
                            </Label>
                        </GridColumn>
                        <GridColumn width={11}>
                            {this.state.text}
                        </GridColumn>
                    </Grid>
                </Responsive>
                <Responsive maxWidth={860}>
                    <p style={{ marginBottom: '10px' }}>
                        <Label as='a' color='teal' size='small' style={{ padding: '5px', marginRight: '10px' }}>
                            {this.state.title}
                        </Label>
                        {this.state.text}
                    </p>
                </Responsive>
            </div>
        )
    }
}