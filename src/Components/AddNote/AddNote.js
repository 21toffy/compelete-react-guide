import React, {Component} from 'react';
import './AddNote.css';


class AddNote extends Component {
    state = {
        title: ''
    }

    onChange = (e) =>this.setState({title:e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addNote(this.state.title);
        this.setState({title:''});
    }
    render(){
        return(
            <div>

            <form onSubmit = {this.onSubmit} className = 'formClass' >
                <input
                type = 'text'
                name = 'title'
                placeholder = 'write a personnalized note...'
                className = 'titleInput'
                label = 'Note Title'
                value = {this.state.title}
                onChange = {this.onChange}
                />
                
                <input
                type = 'submit'
                value = 'Submit'
                className = 'pinCheckBox'
                />
            </form>
            </div>
        )
    }
}




export default AddNote