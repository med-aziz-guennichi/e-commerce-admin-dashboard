import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

  const user = useSelector((state) => state.user.currentUser);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [error, setError] = useState(null);

  const registerHandler = async (e) => {
    e.preventDefault();

    if (password !== retypePassword) {
      setError("Passwords doesn't match!");
      return;
    }

    try {

      await axios.post('/api/auth/register', {
        username,
        email,
        password
      });

      navigate('/login');

    } catch (error) {
      setError("Registration failed. Please try again!");
    }


  }

  useEffect(() => {
    user && navigate('/');
  }, [navigate, user]);

  return (
    <div className='formSign'>
      <div className="formSignDiv">
        <form>
          <h3 className="formSignTitle">Register</h3>
          <div className="formSignGroups">
            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder='Your Username' required />
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' required />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Your Password' required />
            <input type="password" onChange={(e) => setRetypePassword(e.target.value)} placeholder='Confirm Your Password' required />
          </div>
          <button onClick={registerHandler}>Register</button>
          {error && <span className='error'>{error}</span>}
          <p>Have an Account Already? <Link to='/login'> Login Here</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register