import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import Tag from '../../atoms/tag'

const categories = [
    { key: 1, text: 'ブログ' },
    { key: 2, text: '学び' },
    { key: 3, text: '暮らし' },
    { key: 4, text: 'メモ' },
];
export default class RefineTheme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        };
    }
    render() {
        return (
            <>
                <h4 style={{ marginBottom: '10px' }}>カテゴリー</h4>
                {categories.map((tag) => {
                    return (
                        <Tag
                            key={tag.key}
                            text={tag.text} />
                    )
                })}
                <div style={{ textAlign: 'center', marginTop: '5px' }}>
                    <Button size='mini' color='yellow' style={{ width: '150px' }}>絞り込み</Button>
                </div>
            </>
        )
    }
}