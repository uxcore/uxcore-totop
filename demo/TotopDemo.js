/**
 * Totop Component Demo for uxcore
 * @author eternaslky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');

let Totop = require('../src');
let {Box} = Totop;
let Popover = require('uxcore-popover');

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let len = Math.random() * 10 + 10;
let mockData = [];
for (let i = 0; i < len; i++) {
  mockData.push({
    index: i,
    color: getRandomColor()
  })
}

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  onBoxClick(box) {
    console.log(box + ' clicked!');
  }

  render() {
    // console.log(mockData);
    let overlay = <div>
      <div className="demoContent">
        <i className="kuma-icon kuma-icon-information"></i>
        <span>这是一个气泡弹窗</span>
      </div>
    </div>;
    return (
      <div>
        <Totop>
          <Box label="评价" icon={<i className="kuma-icon kuma-icon-shoucang1"></i>} onClick={this.onBoxClick.bind(this, 'pingjia')}/>
          <Popover title="这是标题，可以隐藏" overlay={overlay} placement="left">
            <div className="box">
              <div className="box-window">
                <span className="box-text">咨询</span>
                <i className="kuma-icon kuma-icon-query box-icon"></i>
              </div>
            </div>
          </Popover>
        </Totop>
        {mockData.map((item, index) => {
          return <div key={index} className="demoDiv" style={{background: item.color}}>{"第" + item.index + "个区块"}</div>
        })}
      </div>
    );
  }
}

module.exports = Demo;
