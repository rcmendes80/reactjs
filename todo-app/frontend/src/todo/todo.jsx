import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm';

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: ''
        }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this. handleClear.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value} )
    }

    handleClear() {
        this.setState({...this.state, description:''} )
    }

    handleSearch() {

    }

    handleAdd() {

    }

    render() {
        return (
            <div role='form' >
                <PageHeader title="Todo" subtitle="tasks"></PageHeader>
                <TodoForm
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleClear={this.handleClear}
                    handleSearch={this.handleSearch}
                    handleChange={this.handleChange}/>
            </div>
        )
    }
}