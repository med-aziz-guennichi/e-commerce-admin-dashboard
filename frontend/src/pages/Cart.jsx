import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItems from '../components/CartItems'

const Cart = () => {

  const user = useSelector((state) => state.user.currentUser);

    const navigate = useNavigate();

    useEffect(() => {
        !user && navigate('/');
    }, [navigate, user]);

  return (
    <div className='cart'>
        <CartItems />
    </div>
  )
}

export default Cart