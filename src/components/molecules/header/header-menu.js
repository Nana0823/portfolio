import React, { Component } from 'react'
import { Grid, Button, GridColumn } from 'semantic-ui-react'
import { Link } from 'gatsby'
export default class HeaderMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: props.home,
            blog: props.blog,
            profile: props.profile
        };
    }
    render() {
        return (
            <div style={{ maxWidth: '500px', margin: '0 auto', marginBottom: '30px', padding: '10px' }}>
                <Grid>
                    <Grid.Row columns={3}>
                        <GridColumn>
                            <Link to=''>
                                <Button color={this.state.home}>
                                    HOME
                        </Button>
                            </Link>
                        </GridColumn>
                        <GridColumn>
                            <Link to='blog-list'>
                                <Button color={this.state.blog}>
                                    BLOG
                        </Button>
                            </Link>
                        </GridColumn>
                        <GridColumn>
                            <Link to='profile-page'>
                                <Button color={this.state.profile}>
                                    PROFILE
                        </Button>
                            </Link>
                        </GridColumn>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}