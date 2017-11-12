import React, { Component  } from 'react';

class Step3 extends Component {
  render(){
    return(
      <div className="input-field s12">
          <input id="icon_telephone" type="tel" className="validate"/>
          <label for="icon_telephone">Telephone</label>
      </div>
    );
  }
}

export default Step3;
