import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends Component {
  renderTitleField(field){
    console.log(field);
    return (
      <div>
        <input
          type={field.type}
          id={field.name}
          className="validate"
          {...field.input}
        />
        <label htmlFor={field.name}>{field.label}</label>
        <span className="pink-text text-darken-3">{field.meta.touched ? field.meta.error : ''}</span>
      </div>
    )
  }

  render(){
    return(
      <div style={{marginTop: 3 + 'em'}}>
        <div className="valign">
                <div className="container">
                   <div className="row">
                      <div className="col s12 m6 offset-m3">
                         <div className="card blue-grey lighten-5">
                            <div className="card-content">
                               <span className="card-title black-text">Login</span>
                               <form>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <Field
                                        label='Email'
                                        type='email'
                                        name="email"
                                        component={this.renderTitleField}
                                      />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <Field
                                        label='Password'
                                        type='password'
                                        name="password"
                                        component={this.renderTitleField}
                                      />
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

function validate(values){
  const errors = {};

  if (!values.email){
    errors.email = "Enter an email"
  };
  if(values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = 'Invalid email address'
  }
  if (!values.password){
    errors.password = "Enter a password"
  };

  return errors;
}


export default reduxForm({
  validate: validate,
  form: 'valuesForSignUpForm',
})(LoginForm);
