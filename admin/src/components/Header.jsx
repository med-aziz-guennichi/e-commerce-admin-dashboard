import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../redux/apiCalls';

const Header = () => {

    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logoutHandler = (e) => {
        e.preventDefault();
        logout(dispatch);
    }

    useEffect(() => {
        !user && navigate('/login');
    }, [user, navigate]);

    return (
        <div className='header'>
            <div className="headerTop">
                <div className="headerLogo">
                    <NavLink to='/' className='headerLogoLink'>
                        <h2 className="headerLogoTitle">GUEST HOUSE</h2>
                        <h4 className="headerLogoTitle">GET YOUR HOUSE ONLINE</h4>
                    </NavLink>
                </div>
                <div className="headerTopLinks">
                    <span className='logout' onClick={logoutHandler}>Logout</span>
                </div>
            </div>
        </div>
    )
}

export default Header