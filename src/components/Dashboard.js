import _ from 'lodash';
import React, { Component  } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
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
            <div className="data-obj card blue-grey darken-1">
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

  render(){
    return(
      <div>
        <h4>Welcome, username! Here is some random dataset for you :)</h4>
        <div className='row'>
            { this.renderData() }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {timezones: state.data};
}


export default connect(mapStateToProps, { fetchData: fetchData })(Dashboard);
