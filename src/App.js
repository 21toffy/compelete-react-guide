import React, {Component} from 'react';
import './App.css';


class App extends Component{
  render(){
    return React.createElement('div', {className:'App'}, React.createElement('h1',{className:'App'} ,'hi i\'m a react app '));
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
