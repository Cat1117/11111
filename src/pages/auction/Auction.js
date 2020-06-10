import React, { Component } from 'react';
import SideBarLayout from '../../layouts/SideBarLayout';
import { List, Avatar } from 'antd';
export default class Auction extends Component {
    render() {
        const data = [
            {
                title: '课程名称',
            },
            {
                title: '课程内容',
            },
            {
                title: '课程状态',
            }
        ];
        return (
            <SideBarLayout>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="关于课程的介绍............."
                            />
                        </List.Item>
                    )}
                />,
            </SideBarLayout>
        );
    }
}
