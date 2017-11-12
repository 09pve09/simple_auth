import React, { Component  } from 'react';

class Step1 extends Component {

  render(){
    return(
      <div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="first_name"
              type="text"
              className="validate"
              onChange={this.props.triggerStateupdate}
            />
            <label for="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input
              id="last_name"
              type="text"
              className="validate"
              onChange={this.props.triggerStateupdate}
            />
            <label for="last_name">Last Name</label>
          </div>
         </div>
         <div className="row">
           <div className="input-field col s12">
             <input
               id="email"
               type="email"
               className="validate"
               onChange={this.props.triggerStateupdate}
             />
             <label for="email">Email</label>
           </div>
         </div>
         <div className="row">
           <div className="input-field col s12">
             <input
               id="password"
               type="password"
               className="validate"
               onChange={this.props.triggerStateupdate}
              //  onChange = {event => this.setState({ password: event.target.value })}
             />
             <label for="password">Password</label>
           </div>
         </div>
         {/* <input type="submit" className="btn" onClick={()=>this.printProps()} value='PRINT PROPS'/> */}
      </div>
    );
  }
}

export default Step1;
