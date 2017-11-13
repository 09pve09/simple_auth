import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';


class App extends Component {

  componentDidMount(){
    this.props.fetchUser()
  }

  render() {
    return(
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/login' component={ Login } />
            <Route exact path='/signup' component={ Signup } />
            <Route exact path='/' component={ Dashboard } />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};



export default connect(null, actions)(App);
