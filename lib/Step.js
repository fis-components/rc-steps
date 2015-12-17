'use strict';

var React = require('react');

var Step = React.createClass({
  displayName: 'Step',

  render: function render() {
    var props = this.props;
    var status = props.status || 'wait';
    var prefixCls = props.prefixCls;
    var iconPrefix = props.iconPrefix;
    var maxWidth = props.maxDescriptionWidth;
    var iconName = props.icon ? props.icon : 'check';
    var icon = !props.icon && status !== 'finish' ? React.createElement(
      'span',
      { className: prefixCls + '-icon' },
      props.stepNumber
    ) : React.createElement('span', { className: prefixCls + '-icon ' + iconPrefix + 'icon ' + iconPrefix + 'icon-' + iconName });
    return React.createElement(
      'div',
      { className: prefixCls + '-item ' + (props.stepLast ? prefixCls + '-item-last ' : '') + prefixCls + '-status-' + status + (props.icon ? ' ' + prefixCls + '-custom' : ''), style: { width: props.tailWidth } },
      !props.stepLast ? React.createElement(
        'div',
        { className: prefixCls + '-tail' },
        React.createElement('i', null)
      ) : '',
      React.createElement(
        'div',
        { className: prefixCls + '-head' },
        React.createElement(
          'div',
          { className: prefixCls + '-head-inner' },
          icon
        )
      ),
      React.createElement(
        'div',
        { className: prefixCls + '-main', style: { maxWidth: maxWidth } },
        React.createElement(
          'div',
          { className: prefixCls + '-title' },
          props.title
        ),
        props.description ? React.createElement(
          'div',
          { className: prefixCls + '-description' },
          props.description
        ) : ''
      )
    );
  }
});

module.exports = Step;