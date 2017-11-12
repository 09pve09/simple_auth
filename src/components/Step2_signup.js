import React, { Component  } from 'react';
import $ from 'jquery';

class Step2 extends Component {

  componentWillUnmount(){
    this.props.triggerStateResetRef()
  }

  render(){
    return(
      <div className="row">
        <div className="input-field col s12">
          <input
            id="title"
            type="text"
            className="validate"
            onChange={this.props.triggerStateUpdateRef}
          />
          <label for="title">Job Title</label>
        </div>
      </div>
    );
  }
}

export default Step2;
