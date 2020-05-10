import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component{
  state = {
    persons : [
      {name : 'tofunmi', age:'23'},
      {name : 'ayomide', age : '27'},
      {name : 'omoyeni', age : '28'}
              ],
              
    showPersons :false
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
      const thispersons = this.state.persons;
      thispersons.splice(personIndex, 1);
      this.setState({persons: thispersons})
    }
    

    togglePersonsHandler = () => {
      //this picks the showPerson list object in the stata array
      const doesShow = this.state.showPersons;
      //this sets the state to yhe opposite of the currnt state 
      this.setState({showPersons: !doesShow})

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
                />
              })}
                            
              </div>
      );
    }


    return (
          <div className="App">
            <h1>i am a react app</h1>
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
