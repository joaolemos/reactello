var React = require('react');
var ItemsList = require('./ItemsList');

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
              onAddItem={this.handleAddTodoItem} />
          </div>
          <div className="col-sm-2">
            <ItemsList
              title="Doing"
              data={this.state.doing}
              newItemValue={this.state.newDoingItem}
              onChangeItemValue={this.handleChangeDoingItem}
              onAddItem={this.handleAddDoingItem} />
          </div>
          <div className="col-sm-2">
            <ItemsList
              title="Done"
              data={this.state.done}
              newItemValue={this.state.newDoneItem}
              onChangeItemValue={this.handleChangeDoneItem}
              onAddItem={this.handleAddDoneItem} />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Dashboard;
