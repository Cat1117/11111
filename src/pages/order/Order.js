import React, { Component } from 'react';
import SideBarLayout from '../../layouts/SideBarLayout';
import {Table,Tag, Button} from 'antd';
export default class Order extends Component {
    render() {
        const dataSource = [
            {
              key: '1',
              id: '测试',
              name: '测试',
              address: '测试',
              tags: ['nice'],
            },
            {
              key: '2',
              id: '测试',
              name: '测试',
              address: '测试',
              tags: ['developer'],
            },
          ];
          
          const columns = [
            {
              title: '章节',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: '文章',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '作业管理',
              dataIndex: 'address',
              key: 'address',
            },
            {
                title: '订单管理',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                  <>
                    {tags.map(tag => {
                      let color = tag.length > 5 ? 'geekblue' : 'green';
                      if (tag === 'loser') {
                        color = 'volcano';
                      }
                      return (
                        <Tag color={color} key={tag} >
                          {tag.toUpperCase()}
                        </Tag>
                        
                      );
                    })}
                  </>
                ),
              },
          ];
        return (
            
            <SideBarLayout>
                <Table dataSource={dataSource} columns={columns} />;
            </SideBarLayout>
        );
    }
}
