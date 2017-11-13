import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent(){
    switch (this.props.auth){
      case null:
        return 'Processing...';
      case false:
        return (<li><Link to="/login">Login</Link></li>)
      default:
        return (<li><Link to="/logout">Logout</Link></li>)
    }
  }

  render(){
    return(
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo"> Simple Auth</a>
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

export default connect(mapStateToProps)(Header);
