import React, { Component } from 'react';
import SideBarLayout from '../../layouts/SideBarLayout';
import {Table,Tag} from 'antd';
export default class Selling extends Component {
    render() {
        const dataSource = [
            {
              key: '1',
              id: '1',
              name: '明老师',
              address: '测试',
              Coursestatus: '测试',
              tags: ['nice'],
            },
            {
              key: '2',
              id: '2',
              name: '张老师',
              address: '测试',
              Coursestatus: '测试',
              tags: ['developer'],
            },
          ];
          
          const columns = [
            {
              title: '老师id',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: '老师姓名',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '认证状态',
              dataIndex: 'address',
              key: 'address',
            },
            {
                title: '查看详细信息',
                dataIndex: 'Coursestatus',
                key: 'Coursestatus',
            },
            {
                title: '认证修改',
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
                        <Tag color={color} key={tag}>
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
