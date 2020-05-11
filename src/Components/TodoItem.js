import React, { Component } from 'react';


export class TodoItem extends Component {
    render(){
        return(
            <div>
                {this.props.myTodos.title}
            </div>
        )
    }
}

export default TodoItem