import React, { Component } from 'react'
import { Input, Button, Segment, Responsive } from 'semantic-ui-react'
import Tag from './tag'

const kategories = [
    { key: 1, text: 'ブログ' },
    { key: 2, text: '学び' },
    { key: 3, text: '暮らし' },
    { key: 4, text: 'メモ' },
];
export default class Theme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        };
    }
    render() {
        return (
            <Responsive minWidth={860}>
                <Segment style={{ marginTop: '93px' }}>
                    <h4 style={{ marginBottom: '10px' }}>検索</h4>
                    <Input icon='search' size='mini' style={{ marginBottom: '20px', width: '150px' }} />
                    <h4 style={{ marginBottom: '10px' }}>カテゴリー</h4>
                    {kategories.map((tag) => {
                        return (
                            <Tag
                                key={tag.key}
                                text={tag.text} />
                        )
                    })}
                    <div style={{ textAlign: 'center', marginTop: '5px' }}>
                        <Button size='mini' style={{ width: '150px' }}>絞り込み</Button>
                    </div>
                </Segment>
            </Responsive>
        )
    }
}