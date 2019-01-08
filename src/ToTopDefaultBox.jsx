import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'uxcore-icon';
import i18n from './i18n';


const ToTopDefaultBox = ({ show, onClick, locale }) => (
  <div
    className={classnames({
      'box gotop-box': true,
      show,
    })}
  >
    <a className="box-window btn" onClick={onClick}>
      <span className="box-text">
        {i18n[locale].top}
      </span>
      <Icon name="fanhuidingbu" className="box-icon" />
    </a>
  </div>
);

ToTopDefaultBox.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func,
  locale: PropTypes.string,
};

ToTopDefaultBox.defaultProps = {
  show: false,
  onClick: () => { },
  locale: 'zh-cn',
};

export default ToTopDefaultBox;
