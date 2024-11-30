import React, { useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Signup = () => {
    const {createNewUser} = useContext(AuthContext);
    const handleSignUp = e => {
      e.preventDefault();
      const email = e.target.email.value;
      const name = e.target.name.value;
      const password = e.target.password.value;
      const info= {email,password};
      console.log(info,email,password);
createNewUser(email,password,name)
.then(result => {
    console.log(result.user);
    const createdAt = result?.user?.metadata?.creationTime;
    const newUser = {email,createdAt,name};
    fetch('http://localhost:4000/users',{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body: JSON.stringify(newUser),
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
      <h1 className="text-4xl font-bold">Sign Up !</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignUp}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name" name='name'className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">SignUp</button>
        </div>
        <p>Already have Account? <Link to='/login' className='text-lg text-blue-600 font-semibold underline'>Login</Link> </p>
      </form>
    </div>
  </div>
</div>
            <Footer/>
        </div>
    );
};

export default Signup;