var React = require('react');
var ItemsList = require('./ItemsList');

function Dashboard() {
  var itemsData = [{id: 1, value: "This is an item"}, {id: 2, value: "This is another"}, {id: 3, value: "And another, woo"}];

  return (
    <div>
      <h2>Dashboard</h2>
      <ItemsList data={itemsData} />
    </div>
  )

}

module.exports = Dashboard;
