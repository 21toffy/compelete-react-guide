import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Todos from './Components/Todos';
import Header from './Components/Layout/header';
import AddNote from './Components/AddNote/AddNote';


class App extends Component{
  state = {
    persons : [
      {id:'nrfv', name : 'tofunmi', age:'23'},
      {id:'nrefvr', name : 'ayomide', age : '27'},
      {id:'nrnko', name : 'omoyeni', age : '28'}
              ],
              
    showPersons :false,


    notes : [
      {id: '1', owner:'tofunmi', title : 'my first note', note: '', date:'', pin:false},
      {id: '2', owner:'omoyeni', title : 'my Second note', note: '', date:'', pin:false},
      {id: '3', owner:'ayomide', title : 'my third note', note: '', date:'', pin:false}
    ]
  }

//pining or marking important notes
  markImportant = (id) => {
    this.setState({notes:this.state.notes.map(note =>{
      if(note.id===id){
        note.pin = !note.pin
      }
        return note;
    })});
  }
  //deleting a note
  deleteNote = (id) => {
    // console.log(id)
    this.setState({notes:[...this.state.notes.filter(note => note.id !== id)]})
  }
  
  switchNameHandler = (newName) =>{
    // alert('was clicked');
    this.setState( {
        persons : [
          {name : newName, age:'23'},
          {name : 'ayomide', age : '27'},
          {name : 'omoyeni okedeji', age : '28'}
        ]
      })
    }

    deleteStateHandler = (personIndex) => {
      //bad practice
      // const thispersons = this.state.persons;

      //this is an option
      // const thispersons = this.state.persons.slice();

      //this is also an option
      const thispersons = [...this.state.persons];
      thispersons.splice(personIndex, 1);
      this.setState({persons: thispersons})
    }
    

    togglePersonsHandler = () => {
      //this picks the showPerson list object in the stata array
      const doesShow = this.state.showPersons;
      //this sets the state to yhe opposite of the currnt state 
      this.setState({showPersons: !doesShow})
    }

    addNote = (title) => {
      const newNote = {
        id:4,
        title,
        pin:false 
      }

      this.setState({notes:[...this.state.notes, newNote]})
    }



  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border:'1px solid blue',
      padding:'8px'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
              <p>click on the button to hide</p>

              {this.state.persons.map((myperson, index) =>{
                return <Person
                click = {() => this.deleteStateHandler(index)}
                name = {myperson.name}
                age = {myperson.age}

                key = {myperson.id}
                />
              })}
                            
              </div>
      );
    }


    return (
          <div className="App">
            <Header />
            <div className = 'container'>

            <Todos todos = {this.state.notes} markImportant={this.markImportant} deleteNote = {this.deleteNote}/>

            <AddNote addNote = {this.addNote} />
            </div>



            <button 
            style = {style}
            onClick = {this.togglePersonsHandler}>switch name</button>

            
           
             {persons} 
              
          </div>
        );
    // return React.createElement('div', {className:'App'}, React.createElement('h1',{className:'App'}  ,'hi i\'m a react app '));
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>i am a react app</h1>
//     </div>
//   );
// }

export default App;
