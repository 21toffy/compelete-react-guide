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
      }
      )
    }
    nameChangeHandler = (event) => {
      this.setState( {
        person: [
          {name : 'tofunmi', age:23},
          {name : event.target.value, age : 27},
          {name : 'omoyeni', age : 28}
        ]
      }
      )
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

    return (
          <div className="App">
            <h1>i am a react app</h1>
            <button 
            style = {style}
            onClick = {this.togglePersonsHandler}>switch name</button>
            {
              //this is an if statement that displays some data if the showPersons is true
              this.state.showPersons === true ?
              <div>
              <p>click on the button to hide</p>
              <Person 
              name = {this.state.persons[0].name} 
              age={this.state.persons[0].age}
              change = {this.nameChangeHandler}
              />
              <Person 
              name = {this.state.persons[1].name} 
              age = {this.state.persons[1].age}
              change = {this.nameChangeHandler}
              />
              <Person
              name = {this.state.persons[2].name} 
              age = {this.state.persons[2].age}
              click = {this.switchNameHandler}
              change = {this.nameChangeHandler}
              >
                how do i display this deail
              </Person>
              
              </div>
              //this is the else statement that displays an alternative if the sowPersons state returns as false
              : 
              <p>click on the button to reveal</p>
            }
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
