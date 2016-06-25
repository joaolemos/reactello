var React = require('react');

function Item(props) {
  return (
    <li className="list-group-item">{props.value}</li>
  )
}

module.exports = Item;
