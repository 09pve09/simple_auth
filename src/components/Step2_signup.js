import React, { Component  } from 'react';
import { Field } from 'redux-form';
import $ from 'jquery';

class Step2 extends Component {
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

  componentWillUnmount(){
    console.log('Umnounting...')
  };

  render(){
    return(
      <div className="row">
        <div className="input-field col s12">
          <Field
            label='Job Title'
            type="text"
            name="title"
            component={this.renderTitleField}
          />
        </div>
      </div>
    );
  }
}

export default Step2;
