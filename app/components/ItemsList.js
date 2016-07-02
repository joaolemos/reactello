var React = require('react');
var Item = require('./Item');
var DropTarget = require('react-dnd').DropTarget;
var ItemTypes = require('../constants/ItemTypes');

const boxTarget = {
  drop: function(props, monitor) {
    //switch(monitor.getItem(), props.title);
    var itemValue = monitor.getItem().value;
    var oldList = monitor.getItem().listTitle;
    var newList = props.title;
    props.switch(oldList, newList, itemValue);
    return { title: props.title, key: props.key };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

function ItemsList(props) {
  var items = props.data.map(function(item) {
    return (
      <Item value={item.value} key={item.id} listTitle={props.title}></Item>
    );
  });

  var connectDropTarget = props.connectDropTarget;

  return connectDropTarget(
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
        <form onSubmit={props.onAddItem}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="New item..."
              value={props.newItemValue}
              onChange={props.onChangeItemValue} />
              <span className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                </button>
              </span>
            </div>
        </form>
      </div>
    </div>
  )
}

module.exports = DropTarget(ItemTypes.ITEM, boxTarget, collect)(ItemsList);
