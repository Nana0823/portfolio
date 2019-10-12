import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import Tag from './tag'


const categories = [
    { key: 1, text: 'ブログ' },
    { key: 2, text: '学び' },
    { key: 3, text: '暮らし' },
    { key: 4, text: 'メモ' },
];
export default class ModalSelect extends Component {
    render() {
        return (
            <Modal trigger={<Button size='small' color='yellow'>絞り込み</Button>} size='mini'>
                <Modal.Header>カテゴリー</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <p>
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
                        </p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}
