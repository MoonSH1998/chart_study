import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; //React-Router import
import App1 from './bar1/App';
class App extends Component {
  render() {
      return (
        <div>
        <BrowserRouter>
          <Route path="./bar1/App" exact component ={App1} />
        </BrowserRouter>
        </div>
      );
  }
}


export default App;