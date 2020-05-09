import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component{
  state = {
    persons : [
      {name : 'tofunmi', age:'23'},
      {name : 'ayomide', age : '27'},
      {name : 'omoyeni', age : '28'}
    ]
  }

  
  switchNameHandler = (newName) =>{
    // alert('was clicked');
    this .setState( {
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
            onClick = {this.switchNameHandler.bind(this, 'daddy')}>switch name</button>
            <p>this is really working!!!</p>
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
