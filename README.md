---

## uxcore-totop [![Dependency Status](http://img.shields.io/david/uxcore/uxcore-totop.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-totop) [![devDependency Status](http://img.shields.io/david/dev/uxcore/uxcore-totop.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-totop#info=devDependencies) 

## TL;DR

uxcore-totop ui component for react

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-totop
$ cd uxcore-totop
$ npm install
$ gulp server
```

## Usage

```javascript
<Totop>
    <div className="block1">了解我们</div>
    <div className="block2"><i className="kuma-icon kuma-icon-comment"></i></div>
</Totop>
```

## demo
http://uxcore.github.io/

## API

## Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|prefixCls|string|optional|"kuma-totop"|不想使用 kuma 主题时使用|
|className|string|optional|-|额外的顶级类名|
|to|number|optional|10|回到顶部时据顶端距离，单位 px|
|distance|number|optional|30|向下滑多少距离出现回到顶部|
|duration|number|optional|600|动画持续时间|
|theme|string|optional|-|默认为方形，另提供 "lcircle" 和 "mcircle" 两个选项|
|children|react element|optional|除回到顶部按钮外的其他元素，用户自由定义|
