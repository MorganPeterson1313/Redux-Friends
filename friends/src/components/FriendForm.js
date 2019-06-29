import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { getFriend } from '../actions';
class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      id: undefined,
      age:'',
      email:'',
      savingFriend: false,
      deleteFriend: false
    };
  }


//  addFriend = event => {
//     event.preventDefault();
componentDidMount() {
    this.addFriend = e => {
          // e.preventDefault;
    const friend = this.state;
    this.props.getFriend(friend);
  }
}
//      const friend = this.state;
//         getFriend(friend);
// }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    

    return (
      <div >
        <form onSubmit={this.addFriend}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="email"
            value={this.state.email}
            name="email"
          />
          <button onClick={()=> this.addFriend()}>Add Friend</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  fetchingData: state.fetchingData,
  id: state.id
  });
  
  export default connect(
      mapStateToProps,
    { getFriend}
  )(FriendForm);