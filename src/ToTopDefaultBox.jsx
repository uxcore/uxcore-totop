import classnames from 'classnames';
import React from 'react';
import Icon from 'uxcore-icon';


const ToTopDefaultBox = props => (
  <div
    className={classnames({
      'box gotop-box': true,
      show: props.show,
    })}
  >
    <a className="box-window btn" onClick={props.onClick}>
      <span className="box-text">顶部</span>
      <Icon name="fanhuidingbu" className="box-icon" />
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
