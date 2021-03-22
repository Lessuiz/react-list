import React from 'react';
import Overview from './Overview';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      task: "",
      taskList: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.onTaskSubmit = this.onTaskSubmit.bind(this);
  };

  handleChange(e) {
    this.setState({
      task: e.target.value,
    });
  };

  handleDelete(e) {
    const index = e.target.parentElement.id;
    let newList = [...this.state.taskList]
    newList.splice(index, 1)
    this.setState({
      taskList: newList
    });
  };

  onTaskSubmit() {
    this.setState({
      task: "",
      taskList: this.state.taskList.concat(this.state.task)
    });
  };

  render() {
    const { task, taskList } = this.state;

    return (
      <div className="main">
        <div className="columns is-centered is-multiline">
          <div className="column is-one-quarter"></div>
          <div className="first-column column is-half">
            <div className="field">
              <label className="label">Task</label>
              <div className="control">
                <input
                  value={task}
                  type="text"
                  className="input"
                  placeholder="new task"
                  onChange={this.handleChange}/>
              </div>
            </div>
            <div className="control">
              <button
                className="button is-link"
                onClick={this.onTaskSubmit}>
                Add Task
              </button>
            </div>
          </div>
          <div className="column is-one-quarter"></div>
          <div className="second-column column is-half">
            <Overview onDelete={this.handleDelete} tasks={taskList}/>
          </div>
        </div>
      </div>
    );
  };
};
