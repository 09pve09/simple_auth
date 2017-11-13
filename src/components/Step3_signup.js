import React, { Component  } from 'react';
import { Field } from 'redux-form';
class Step3 extends Component {
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
      <div className="input-field s12">
        <Field
          label='Phone Number'
          type="number"
          name="phone"
          component={this.renderTitleField}
        />
      </div>
    );
  }
}

export default Step3;
