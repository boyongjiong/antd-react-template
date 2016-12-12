import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

/**
 * RouteHandler 是渲染当前子路由处理器的组件，它将根据URL渲染这组件中的一个：Home、Top100、Profile或者Add Character
 * RouteHandler 在 v1.0 被取消，现在用 {this.props.children} 
 * 它和AngularJS中的 <div ng-view></div> 挺相似，会将当前路由中已渲染的模板包含进主布局中
 */

export default App;