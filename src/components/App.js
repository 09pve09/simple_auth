import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';


const App =  () => {
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
};



export default App;
