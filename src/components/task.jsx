import React from 'react';
import './task.scss';
import {connect} from 'react-redux'

export class Task extends React.Component {
  state = {
    newText: this.props.data.text,
  };

  handleChange = ev => {
    this.setState({ newText: ev.target.value });
  };
  isEnter = ev => {
    if (ev.keyCode === 13) {
      this.edit(ev);
    }
  };
  // edit = ev => {
  //   let editedTask = {
  //     ...this.props.data,
  //     text: this.state.newText,
  //   };
  //   this.props.updateTask(editedTask);
  //   ev.target.blur();
  // };
  markAsCompleted = () => {
    // let editedTask = {
    //   ...this.props.data,
    //   completed: !this.props.data.completed,
    // };
    // this.props.updateTask(editedTask);
    this.props.complete(this.props.data.id );


  };
  delete = () => {
    this.props.delete(  this.props.data.id  )

  }
  render() {
    return (
      <div className={'task ' + (this.props.data.completed ? 'completed' : '')}>
        {/* <input type='text' value={this.state.newText} onChange={this.handleChange} /> */}

        <div className="text">{this.props.data.text}</div>

        <div className='actions '>
          <button className="delete" onClick={this.delete}>delete</button>
          <button className="complete" onClick={this.markAsCompleted}>completed</button>
        </div>
      </div>
    );
  }
}


const TaskConnected = connect(
  null,
  dispatch => ({
    delete: id => dispatch({ type: 'DELETE_TASK', id }),
    complete: id => dispatch({ type: 'TOGGLE_COMPLETED_TASK', id }),
  }),
)(Task);


export default TaskConnected;