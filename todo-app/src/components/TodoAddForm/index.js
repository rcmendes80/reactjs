import React, { Component } from 'react';
import './index.css';

class TodoAddForm extends Component {
    render() {
        return (
            <div className="todo-add-form-box">
                <label>Title</label>
                <input type="text" placeholder="Define todo title here" />
                <label>Due</label>
                <input type="datetime-local" />
                <label>Completed</label>
                <input type="checkbox" />
            </div>
        );
    }
}

export default TodoAddForm;