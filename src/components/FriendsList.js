import React from 'react'
// 👉 1- FriendsList renders several Friend components, import Friend
import Friend from "./Friend"

export default function FriendsList(props) {
  // 👉 2- What data does FriendsList need to do its job? Use destructuring
  
  const {friends,changeStatus}=props
  //console.log(friends)
  return (
    <div className='list-friends container'>
      {friends.map(x=>{
        return <Friend  friend={x}  key={x.id} changeStatus={changeStatus}/>
        //key={x.id}使得每一个part都不同，便于之后对每个part的操作
      })}
      {/* 👉 3- We need to loop over the data rendering a Friend as we go */}
      {/* Each friend is going to need a `key` prop and also some other prop with data */}
    </div>
  )
}
