const classnames = require('classnames');
const React = require('react');

class TotopBox extends React.Component {

  render() {
    let me = this;
    let iconClass = 'box-icon';
    let iconPropClass = me.props.icon && me.props.icon.props && me.props.icon.props.className;
    if (iconPropClass) {
      iconClass = classnames('box-icon', {[iconPropClass]: !!iconPropClass});
    }
    return (<div className={classnames({
      'box': true,
      [me.props.className]: !!me.props.className
    })} onClick={me.props.onClick.bind(me)}>
      <div className="box-window">
        <span className="box-text">{me.props.label}</span>
        {
          me.props.icon && React.cloneElement(me.props.icon, {
            className: iconClass
          })
        }
      </div>
    </div>)
  }
//<span className="box-icon">{}</span>
}

TotopBox.displayName = 'TotopBox';

TotopBox.propTypes = {
  className: React.PropTypes.string,
  label: React.PropTypes.string,
  icon: React.PropTypes.element,
  onClick: React.PropTypes.func
};

TotopBox.defaultProps = {
  className: '',
  label: '',
  icon: null,
  onClick: () => {}
};

module.exports = TotopBox;
