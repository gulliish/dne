import React from 'react';
import { Input, Space } from 'antd';
const { Search } = Input;

const onSearch = (value) => console.log(value);
const SearchApp = () => (
  <Space direction="vertical">
    <Search
      placeholder="Search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
  </Space>
);
export default SearchApp;