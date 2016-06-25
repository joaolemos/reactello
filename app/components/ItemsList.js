var React = require('react');
var Item = require('./Item');

function ItemsList() {
  return (
    <div className="itemsList">
      <Item value="this is an item"></Item>
      <Item value="this is another"></Item>
    </div>
  )
}

module.exports = ItemsList;
