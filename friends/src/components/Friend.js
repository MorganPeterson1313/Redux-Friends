import React from "react";

const Friend = props => {
  return <div style ={{color:'red', fontSize: '30px'}} >

                <section>
               <strong>Name:</strong> {props.friend.name}
               </section>
               <section>
               <strong>Email:</strong> {props.friend.email}
               </section>
  
  
                </div>
};

export default Friend;
