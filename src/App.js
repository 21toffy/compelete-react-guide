import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component{
  state = {
    persons : [
      {name : 'tofunmi', age:'23'},
      {name : 'ayomide', age : '27'},
      {name : 'omoyeni', age : '28'}
    ]
  }


  render(){
    return (
          <div className="App">
            <h1>i am a react app</h1>
            <button>switch name</button>
            <p>this is really working!!!</p>
            <Person name = {this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}/>
            <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}>how do i display this deail</Person>
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
