import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";
import './App.scss';

// class App extends Component {
//   render() {
//     return <div>
           
//     </div> 


//   }
// }

ReactDOM.render(
  <Header />, 
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
