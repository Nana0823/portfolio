import React, { Component } from 'react'
import { Segment, Select, Label, Input } from 'semantic-ui-react'

const blogKategorie = [
    { key: 'dz', value: 'dz', text: 'ブログ' },
    { key: 'af', value: 'af', text: '学び' },
    { key: 'ax', value: 'ax', text: '暮らし' },
    { key: 'al', value: 'al', text: 'メモ' },
];
export default class Theme extends Component {
    render() {
        return (
            <Segment style={{ textAlign: 'center' }}>
                <Label color='teal' style={{ width: '200px', textAlign: 'center' }}>検索</Label>
                <Input icon='search' size='mini' style={{ margin: '20px 0px' }} />
                <Label color='yellow' style={{ marginBottom: '20px', width: '200px', textAlign: 'center' }}>カテゴリー</Label>
                <Select placeholder='カテゴリーを選択' options={blogKategorie} />
            </Segment>
        )
    }
}