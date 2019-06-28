import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getFriends } from "../actions";

export class FriendsList extends Component {
    render() {
        return (
            <div>
                <p>SOME TEXT</p>
            </div>
        )
    }
}

const mapStateToProps = ({ gasPrices, fetchingData }) => ({
    gasPrices,
    fetchingData
  });
  
  export default withRouter(
    connect(
      mapStateToProps,
      { getFriends }
    )(FriendsList)
  );
  
