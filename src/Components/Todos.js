import React , { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';



class Todos extends Component {
    render(){
        return this.props.todos.map((myTodos) => (
            <TodoItem key = {myTodos.id} myTodos = {myTodos} />
        ));
    }
}



Todos.propTypes = {
    todos: PropTypes.array.isRequired 
}

export default Todos;