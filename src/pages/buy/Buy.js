import React, { Component } from 'react';
import SideBarLayout from '../../layouts/SideBarLayout';
import {Table,Tag} from 'antd';
import './buy.less';
class Buy extends Component {
    
    render() {
        const dataSource = [
            {
              key: '1',
              id: '1',
              name: '明老师',
              address: 'java',
              Coursestatus: '良好',
              tags: ['nice'],
            },
            {
              key: '2',
              id: '2',
              name: '李老师',
              address: 'Web',
              Coursestatus: '良好',
              tags: ['developer'],
            },
          ];
          
          const columns = [
            {
              title: '课程id',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: '任课老师',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '课程内容',
              dataIndex: 'address',
              key: 'address',
            },
            {
                title: '课程状态',
                dataIndex: 'Coursestatus',
                key: 'Coursestatus',
            },
            {
                title: '编辑',
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
export default Buy;