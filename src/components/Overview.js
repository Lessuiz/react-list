import React from 'react';

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { tasks, onDelete } = this.props;
    return (
      <div className="overview columns">
        <div className="column list">
          {tasks.map((value, index) => {
            return (
              <div id={index} key={index} className="column task">
                <input
                  type="checkbox"
                  className="checkbox"/>
                <p className="task-text">
                  {index + 1}. {value}
                </p>
                <i
                  className="fa fa-trash"
                  onClick={onDelete}>
                </i>
              </div>
            )
          })}
        </div>
      </div>
    );
  };
};
