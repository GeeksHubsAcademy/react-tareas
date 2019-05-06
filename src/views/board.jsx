import React, { Component } from 'react';
import './board.scss';
import Task from '../components/task.jsx';

import { connect } from 'react-redux';

export class Board extends Component {
  state = {
    newTaskText: '',
  };

  addTask = text => {
    text = text.trim();
    if (text) {
      let newTask = {
        id: Date.now(),
        createAt: new Date(),
        text,
        completed: false,
      };

      this.props.dispatch({ type: 'ADD_TODO', newTaskToAdd: newTask });
    }
  };

  handleChange = ev => {
    this.setState({ newTaskText: ev.target.value });
  };

  handleKeyUp = ev => {
    if (ev.keyCode === 13) {
      this.addTask(ev.target.value);
      this.setState({newTaskText:''});
    }
  };

  render() {
    return (
      <div className='board'>
        <header>
          <input type='text' placeholder='add task' onKeyUp={this.handleKeyUp} onChange={this.handleChange} value={this.state.newTaskText} />
        </header>
        <main className='tasks'>
          {this.props.tasks.map(task => (
            <Task data={task}  key={task.id} />
          ))}
        </main>
      </div>
    );
  }
}

export default connect(
  state => ({ tasks: state.tasks }),
  dispatch => ({ dispatch }),
)
(Board);
