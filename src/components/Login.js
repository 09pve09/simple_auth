import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { findUser, authUser } from '../actions';


class LoginForm extends Component {

  renderTitleField(field){
    // console.log(field);
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

  btnClassSubmit(){
    let defaultClasses = 'btn waves-effect waves-light'
    if(this.props.email && this.props.password){
      return defaultClasses;
    }
    return defaultClasses + " disabled";
  }



  onSubmit(values){
    // console.log('SUBMITTING ', values);
    this.props.findUser(values, () => {
      // console.log('done finding user');
      // console.log('trying to auth user');
      // console.log(this.props.user);
      if(typeof this.props.user === 'object'){
        this.props.authUser(this.props.user,()=>{
          // console.log('done');
        })
      }
      else{
        // console.log('failed');
      }
    });
  }

  showLoginError(){
    switch(this.props.login_error){
      case true:
        // console.log('TRUE');
        return ( <span className="pink-text text-darken-3">Couldnt Find a User.Wrong email/password</span>)
      default:
        return ''
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
                            <div className="card-content">
                               <span className="card-title black-text">Login</span>
                               <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                                  {this.showLoginError()}
                                  <div className="card-action">
                                    <button type="submit" className={this.btnClassSubmit()}>Login</button>
                                  </div>
                               </form>
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

  render(){
    return(
      this.checkPermission()
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

const selector = formValueSelector('valuesForLoginForm');

LoginForm = connect(state => {
  const { email, password } = selector(state, 'email', 'password');
  // console.log('state:',email, password);
  return {
    email,
    password
  }
})(LoginForm)

function mapStateToProps({ auth, user }){
  // console.log(user);
  return {auth: auth, login_error: user, user: user};
}

export default reduxForm({
  validate: validate,
  form: 'valuesForLoginForm',
})(
  connect(mapStateToProps, {findUser, authUser})(LoginForm)
);
