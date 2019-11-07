import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

export default class SearchTheme extends Component {
    render() {
        return (
            <>
                <h4 style={{ marginBottom: '10px' }}>検索</h4>
                <Input icon='search' size='mini' style={{ marginBottom: '20px', width: '160px' }} />
            </>
        )
    }
}