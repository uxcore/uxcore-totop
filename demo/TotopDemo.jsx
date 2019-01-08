/**
 * Totop Component Demo for uxcore
 * @author eternaslky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import Popover from 'uxcore-popover';
import Totop from '../src';

const { Box } = Totop;

function getRandomColor() {
  const letters = '0123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const len = (Math.random() * 10) + 10;
const mockData = [];
for (let i = 0; i < len; i++) {
  mockData.push({
    index: i,
    color: getRandomColor(),
  });
}

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  onBoxClick(box) {
    console.log(`${box} clicked!`);
  }

  render() {
    // console.log(mockData);
    const overlay = (
      <div>
        <div className="demoContent">
          <i className="kuma-icon kuma-icon-information" />
          <span>这是一个气泡弹窗</span>
        </div>
      </div>
    );
    return (
      <div>
        <Totop to={50} locale="en-us">
          <Box label="评价" icon={<i className="kuma-icon kuma-icon-shoucang1" />} onClick={this.onBoxClick.bind(this, 'pingjia')} />
          <Popover title="这是标题，可以隐藏" overlay={overlay} placement="leftBottom">
            <div className="box">
              <div className="box-window">
                <span className="box-text">咨询</span>
                <i className="kuma-icon kuma-icon-query box-icon" />
              </div>
            </div>
          </Popover>
        </Totop>
        {mockData.map((item, index) => (
          <div key={index} className="demoDiv" style={{ background: item.color }}>{`第${item.index}个区块`}</div>
        ))}
      </div>
    );
  }
}

module.exports = Demo;
