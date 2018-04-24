import React, { Component } from "react";
import "./App.css";
import TodoList from "../TodoList";

const items_test = [
  {
    name: "Teste 1",
    completed: true,
    due: "21/04/18 16:00"
  },
  {
    name: "Teste 2",
    completed: false,
    due: "22/09/18 23:23"
  },
  {
    name: "Teste 3",
    completed: true,
    due: "16/12/18 13:10"
  },
  {
    name: "Teste 4",
    completed: false,
    due: "16/12/18 13:10"
  },
  {
    name: "Teste 5",
    completed: true,
    due: "16/02/18 13:10"
  },
  {
    name: "Teste 6",
    completed: true,
    due: "06/05/18 13:10"
  }

];

class App extends Component {
  state = {
    items:[]
  };

  componentDidMount = () => {
    this.loadTodoList();
  };

  loadTodoList = () => {
    fetch("http://localhost:9090/todos")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ items: data });
      });
  };

  onChangeCompleteState = (index, isChecked) => {
    let updatedItems = [...this.state.items];
    updatedItems[index].completed = isChecked;
    this.setState({ items: updatedItems });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo List:</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <TodoList
          items={this.state.items}
          onChangeCompleteState={this.onChangeCompleteState}
        />

        <button onClick={this.loadTodoList}>Load</button>
      </div>
    );
  }
}

export default App;
