import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="dashed">Dashed</Button>
      </div>
    );
  }
}

export default Home;