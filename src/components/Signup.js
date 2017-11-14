import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { createUser } from '../actions';
import { Redirect } from 'react-router';


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
    this.props.createUser(values, () => {
      this.props.history.push('/');
    });
  }

  checkForStep2(){
    if( this.props.first_name && this.props.last_name && this.props.email && this.props.password){
      return true;
    }
    return false;
  }

  checkForStep3(){
    if( this.props.first_name &&this.props.last_name && this.props.email && this.props.password && this.props.title){
      return true;
    }
    return false;
  }

  btnClassSubmit(){
    let defaultClasses = 'btn waves-effect waves-light'
    if(this.checkForStep3() && this.props.phone){
      return defaultClasses;
    }
    return defaultClasses + " disabled";
  }

  checkPermission(){
    switch (this.props.auth){
      case null:
        return 'loading...';
      case false:
        return (<div>{ this.renderComponent() }</div>)
      default:
        return <Redirect to='/'/>;
    }
  }

  renderComponent(){
    const { handleSubmit } = this.props;
    return(
      <div style={{marginTop: 3 + 'em'}}>
        <div className="valign">
                <div className="container">
                   <div className="row">
                      <div className="col s12 m6 offset-m3">
                         <div className="card blue-grey lighten-5">
                           <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <div className="card-content">
                               <span className="card-title black-text">Sign Up</span>
                                 <Step1 triggerStateUpdate={this.updateState}/>
                                 {this.checkForStep2() ? <Step2/> : null}
                                 {this.checkForStep3() ? <Step3/> : null}
                            </div>
                            <div className="card-action">
                              <button type="submit" className={this.btnClassSubmit()}>Submit</button>
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

  render(){
    return(
      this.checkPermission()
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
  if(values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = 'Invalid email address'
  }
  if (!values.password){
    errors.password = "Enter a password"
  };
  if (values.password && values.password.length < 6){
    errors.password = "Password should be at least 6 characters, sorry:("
  };
  if (!values.title){
    errors.title = "Enter a job title"
  };
  if (!values.phone){
    errors.phone = "Enter a phone number"
  };
  if (values.phone && values.phone.length != 10){
    errors.phone = "Enter a proper phone number(ex.1234567890)"
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

function mapStateToProps({ auth }){
  return {auth: auth};
}

export default reduxForm({
  validate: validate,
  form: 'valuesForSignUpForm',
})(
  connect(mapStateToProps, {createUser})(SignUpForm)
);
