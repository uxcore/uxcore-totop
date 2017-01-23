---

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-totop.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-totop
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-totop.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-totop
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-totop.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-totop?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-totop.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-totop
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-totop.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-totop#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-totop.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-totop.svg
[sauce-url]: https://saucelabs.com/u/uxcore-totop


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

## TotopBox props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|label|string|require|||
|icon|React.Element|require||推荐使用iconfont,见demo|
|onClick|function|optional|||
