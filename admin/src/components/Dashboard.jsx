import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'

const Dashboard = () => {

    const [users, setUsers] = useState(0); //default is 0
    const [products, setProducts] = useState(0); //default is 0
    const [orders, setOrders] = useState(0); //default is 0

    const [sum, setSum] = useState(0); //default is 0

    useEffect(() => {

        const fetchData = async () => {
            //first way
            const resultUsers = await axios.get('/api/user/countUsers');
            //console.log(resultUsers);
            setUsers(resultUsers.data);

            const resultProducts = await axios.get('/api/product/all/countProducts');
            //console.log(resultProducts);
            setProducts(resultProducts.data);

            //second way
            const result = await axios.get("/api/order/allOrders");
            setOrders(result.data);
            console.log(result.data);

            //sum
            const resultTotalSum = await axios.get('/api/order/sum/getAllSum');
            setSum(resultTotalSum.data);
            //console.log(resultTotalSum.data);
        }

        fetchData();

    }, []);

    return (
        <div className='dashboard'>
            <div className="dashboardGroups">
                <div className="dashboardGroup">
                    <h4>Total Amount:</h4>
                    <span className='badge'>TND {sum[0]?.count}</span>
                </div>
                <div className="dashboardGroup">
                    <h4>Total Users:</h4>
                    <span className='badge'>{users?.count}</span>
                </div>
                <div className="dashboardGroup">
                    <h4>Total Houses:</h4>
                    <span className='badge'>{products?.count}</span>
                </div>
                <div className="dashboardGroup">
                    <h4>Total Orders:</h4>
                    <span className='badge'>{orders?.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Dashboard