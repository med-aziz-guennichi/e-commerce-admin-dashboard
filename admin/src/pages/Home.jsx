import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Dashboard from '../components/Dashboard';
import Products from '../components/Products';
import { useSelector } from 'react-redux';
import Users from '../components/Users';
import Orders from '../components/Orders';

const Home = () => {

    const user = useSelector((state) => state.user.currentUser);

    return (
        <>
            <Header />
            <main className='mainContainer'>
                <div className='account'>
                    <h3 className="accountTitle">Admin Panel</h3>
                   {user ? <p className="accountSubTitle">Admin:{user.username}</p>:<p className="accountSubTitle">Admin</p>} 
                    <Tabs>
                        <TabList>
                            <Tab>Dashboard</Tab>
                            <Tab>Houses</Tab>
                            <Tab>Users</Tab>
                            <Tab>Orders</Tab>
                        </TabList>

                        <TabPanel>
                            <h3 className='accountContentTitle'>Dashboard</h3>
                            <Dashboard />
                        </TabPanel>
                        <TabPanel>
                            <h3 className='accountContentTitle'>Houses</h3>
                            <Products />
                        </TabPanel>
                        <TabPanel>
                            <h3 className='accountContentTitle'>Users</h3>
                            <Users />
                        </TabPanel>
                        <TabPanel>
                            <h3 className='accountContentTitle'>Orders</h3>
                            <Orders />
                        </TabPanel>
                    </Tabs>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home