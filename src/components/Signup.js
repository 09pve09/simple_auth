import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import loadjs from 'loadjs';
import $ from 'jquery';
import Step1 from './Step1_signup';
import Step2 from './Step2_signup';
import Step3 from './Step3_signup';

function CheckForStep2(props) {
  if (props.first_name !== "" && props.last_name !== "" && props.email !== "" && props.password !== "") {
    return <Step2 triggerStateUpdateRef={props.triggerStateUpdateRef} triggerStateResetRef={props.triggerStateResetRef}/>
  }
  return <div></div>
}

function CheckForStep3(props) {
  if (props.first_name !== "" && props.last_name !== "" && props.email !== "" && props.password !== "" && props.title !== "") {
    return <Step3 triggerStateUpdateRef={props.triggerStateUpdateRef} triggerStateResetRef={props.triggerStateResetRef}/>
  }
  return <div></div>
}

function CheckForSubmit(props) {
  if (props.first_name !== "" && props.last_name !== "" && props.email !== "" && props.password !== "" && props.title !== "" && props.phone !== "") {
    return <input type="submit" className="btn" value="Sign Up"/>
  }
  return <input type="submit" className="btn disabled" value="Sign Up"/>
}



class Signup extends Component {
  constructor(props){
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      'first_name': '',
      'last_name': '',
      'email': '',
      'password': '',
      'title': '',
      'phone': ''
    }
    this.updateState = this.updateState.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  updateState(e){
    this.setState({[e.target.id]: e.target.value},()=>{
      console.log(this.state);
    });
  }

  resetState(e){
    this.setState({title: '',phone: ''},()=>{
      console.log('done');
    });
  }

  render(){
    const stateProps = this.state;
    return(
      <div style={{marginTop: 6 + 'em'}}>
        <div className="valign">
                <div className="container">
                   <div className="row">
                      <div className="col s12 m6 offset-m3">
                         <div className="card">
                            <div className="card-content">
                               <span className="card-title black-text">Sign Up</span>
                               <form>
                                 <Step1 triggerStateupdate={this.updateState}/>
                                 <CheckForStep2 {...stateProps} triggerStateUpdateRef={this.updateState} triggerStateResetRef={this.resetState}/>
                                 <CheckForStep3 {...stateProps} triggerStateUpdateRef={this.updateState} triggerStateResetRef={this.resetState}/>
                               </form>
                            </div>
                            <div className="card-action">
                              <CheckForSubmit {...stateProps}/>
                            </div>
                            <p className='center-align'>Already have an account? <Link to='/login'>Login</Link> here!</p>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
      </div>
    );
  }
}


export default Signup;
