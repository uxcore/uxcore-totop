/**
 * Totop Component for uxcore
 * @author eternaslky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');
const React = require('react');
const ReactDOM = require('react-dom');
const addEventListener = require('rc-util/lib/Dom/addEventListener');
const Animate = require('uxcore-animate');
const Box = require('./TotopBox');
const DefaultBox = require('./ToTopDefaultBox');
const util = require('./util');

class Totop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showTotop: false,
    };
  }

  componentDidMount() {
    const me = this;
    me.renderComponent();
    me.scrollHandler = addEventListener(window, 'scroll', () => {
      const y = util.getWindowScrollY();
      if (y > me.props.distance && !me.state.showTotop) {
        me.setState({
          showTotop: true,
        });
      } else if (y <= me.props.distance && me.state.showTotop) {
        me.setState({
          showTotop: false,
        });
      }
    });
  }

  componentDidUpdate() {
    this.renderComponent();
  }

  componentWillUnmount() {
    const me = this;
    clearTimeout(me.timer);
    if (me.scrollHandler) {
      me.scrollHandler.remove();
    }
    me.removeContainer();
  }

  getContainer() {
    if (!this.container) {
      const getContainer = this.props.getContainer || util.defaultGetContainer;
      this.container = getContainer();
    }
    return this.container;
  }

  handleGotopClick() {
    const me = this;
    me.scrollTo(
        me.props.to, me.props.duration, me.props.onTotopEnd
    );
  }

  removeContainer() {
    if (this.container) {
      const container = this.container;
      ReactDOM.unmountComponentAtNode(container);
      container.parentNode.removeChild(container);
      this.container = null;
    }
  }


  /**
   * scroll method to action like jQuery animation.
   * @param element {DOM} scroll element
   * @param to {number} the final scrollTop you want
   * @param duration {number} scroll animation time (ms)
   */

  scrollTo(to, duration, callback) {
    const me = this;
    if (duration <= 0) {
      if (callback) {
        callback();
      }
      return;
    }
    const y = util.getWindowScrollY();
    const difference = to - y;
    const perTick = (difference / duration) * 10;
    me.timer = setTimeout(() => {
      const targetScrollY = y + perTick;
      util.setWindowScrollY(targetScrollY < to ? to : targetScrollY);
      me.scrollTo(to, duration - 10, callback);
    }, 10);
  }

  getComponent() {
    const me = this;
    return (<div
      className={classnames({
        [me.props.prefixCls]: true,
        [me.props.className]: !!me.props.className,
        [me.props.theme]: !!me.props.theme,
        'fn-clear': true,
      })}
    >
      <Animate showProp="show" transitionName="fade">
        <DefaultBox
          show={me.state.showTotop}
          onClick={() => {
            this.handleGotopClick();
          }}
        />
      </Animate>
      {me.props.children}
    </div>);
  }

  renderComponent() {
    const me = this;
    const component = me.getComponent();
    ReactDOM.unstable_renderSubtreeIntoContainer(me, component, me.getContainer(),
      function fallback() {
        me.component = this;
      }
    );
  }


  render() {
    return null;
  }

}

Totop.defaultProps = {
  prefixCls: 'kuma-totop',
  to: 10,
  duration: 600,
  distance: 30,
  onTotopEnd: () => {},
};


// http://facebook.github.io/react/docs/reusable-components.html
Totop.propTypes = {
  prefixCls: React.PropTypes.string,
  className: React.PropTypes.string,
  to: React.PropTypes.number,
  distance: React.PropTypes.number,
  duration: React.PropTypes.number,
  onTotopEnd: React.PropTypes.func,
  getContainer: React.PropTypes.func,
};

Totop.displayName = 'Totop';

Totop.Box = Box;

module.exports = Totop;
