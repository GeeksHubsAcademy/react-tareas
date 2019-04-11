import React, { Component } from 'react';
import './board.scss';
import Task from '../components/task.jsx';

class Board extends Component {
  state = {
    newTaskText: '',

    tasks: [
      {
        text: 'aprender jsx',
      },
      {
        text: 'aprender react',
      },
      {
        text: 'aprender react',
      },
    ],
  };
  addTask = text => {
    let newTask = {
      text,
    };
    this.setState({
      tasks: [newTask, ...this.state.tasks],
      newTaskText: '',
    });
  };
  handleChange = ev => {
    this.setState({ newTaskText: ev.target.value });


  };
  handleKeyUp = (ev) =>  {
      if (ev.keyCode === 13) {
          this.addTask(ev.target.value);
      }
  }
  render() {
    return (
      <div className='board'>
        <header>
          <input type='text' placeholder='add task' onKeyUp={this.handleKeyUp}  onChange={this.handleChange} value={this.state.newTaskText} />
          {this.state.newTaskText}
        </header>
        <main className='tasks'>
          {this.state.tasks.map(task => (
            <Task text={task.text} />
          ))}
        </main>
      </div>
    );
  }
}

export default Board;
