import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import { logout } from '../redux/apiCalls.js';

const Header = () => {

    const user = useSelector((state) => state.user.currentUser);
    const quantity = useSelector(state=>state.cart.quantity)

    const dispatch = useDispatch();

    const logoutHandler = (e) => {
        e.preventDefault();
        logout(dispatch);
    }

    return (
        <div className='header'>
            <div className="headerTop">
                <div className="headerTopLinks">
                    {
                        user ? (
                            <>
                                <Link to='/account'>Account: {user.username}</Link>
                                <Link to='/cart'>Your Cart({quantity})</Link>
                                <span className='logout' onClick={logoutHandler}>Logout</span>
                            </>
                        ) : (
                            <>
                                <Link to='/'>Account: Guest</Link>
                                <Link to='/login'>Login / Register</Link>
                            </>
                        )
                    }
                </div>
            </div>
            <div className="headerBottom">
                <div className="headerLogo">
                    <NavLink to='/' className='headerLogoLink'>
                        <h2 className="headerLogoTitle">Guest House</h2>
                        <h4 className="headerLogoTitle">Get Your House online</h4>
                    </NavLink>
                </div>
                <div className="headerNav">
                    <ul>
                        <li>
                            <NavLink to='/' className='headerNavLink'>Home</NavLink>
                        </li>
                        <li>
                            <a href='/#men' className='headerNavLink'>Village</a>
                        </li>
                        <li>
                            <a href='/#women' className='headerNavLink'>Mountain</a>
                        </li>
                        <li>
                            <a href='/#kids' className='headerNavLink'>Beach</a>
                        </li>
                        <li>
                            <NavLink to='/products' className='headerNavLink'>All Houses</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to='/' className='headerNavLink'>Explore</NavLink>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header