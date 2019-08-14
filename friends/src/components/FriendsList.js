import React from "react";
import { connect } from "react-redux";
import { getData, deleteFriend } from "../actions";
import Friend from "./Friend";

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.getData();
}


    deleteFriend = id => {
    
  this.props.deleteFriend(id);

    }

  render() {
    console.log("friendslist log for props:", this.props);

    return (
      <div>
        {this.props.friends.map(friend => {
          return (
            <div
              style={{
                bacgroundColor: "rgba(0, 0, 0,.03)",
                border: "solid 2px red ",
                margin: "5%",
                width: "400px",
                height: "200px",
                marginLeft: '35%'
                


              }}
            >
              <Friend key={friend.id} friend={friend} />
              <button onClick={()=> this.deleteFriend(friend.id)}>Delete</button>
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
