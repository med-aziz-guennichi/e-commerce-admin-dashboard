import React, { useState } from 'react'
import UserInfo from './UserInfo';

const AllUsers = ({user}) => {

  const [open, setOpen] = useState(false);

  const url = 'http://localhost:3000/';

  return (
    <div className='allUsers'>
      <div className="usersGroups">
        <div className="userGroup">
          <div className="userHeader">
            <img src={`${url}./assets/uploads/${user.image}`} alt={user.username} />
          </div>
          <div className="userBody">
            <h4 className="username">{user.username}</h4>
          </div>
          <div className="userFooter">
            <p className="userInfo" onClick={() =>setOpen(true)}>View all Info</p>
          </div>
        </div>
      </div>
      {open && <UserInfo setOpen={setOpen} user={user} />}
    </div>
  )
}

export default AllUsers