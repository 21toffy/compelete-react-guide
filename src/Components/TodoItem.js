import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Todo.css';




export class TodoItem extends Component {
    render(){
        const {title, id } = this.props.myTodos;
        return(
            <div className = 'note'>
                <input className = 'checkBox' type = 'checkbox' onChange ={this.props.markImportant.bind(this, id)} />{' '}
                {title} 
                <button className ="deleteButton" onClick ={this.props.deleteNote.bind(this, id)} >X</button>
            </div>            
        )
    }
}

TodoItem.propTypes = {
    myTodos: PropTypes.object.isRequired
}

export default TodoItem