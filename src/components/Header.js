import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser, fetchUser } from '../actions';
import $ from 'jquery';


class Header extends Component {

  componentWillReceiveProps(){
    $( document ).ready(function() {
       $('.tooltipped').tooltip({delay: 50});
    });

  }

  initiateLogout(){
    // console.log('preparing to logout the user...');
    this.props.logoutUser( () => {
      // console.log('logout done');
      this.props.fetchUser()
    })
  }

  getInfo(){
    return (
      this.props.auth.first_name + " "
      +this.props.auth.last_name + ". "
      + this.props.auth.title+". Phone: "
      +this.props.auth.phone
    )

  }


  renderContent(){
    switch (this.props.auth){
      case null:
        return 'Processing...';
      case false:
        return (<li><Link to="/login">Login</Link></li>)
      default:
        return (
          <div>
            <li><a title='&#013' className="tooltipped" data-position="bottom" data-delay="50" data-tooltip={this.getInfo()}>My Info</a></li>
            <li><a onClick={()=>{this.initiateLogout()}}>Logout</a></li>
          </div>
        )
    }
  }



  render(){
    return(
      <div>
        <nav>
          <div className="nav-wrapper teal darken-1">
            <Link to="/" className="brand-logo"> Simple Auth</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }){
  if(auth && auth.status){
    return { auth: auth.data };
  }
  return { auth: auth };
}

export default connect(mapStateToProps, { logoutUser, fetchUser })(Header);
