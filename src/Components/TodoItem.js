import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    render(){
        return(
            <div>
                {this.props.myTodos.title}
            </div>
        )
    }
}

TodoItem.propTypes = {
    myTodos: PropTypes.object.isRequired
}

export default TodoItem