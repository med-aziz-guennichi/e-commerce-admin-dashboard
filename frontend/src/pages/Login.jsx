import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/apiCalls'
import { useEffect } from 'react'

const Login = () => {

  const user = useSelector((state) => state.user.currentUser);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const loginHandler = async (e) => {
    e.preventDefault();

    login(dispatch, { username, password });
    console.log(e)

  }

  useEffect(() => {
    user && navigate('/');
  }, [navigate, user]);

  return (
    <div className='formSign'>
      <div className="formSignDiv">
        <form>
          <h3 className="formSignTitle">Login</h3>
          <div className="formSignGroups">
            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder='Your Username' required />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Your Password' required />
          </div>
          <button disabled={isFetching} onClick={loginHandler}>Login</button>
          {error && <span className='error'>Wrong Username or Password!</span>}
          <p>Don't Have an Account? <Link to='/register'> Register Here</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login