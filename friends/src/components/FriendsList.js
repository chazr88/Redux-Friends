import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getFriends } from "../actions";

export class FriendsList extends Component {
    componentDidMount() {
        this.props.getFriends();
      }
    render() {
        console.log(this.props.friends)
        return (
            <div>
                {this.props.friends.map(friend => (
                    <p>{friend.name}</p>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends
  });
  
  export default withRouter(
    connect(
      mapStateToProps,
      { getFriends }
    )(FriendsList)
  );
  
