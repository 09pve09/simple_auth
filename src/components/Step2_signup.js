import React, { Component  } from 'react';
import { Field, change } from 'redux-form';
import $ from 'jquery';

class Step2 extends Component {
  renderTitleField(field){
    console.log(field.input.value);

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

  componentWillUnmount(){
    console.log('Umnounting...11111');
    // dispatch(change('SignUpForm', 'title', ''))
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
