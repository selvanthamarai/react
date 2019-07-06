// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import App2 from './App2.js';
// import { SIGABRT } from 'constants';

// // function App() {

// class App extends Component {

//   state =
//     {
//       name:"sai",
//      number:27
//     }

//     sendMethod=(dynamic)=>{
//       this.setState({
//         name: (dynamic)
//       })
//     }

// mymethod=(dynamic)=>{
// this.setState({
//   number:(dynamic)
// })
// }


//   render() {
//     return (

//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             {this.state.name}<br></br>{this.state.number}
//           </p>
//           <button onClick={()=>{this.sendMethod(); this.mymethod()}} >send</button>
      
         
         
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
             
//           </a>
        
//         </header>
//         <App2 name="hello" method={this.sendMethod} method1={this.mymethod}/>
//       </div>

//     );
//   }
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from './User.js';
import Home from './Home.js';



function App() {
  return (
    <Router>
       <div>
        <Route path="/" exact component={Home} />
         <Route path="/user/" component={User} />
         
      </div>
    </Router>
  );
}

export default App;