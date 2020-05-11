import React , { Component } from 'react';

class Todos extends Component {
    render(){
        console.log(this.props.todos)
        return this.props.todos.map((myTodos) => (
        <h3>{myTodos.title}</h3>
        ));
    }
}

export default Todos;