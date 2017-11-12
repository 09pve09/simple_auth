import React, { Component  } from 'react';
import $ from 'jquery';

class Step2 extends Component {

  componentDidMount(){
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 15,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false
    });

  }

  render(){
    return(
      <div>
         <input id='birthday' type="text" placeholder='Birthday' className="datepicker" onChange={this.props.triggerStateupdate}/>
      </div>
    );
  }
}

export default Step2;
