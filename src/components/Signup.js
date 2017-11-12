import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import loadjs from 'loadjs';
import $ from 'jquery';
import Step1 from './Step1_signup';
import Step2 from './Step2_signup';
import Step3 from './Step3_signup';

function CheckForStep2(props) {
  if (props.first_name.length > 0 && props.last_name.length > 0 && props.email.length > 0 && props.password.length > 0) {
    return <Step2 triggerStateupdate={this.updateState}/>
  }
  return <div></div>
}

function CheckForStep3(props) {
  if (props.first_name !== "" && props.last_name !== "" && props.email !== "" && props.password !== "" && props.birthday !== "") {
    return <Step3 />
  }
  return <div></div>
}



class Signup extends Component {
  constructor(props){
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      'first_name': '',
      'last_name': '',
      'email': '',
      'password': '',
      'birthday': '',
      'phone': ''
    }
    this.updateState = this.updateState.bind(this);
  }

  // handleChange(e) {
  //   console.log(e.target);
  //   this.setState({temperature: e.target.value});
  // }

  updateState(e){
    this.setState({[e.target.id]: e.target.value},()=>{
      console.log(this.state);
    });
  }

  // componentDidMount(){
  //   $('.datepicker').pickadate({
  //       selectMonths: true,
  //       selectYears: 15,
  //       today: 'Today',
  //       clear: 'Clear',
  //       close: 'Ok',
  //       closeOnSelect: false
  //   });
  //
  // }
  render(){
    const stateProps = this.state
    return(
      <div style={{marginTop: 6 + 'em'}}>
        <div className="valign">
                <div className="container">
                   <div className="row">
                      <div className="col s12 m6 offset-m3">
                         <div className="card">
                            <div className="card-content">
                               <span className="card-title black-text">Sign Up</span>
                               <form>
                                 <Step1 triggerStateupdate={this.updateState}/>
                                 <CheckForStep2 {...stateProps}/>
                                 <CheckForStep3 {...stateProps} triggerStateupdate={this.updateState}/>
                               </form>
                            </div>
                            <div className="card-action">
                               <input type="submit" className="btn" value="Login"/>
                            </div>
                            <p className='center-align'>Already have an account? <Link to='/login'>Login</Link> here!</p>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
      </div>
    );
  }
}


export default Signup;
