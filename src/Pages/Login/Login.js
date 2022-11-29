import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assert/login/download.png'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useToken from '../../Hooks/UseToken';

const Login = () => {
  const {login} = useContext(AuthContext)
  const [userLogin,setUserLogin] = useState('');
  const [token] = useToken(userLogin)
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/';

  if(token){
    navigate(from, {replace:true})
  }

  const handleLogin= event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user)
      setUserLogin(email)
      
    })
    .catch(err=>{
      console.log(err)
    })
    
  }
    return (
      <div className="hero w-full mb-10 mt-10">
      <div className="hero-content flex-col gap-20 lg:flex-row grid md:grid-cols-2 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <img src={img} alt="" className='w-3/4'/>
        </div>
        <div className="card my-20 py-10 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value='login'className="btn btn-primary"/>
            </div>
          </form>
          <p className='text-center'>Select to Reseller? <Link className='text-orange-600 font-bold ' to='/signup'>Sign Up</Link></p>
        </div>
      </div>
    </div>
    );
};

export default Login;