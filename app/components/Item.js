var React = require('react');
var DragSource = require('react-dnd').DragSource;
var ItemTypes = require('../constants/ItemTypes');
var PropTypes = React.PropTypes;

var itemSource = {
  beginDrag: function (props) {
    return {
      listTitle: props.listTitle,
      value: props.value
    };
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

var Item = React.createClass({
  propTypes: {
    listTitle: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,

    // Injected by React DnD:
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired
  },

  render: function () {
    var isDragging = this.props.isDragging;
    var connectDragSource = this.props.connectDragSource;
    var value = this.props.value;

    return connectDragSource(
      <li style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }} className="list-group-item">{value}</li>
    )
  }
});

module.exports = DragSource(ItemTypes.ITEM, itemSource, collect)(Item);
