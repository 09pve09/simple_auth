import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render(){
    return(
      <div style={{marginTop: 6 + 'em'}}>
        <div className="valign">
                <div className="container">
                   <div className="row">
                      <div className="col s12 m6 offset-m3">
                         <div className="card">
                            <div className="card-content">
                               <span className="card-title black-text">Login</span>
                               <form>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <input id="email" type="email" className="validate"/>
                                      <label for="email">Email</label>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <input id="password" type="password" className="validate"/>
                                      <label for="password">Password</label>
                                    </div>
                                  </div>
                               </form>
                            </div>
                            <div className="card-action">
                               <input type="submit" className="btn" value="Login"/>
                            </div>
                            <p className='center-align'>Don't have an account? <Link to='/signup'>Sign Up</Link> here!</p>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
      </div>
    );
  }
}


export default Login;
