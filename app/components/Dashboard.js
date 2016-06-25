var React = require('react');
var ItemsList = require('./ItemsList');

function Dashboard() {
  var itemsData = [{id: 1, value: "This is an item"}, {id: 2, value: "This is another"}, {id: 3, value: "And another, woo"}];

  return (
    <div className="container">
      <h1>Reactello</h1>
      <div className="row">
        <div className="col-sm-2">
          <ItemsList title="Todo" data={itemsData} />
        </div>
        <div className="col-sm-2">
          <ItemsList title="Doing" data={itemsData} />
        </div>
        <div className="col-sm-2">
          <ItemsList title="Done" data={itemsData} />
        </div>
      </div>
    </div>
  )

}

module.exports = Dashboard;
