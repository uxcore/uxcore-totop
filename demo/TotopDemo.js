/**
 * Totop Component Demo for uxcore
 * @author eternaslky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');

let Totop = require('../src');

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
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
        this.state = {
        }
    }

    render() {
        console.log(mockData);
        return (
            <div>
                <Totop>
                  <div className="box">
                    <div className="box-window">
                      <span className="box-text">评价</span>
                      <i className="kuma-icon kuma-icon-shoucang1 box-icon"></i>
                    </div>
                  </div>
                </Totop>
                {mockData.map((item, index) => {
                    return <div key={index} className="demoDiv" style={{background: item.color}}>{"第" + item.index + "个区块"}</div>
                })}
            </div>
        );
    }
};

module.exports = Demo;
