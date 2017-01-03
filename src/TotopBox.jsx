const classnames = require('classnames');
const React = require('react');

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
        <span className="box-text">{props.label}</span>
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
  className: React.PropTypes.string,
  label: React.PropTypes.string,
  icon: React.PropTypes.element,
  onClick: React.PropTypes.func,
};

TotopBox.defaultProps = {
  className: '',
  label: '',
  icon: null,
  onClick: () => {},
};

module.exports = TotopBox;
