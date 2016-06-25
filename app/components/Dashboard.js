var React = require('react');
var ItemsList = require('./ItemsList');

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <ItemsList />
    </div>
  )

}

module.exports = Dashboard;
