import React, { useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const handleLogin = e => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      const info= {email,password};
      console.log(info,email,password);
      signInUser(email,password)
      .then(result => {
    console.log(result.user);
    const lastLoginTime = result?.user?.metadata?.lastSignInTime;
    const loginInfo = {email,lastLoginTime};
    console.log('logininfo',loginInfo);
    fetch(`http://localhost:4000/users`,{
      method:'PATCH',
      headers:{
        'content-type':'application/json',
      },
      body: JSON.stringify(loginInfo),
    })
    .then(res=>res.json())
    .then(data => {
      console.log(data);
    })
})
.catch(error=>{
    console.log(error.code);
})
    }
    return (
        <div>
            <Navbar/>
            <div className="bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Login !</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email'className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name='password' required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>New to coffee shop? <Link to='/signup' className='text-lg text-blue-600 font-semibold underline'>Sign Up</Link> </p>
      </form>
    </div>
  </div>
</div>
            <Footer/>
        </div>
    );
};

export default Login;