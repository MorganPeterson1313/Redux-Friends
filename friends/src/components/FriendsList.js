import React from "react";
import { connect } from "react-redux";
import { getData, deleteFriend } from "../actions";
import Friend from "./Friend";

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.getData();

    this.deleteFriend = e => {
       
  const friend = this.props.friends;
  this.props.deleteFriend(friend);

    }


  }
  render() {
    console.log("friendslist log:", this.props.friends);

    return (
      <div>
        {this.props.friends.map(friend => {
          return (
            <div
              style={{
                bacgroundColor: "rgba(0, 0, 100%, 80%)",
                border: "solid 2px red ",
                margin: "5%",
                width: "400px",
                height: "200px",
                marginLeft: '35%'
                


              }}
            >
              <Friend key={friend.id} friend={friend} />
              <button onClick={()=> this.deleteFriend}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  fetchingData: state.fetchingData
});

export default connect(
  mapStateToProps,
  { getData, deleteFriend }
)(FriendsList);
