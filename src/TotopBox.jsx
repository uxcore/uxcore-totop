import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const TotopBox = (props) => {
  let iconClass = 'box-icon';
  const iconPropClass = props.icon && props.icon.props && props.icon.props.className;
  if (iconPropClass) {
    iconClass = classnames('box-icon', {
      [iconPropClass]: !!iconPropClass,
    });
  }
  return (
    <div
      className={classnames({
        box: true,
        [props.className]: !!props.className,
      })}
      onClick={props.onClick.bind(this)}
    >
      <div className="box-window">
        <span className="box-text">
          {props.label}
        </span>
        {
          props.icon && React.cloneElement(props.icon, {
            className: iconClass,
          })
        }
      </div>
    </div>
  );
};

TotopBox.displayName = 'TotopBox';

TotopBox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

TotopBox.defaultProps = {
  className: '',
  label: '',
  icon: null,
  onClick: () => {},
};

export default TotopBox;
