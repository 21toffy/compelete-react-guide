import React , { Component } from 'react';
import TodoItem from 'TodoItem';



class Todos extends Component {
    render(){
        return this.props.todos.map((myTodos) => (
            <TodoItem myTodos = {myTodos} />
        ));
    }
}

export default Todos;