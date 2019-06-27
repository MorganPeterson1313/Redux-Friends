import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';
import Friend from './Friend';

class FriendsList extends React.Component {
    componentDidMount() {
 this.props.getData();

    }
    render() {
        console.log("friendslist log:", this.props.friends)
  
        return(
<div>
{this.props.friends.map(friend => {
return <Friend key={friend.id} friend={friend}/>

}
    
    
    
    
    )


}
</div>
        )
    }

}


const mapStateToProps = state => ({
    friends: state.friends,
    fetchingData: state.fetchingData
  });



export default connect(
      mapStateToProps,
      { getData }
    )(FriendsList);