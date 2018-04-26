import React from "react";
import TodoItem from "../TodoItem";
import "./index.css";

const TodoList = ({ items, onChangeCompleteState }) => (
  <table className={"todo-list-table"}>
    <thead>
      <tr>
        <th>This is the todo list:</th>
      </tr>
      <tr>
        <th>No</th>
        <th>ID</th>
        <th>Name</th>
        <th>Due</th>
        <th>Is completed</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <td colSpan="4">Total of items:</td>
        <td>{items.length}</td>
      </tr>
    </tfoot>
    <tbody>
      {items.map((item, index) => {
        //console.log("List["+index+"]: " + item.completed);
        return (
          <TodoItem
            key={index}
            item={item}
            onChangeHandler={onChangeCompleteState}
            index={index}
          />
        )
      })}
    </tbody>
  </table>
);

export default TodoList;
