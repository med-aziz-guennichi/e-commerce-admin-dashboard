import React from 'react'

const UserInfo = ({user}) => {

    return (
        <>
            <div className="accountContentGroupsLeft">
                <div className="accountContentGroup">
                    <span className="accountLight">Username: </span>
                    <span className="accountBold">{user?.username} </span>
                </div>
                <div className="accountContentGroup">
                    <span className="accountLight">Email: </span>
                    <span className="accountBold">{user?.email} </span>
                </div>
                <div className="accountContentGroup">
                    <span className="accountLight">Country: </span>
                    <span className="accountBold">{user?.country} </span>
                </div>
                <div className="accountContentGroup">
                    <span className="accountLight">City: </span>
                    <span className="accountBold">{user?.city} </span>
                </div>
                <div className="accountContentGroup">
                    <span className="accountLight">Address: </span>
                    <span className="accountBold">{user?.address} </span>
                </div>
                <div className="accountContentGroup">
                    <span className="accountLight">Phone: </span>
                    <span className="accountBold">{user?.phone} </span>
                </div>
            </div>
            <div className="accountContentGroupsRight">
                <img src={`./assets/uploads/${user?.image}`} alt={user?.username} />
            </div>
        </>
    )
}

export default UserInfo