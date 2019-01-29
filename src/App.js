import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.scss'
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import TodoDetails from './components/todoDetails/TodoDetails';
import Add from './components/add/Add';

class App extends Component {

  state = {};

  componentDidMount() {
    console.log('program started');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("program updated");
    console.log(prevProps);
    console.log(prevState);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/" exact component={Dashboard}/>
          <Route path="/todo/:id" component={TodoDetails}/>
          <Route path="/add" component={Add}/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
