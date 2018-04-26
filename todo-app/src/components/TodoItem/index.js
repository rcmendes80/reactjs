import React from "react";
import { Component } from "react";
import "./index.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  componentDidMount = () => {
    this.setState({ isChecked: this.props.item.completed })
  }

  toggleCheckedState = e => {
    const { onChangeHandler, index } = this.props;
    this.setState({ isChecked: !this.state.isChecked });

    onChangeHandler(index, e.target.checked);
  };

  render() {
    const { index, item } = this.props;
    const { isChecked } = this.state;
    return (
      <tr className={"todo-row-table"}>
        <td>{index}</td>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.due}</td>
        <td>
          <input
            key={index}
            name={index}
            type="checkbox"
            checked={isChecked}
            onChange={this.toggleCheckedState}
          />
        </td>
      </tr>
    );
  }
}

export default TodoItem;
