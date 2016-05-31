/**
 * Totop Component for uxcore
 * @author eternaslky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');
let React = require('react');
let ReactDOM = require('react-dom');

class Totop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showTotop: false
        }
    }

    componentDidMount() {
        let me = this;
        $(window).on("scroll.totop", function(e) {
            var y = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            if (y > me.props.distance && !me.state.showTotop) {
                me.setState({
                    showTotop: true
                })
            }
            else if (y <= me.props.distance && me.state.showTotop) {
                me.setState({
                    showTotop: false
                })
            }
        })
    }

    componentWillUnmount() {
        let me = this;
        clearTimeout(me.timer);
        $(window).off("scroll.totop");
    }

    /*
     * scroll method to action like jQuery animation.
     * @param element {DOM} scroll element
     * @param to {number} the final scrollTop you want
     * @param duration {number} scroll animation time (ms)
     */

    scrollTo(element, to, duration) {
        let me = this;
        if (duration <= 0) return;
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;

        me.timer = setTimeout(function() {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) return;
            me.scrollTo(element, to, duration - 10);
        }, 10);
    }

    handleGotopClick() {
        let me = this;
        me.scrollTo((document.body.scrollTop != 0 ? document.body : document.documentElement), me.props.to, me.props.duration);
    }

    render() {
        let me = this;
        let showCls = me.props.prefixCls
        return (
            <div className={classnames({
                [me.props.prefixCls]: true,
                [me.props.className]: !!me.props.className,
                [me.props.theme]: !!me.props.theme,
                "fn-clear": true
            })}>
              <div className={classnames({
                    "box gotop-box": true,
                    "show": me.state.showTotop
                })}>
                <a className="box-window btn" onClick={me.handleGotopClick.bind(me)}>
                  <span className="box-text">顶部</span>
                  <i className="kuma-icon kuma-icon-jiantou-copy box-icon"></i>
                </a>
              </div>
              <div className={classnames({
                  [me.props.prefixCls + "-other"]: true
              })}>
                  {me.props.children}
              </div>
            </div>
        );
    }
}

Totop.defaultProps = {
    prefixCls: 'kuma-totop',
    to: 10,
    duration: 600,
    distance: 30
};


// http://facebook.github.io/react/docs/reusable-components.html
Totop.propTypes = {
    prefixCls: React.PropTypes.string,
    className: React.PropTypes.string,
    to: React.PropTypes.number,
    distance: React.PropTypes.number,
    duration: React.PropTypes.number,
    theme: React.PropTypes.string
};

Totop.displayName = "Totop";

module.exports = Totop;
