import React, { Component  } from 'react';
import { Field } from 'redux-form';

class Step1 extends Component {
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
        {field.meta.error}
      </div>
    )
  }

  render(){

    return(
      <div>
        <div className="row">
          <div className="input-field col s6">
            <Field
              label='First Name'
              type="text"
              name="first_name"
              component={this.renderTitleField}
            />
          </div>
          <div className="input-field col s6">
            <Field
              label='Last Name'
              type="text"
              name="last_name"
              component={this.renderTitleField}
            />
          </div>
         </div>
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
      </div>
    );
  }
}


export default Step1;
