import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/apiCalls';

const Login = () => {

    const user = useSelector((state) => state.user.currentUser);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const loginHandler = async (e) => {
        e.preventDefault();

      await login(dispatch, { username, password });

    }

    useEffect(() => {
        user && navigate('/');
      }, [navigate, user]);

    return (
        <div className='formSign'>
            <div className="formSignDiv">
                <form>
                    <h3 className="formSignTitle">Ricpe AdminPanel <br></br> Login</h3>
                    <div className="formSignGroups">
                        <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder='Admin Username' required />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Admin Password' required />
                    </div>
                    <button disabled={isFetching} onClick={loginHandler}>Login</button>
                    {error && <span className='error'>Wrong Username or Password!</span>}
                </form>
            </div>
        </div>
    )
}

export default Login