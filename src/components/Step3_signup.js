import React, { Component  } from 'react';

class Step3 extends Component {
  
  componentWillUnmount(){
    this.props.triggerStateResetRef()
  }

  render(){
    return(
      <div className="input-field s12">
          <input id="phone" type="tel" className="validate" onChange={this.props.triggerStateUpdateRef}/>
          <label for="phone">Phone Number</label>
      </div>
    );
  }
}

export default Step3;
