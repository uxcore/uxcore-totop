const classnames = require('classnames');
const React = require('react');

const ToTopDefaultBox = props => (
  <div
    className={classnames({
      'box gotop-box': true,
      show: props.show,
    })}
  >
    <a className="box-window btn" onClick={props.onClick}>
      <span className="box-text">顶部</span>
      <i className="kuma-icon kuma-icon-jiantou-copy box-icon" />
    </a>
  </div>
);

ToTopDefaultBox.propTypes = {
  show: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

ToTopDefaultBox.defaultProps = {
  show: false,
  ooClick: () => {},
};

export default ToTopDefaultBox;
