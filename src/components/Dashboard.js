import _ from 'lodash';
import React, { Component  } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import { Redirect } from 'react-router';
import $ from 'jquery';

class Dashboard extends Component {
  componentDidMount(){

    this.props.fetchData();

    $( document ).ready(function() {
      $(".data-obj").hover(
        function () {
          $(this).addClass("z-depth-5");
        },
        function () {
          $(this).removeClass("z-depth-5");
        }
      );
    });

  }

  renderData(){
    return _.map(this.props.timezones, timezone => {
      return(
          <div key={timezone.id} className="col s12 m4">
            <div className="data-obj card blue-grey darken-1" style={{height: 13+'em'}}>
              <div className="card-content white-text">
                <span className="card-title">{timezone.name}</span>
                <p>Offset: {timezone.offset}</p>
                <p>Abbreviation: {timezone.abbr}</p>
                <p>{timezone.text}</p>
              </div>
            </div>
          </div>
      );
    });
  }

  renderComponent(){
    return(
        <div className='row'>
            <h4>Welcome, {this.props.auth.first_name} {this.props.auth.last_name}! Here is some random dataset for you :)</h4>
            { this.renderData() }
        </div>
    )
  }

  preLoader(){
    return(
    <div style={{marginTop: 3 + 'em'}}>
      <div className="valign">
              <div className="container">
                 <div className="row">
                    <div className="col s12 m6 offset-m3">
                      <div className="progress">
                         <div className="indeterminate"></div>
                      </div>
                    </div>
                 </div>
              </div>
          </div>
    </div>
    )
  }

  checkPermission(){
    console.log('checkPermission', this.props.auth);
    switch (this.props.auth){
      case null:
        return this.preLoader();
      case false:
        return <Redirect to='/login'/>;
      default:
        return (<div>{ this.renderComponent() }</div>)
    }
  }

  render(){
    return(
      this.checkPermission()
    )
  }
}

function mapStateToProps({data, auth}){
  console.log("DASHBOARD's PROPS:", {data, auth});
  if(auth && auth.status){
    return {timezones: data, auth: auth.data};
  }
  return {timezones: data, auth: auth};
}


export default connect(mapStateToProps, { fetchData: fetchData })(Dashboard);
