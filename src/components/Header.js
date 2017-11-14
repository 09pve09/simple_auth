import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser, fetchUser } from '../actions';



class Header extends Component {

  initiateLogout(){
    console.log('preparing to logout the user...');
    this.props.logoutUser( () => {
      console.log('logout done');
      this.props.fetchUser()
    })
  }


  renderContent(){
    switch (this.props.auth){
      case null:
        return 'Processing...';
      case false:
        return (<li><Link to="/login">Login</Link></li>)
      default:
        return (<li><a onClick={()=>{this.initiateLogout()}}>Logout</a></li>)
    }
  }



  render(){
    return(
      <div>
        <nav>
          <div className="nav-wrapper">
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
  return { auth: auth };
}

export default connect(mapStateToProps, { logoutUser, fetchUser })(Header);
