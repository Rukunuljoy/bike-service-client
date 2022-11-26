import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import signup from '../../assert/login/download.png'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser}= useContext(AuthContext)

    const handleSignUp= event =>{
        event.preventDefault();
        const form = event.target;
        const email=form.email.value;
        const password=form.password.value;

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(err=>{
            console.error(err)
        })
        
      }

    return (
        <div className="hero w-full mb-10 mt-10">
      <div className="hero-content flex-col gap-20 lg:flex-row grid md:grid-cols-2 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <img src={signup} alt="" className='w-3/4'/>
        </div>
        <div className="card my-20 py-10 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
          <h1 className="text-5xl font-bold">Sign UP!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value='login'className="btn btn-primary"/>
            </div>
          </form>
          <p className='text-center'>ALready Have an account? <Link className='text-orange-600 font-bold ' to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
    );
};

export default SignUp;