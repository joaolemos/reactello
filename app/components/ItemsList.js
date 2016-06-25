var React = require('react');
var Item = require('./Item');

function ItemsList(props) {
  var items = props.data.map(function(item) {
    return (
      <Item value={item.value} key={item.id}></Item>
    );
  });

  return (
    <div className="itemsList">
      {items}
    </div>
  )
}

module.exports = ItemsList;
