import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AllOrders from './AllOrders';

const Orders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("/api/order/allOrders");
            setOrders(result.data);
            //console.log(result.data);
        }
        fetchData();
    }, []);

    return (
        <div className='orders'>
            <Tabs>
                <TabList>
                    <Tab>All Orders</Tab>
                </TabList>

                <TabPanel>
                    <h3 className='accountContentTitle'>All Orders</h3>
                    {orders.length === 0 ? (<h4 className='noProducts'>There are currently no orders!</h4>) : (
                        <div>
                            {orders.map((order) => (
                                <AllOrders order={order} key={order._id} />
                            ))}
                        </div>
                    )}
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Orders