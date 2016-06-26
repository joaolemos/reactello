var React = require('react');
var ItemsList = require('./ItemsList');
var HTML5Backend = require('react-dnd-html5-backend');
var DragDropContext = require('react-dnd').DragDropContext;

var Dashboard = React.createClass({
  lastId: 0,
  getInitialState: function() {
    return {
      todo: [],
      doing: [],
      done: [],
      newTodoItem: '',
      newDoingItem: '',
      newDoneItem: ''
    }
  },

  handleAddTodoItem: function(event) {
    var todoList = this.state.todo;
    if(this.state.newTodoItem !== '') {
      todoList.push({
        id: this.lastId++,
        value: this.state.newTodoItem
      });
      this.setState({
        todo: todoList
      })
    }
  },

  handleAddDoingItem: function(event) {
    var doingList = this.state.doing;
    if(this.state.newDoingItem !== '') {
      doingList.push({
        id: this.lastId++,
        value: this.state.newDoingItem
      });
      this.setState({
        doing: doingList
      })
    }
  },

  handleAddDoneItem: function(event) {
    var doneList = this.state.done;
    if(this.state.newDoneItem !== '') {
      doneList.push({
        id: this.lastId++,
        value: this.state.newDoneItem
      });
      this.setState({
        done: doneList
      })
    }
  },

  handleChangeTodoItem: function(event) {
    this.setState({
      newTodoItem: event.target.value
    });
  },

  handleChangeDoingItem: function(event) {
    this.setState({
      newDoingItem: event.target.value
    });
  },

  handleChangeDoneItem: function(event) {
    this.setState({
      newDoneItem: event.target.value
    });
  },

  switch: function(oldList, newList, itemValue) {
    var listUpdate = this.state[newList.toLowerCase()];
    var listRemove = this.state[oldList.toLowerCase()];
    var idx = listRemove.indexOf({ value: itemValue});
    listRemove.splice(idx, 1);
    listUpdate.push({
      id: this.lastId++,
      value: itemValue
    })
  },

  render: function() {
    return (
      <div className="container">
        <h1>Reactello</h1>
        <div className="row">
          <div className="col-sm-2">
            <ItemsList
              title="Todo"
              data={this.state.todo}
              newItemValue={this.state.newTodoItem}
              onChangeItemValue={this.handleChangeTodoItem}
              onAddItem={this.handleAddTodoItem}
              switch={this.switch} />
          </div>
          <div className="col-sm-2">
            <ItemsList
              title="Doing"
              data={this.state.doing}
              newItemValue={this.state.newDoingItem}
              onChangeItemValue={this.handleChangeDoingItem}
              onAddItem={this.handleAddDoingItem}
              switch={this.switch} />
          </div>
          <div className="col-sm-2">
            <ItemsList
              title="Done"
              data={this.state.done}
              newItemValue={this.state.newDoneItem}
              onChangeItemValue={this.handleChangeDoneItem}
              onAddItem={this.handleAddDoneItem}
              switch={this.switch} />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = DragDropContext(HTML5Backend)(Dashboard);
