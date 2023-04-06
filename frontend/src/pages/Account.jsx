import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ChangeImage from '../components/ChangeImage';
import ChangeInfo from '../components/ChangeInfo';
import ChangePassword from '../components/ChangePassword';
import CloseAccount from '../components/CloseAccount';
import Orders from '../components/Orders';
import UserInfo from '../components/UserInfo';

const Account = () => {

    const user = useSelector((state) => state.user.currentUser);

    const navigate = useNavigate();

    useEffect(() => {
        !user && navigate('/');
    }, [navigate, user]);

    return (
        <div className='account'>
            <h3 className="accountTitle">My Account</h3>
            <p className="accountSubTitle">Welcome back {user?.username}</p>
            <Tabs>
                <TabList>
                    <Tab>Info</Tab>
                    <Tab>My Orders</Tab>
                    <Tab>Change Info</Tab>
                    <Tab>Change Password</Tab>
                    <Tab>No Entry</Tab>
                </TabList>

                <TabPanel>
                    <h3 className='accountContentTitle'>Info</h3>
                    <div className="accountContentGroups">
                        <UserInfo user={user} />
                    </div>
                </TabPanel>
                <TabPanel>
                    <h3 className='accountContentTitle'>My Orders</h3>
                    <div className="ordersDiv">
                        <Orders />
                    </div>
                </TabPanel>
                <TabPanel>
                    <h3 className='accountContentTitle'>Change Info</h3>
                    <div className="accountContentGroups">
                        <div className="formSignDiv updateInfo">
                            <ChangeInfo />
                        </div>
                        <div className="formSignDiv updateImage">
                            <ChangeImage />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h3 className='accountContentTitle'>Change Passwords</h3>
                    <div className="formSignDiv updatePassword">
                        <ChangePassword user={user}/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h3 className='accountContentTitle'>Close account</h3>
                    <div className="accountContentGroups">
                        <CloseAccount />
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Account