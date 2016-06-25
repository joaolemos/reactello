var React = require('react');
var Item = require('./Item');

function ItemsList(props) {
  var items = props.data.map(function(item) {
    return (
      <Item value={item.value} key={item.id}></Item>
    );
  });

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{props.title}</h3>
      </div>
      <div className="panel-body">
        <ul className="list-group">
          {items}
        </ul>
      </div>
      <div className="panel-footer">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="New item..." />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">
                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

module.exports = ItemsList;
