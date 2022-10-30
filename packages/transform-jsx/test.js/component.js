'use strict';

var Button = function Button(props) {
  return React.createElement(
    'div',
    null,
    'this is ',
    props.text,
    ', color ',
    props.color
  );
};
var Test = function Test() {
  var text = 'button';
  var color = 'red';
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'this is h1'
    ),
    React.createElement(
      'div',
      null,
      'this is div'
    ),
    React.createElement(Button, { text: text, color: color })
  );
};

render(document.getElementById('#app'), React.createElement(Test, null));