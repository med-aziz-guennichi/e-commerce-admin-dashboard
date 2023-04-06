import React from 'react'

const UserInfo = ({ setOpen, user }) => {

    const url = 'http://localhost:3000/';
    
    return (
        <div className='productInfoContainer'>
            <div className="productInfoWrapper">
                <h4 className="closeProductInfo" onClick={() => setOpen(false)}>Close</h4>
                <div className="productInfoGroups">
                    <div className="productInfoFlex">
                        <div className="productInfoGroup">
                            <p className="userTtitle">Username: <span>{user.username}</span></p>
                        </div>
                        <div className="productInfoGroup">
                            <p className="userTtitle">E-mail: <span>{user.email}</span></p>
                        </div>
                        <div className="productInfoGroup">
                            <p className="userTtitle">Country: <span>{user.country}</span></p>
                        </div>
                        <div className="productInfoGroup">
                            <p className="userTtitle">City: <span>{user.city}</span></p>
                        </div>
                        <div className="productInfoGroup">
                            <p className="userTtitle">Address: <span>{user.address}</span></p>
                        </div>
                        <div className="productInfoGroup">
                            <p className="userTtitle">Phone: <span>{user.phone}</span></p>
                        </div>
                    </div>
                    <div className="productInfoFlex">
                        <div className="productInfoGroup userImage">
                            <span>User Image</span>
                            <img src={`${url}./assets/uploads/${user.image}`} alt={user.username} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo