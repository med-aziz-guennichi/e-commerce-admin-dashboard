import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AllUsers from './AllUsers';
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("/api/user/allUsers");
            setUsers(result.data);
            //console.log(result.data);
        }
        fetchData();
    }, []);

    return (
        <div className='users'>
            <Tabs>
                <TabList>
                    <Tab>All Users</Tab>
                </TabList>

                <TabPanel>
                    <h3 className='accountContentTitle'>All Users</h3>
                    {users.length === 0 ? (<h4 className='noProducts'>There are currently no users!</h4>) : (
                        <div className='d-flex'>
                            {users.map((user) => (
                                <AllUsers user={user} key={user._id} />
                            ))}
                        </div>
                    )}
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Users