import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
// import loadjs from 'loadjs';
import $ from 'jquery';
import Step1 from './Step1_signup';
import Step2 from './Step2_signup';
import Step3 from './Step3_signup';

class SignUpForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      'first_name': '',
      'last_name': '',
      'email': '',
      'password': '',
      'title': '',
      'phone': ''
    }
  }

  onSubmit(values){
    console.log(values);
  }

  render(){
    // const stateProps = this.state;
    const {
      first_name,
      last_name,
      email,
      password,
      title,
      phone,
      handleSubmit
    } = this.props
    // const { handleSubmit } = this.props;
    return(
      <div style={{marginTop: 6 + 'em'}}>
        <div className="valign">
                <div className="container">
                   <div className="row">
                      <div className="col s12 m6 offset-m3">
                         <div className="card">
                           <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <div className="card-content">
                               <span className="card-title black-text">Sign Up</span>

                                 <Step1 triggerStateUpdate={this.updateState}/>
                                 {/* <CheckForStep2 {...stateProps} triggerStateUpdateRef={this.updateState} triggerStateResetRef={this.resetState}/>
                                 <CheckForStep3 {...stateProps} triggerStateUpdateRef={this.updateState} triggerStateResetRef={this.resetState}/> */}
                                 {first_name && last_name && email && password && (
                                  <Step2/>
                                 )}
                                 {title && (
                                  <Step3/>
                                 )}
                            </div>
                            <div className="card-action">
                              {/* <CheckForSubmit {...stateProps}/> */}
                              <button type="submit" className="btn waves-effect waves-light">Submit</button>
                            </div>
                          </form>
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


function validate(values){
  const errors = {};

  if (!values.first_name){
    errors.first_name = "Enter a first name"
  };
  if (!values.last_name){
    errors.last_name = "Enter a last name"
  };
  if (!values.email){
    errors.email = "Enter an email"
  };
  if (!values.password){
    errors.password = "Enter a password"
  };
  if (!values.title){
    errors.title = "Enter a job title"
  };
  if (!values.phone){
    errors.phone = "Enter a phone number"
  };

  return errors;
}

const selector = formValueSelector('valuesForSignUpForm');

SignUpForm = connect(state => {
  const { first_name, last_name, email, password, title, phone } = selector(state, 'first_name', 'last_name', 'email', 'password', 'title', 'phone');
  console.log('state:',first_name, last_name, email, password, title, phone);
  return {
    first_name,
    last_name,
    email,
    password,
    title,
    phone
  }
})(SignUpForm)

export default reduxForm({
  validate: validate,
  form: 'valuesForSignUpForm'
})(SignUpForm);
