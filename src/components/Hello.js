import React from "react";
class Hello extends React.Component {
  //静态方法
  handleClick() {
    console.log("点击事件");
  }
  render() {
    return <button onClick={this.handleClick}>333</button>;
  }
}
export default Hello;
