/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import { useContext } from 'react';

import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import Header from '../../Components/Header/Header';


const Register = () => {
    const {register,googleLogin,handleUpdateProfile}=useContext(AuthContext)
    const navigate =useNavigate()
    const handleGooglelLogin =()=>{
        googleLogin()
        .then(res=>{
           toast.success('User Log In Successfully')
            navigate('/')
        })
      .catch(error =>toast.error(error.message))
    }
    const handleSubmit =e=>{
        e.preventDefault()
        const email =e.target.email.value
        const name =e.target.name.value
        const password =e.target.password.value
        const img =e.target.img.value

        const lengthPattern = /.{6,}/;
        const capitalLetterPattern = /[A-Z]/;
        const specialCharacterPattern = /[^a-zA-Z0-9]/;
        const numericCharacterPattern = /[0-9]/;
        if (!lengthPattern.test(password)) {
            toast.success('Password must be at least 6 characters');
            return;
          } else if (!capitalLetterPattern.test(password)) {
          toast.error('Password must contain at least one capital letter');
          return;
        } else if (!specialCharacterPattern.test(password)) {
          toast.error('Password must contain at least one special character');
          return;
        } else if (!numericCharacterPattern.test(password)) {
          toast.error('Password must contain at least one numeric character');
          return;
        }
       
        register(email,password)
            .then(res =>{
              
            handleUpdateProfile(name,img)
            .then(()=>{
                toast.success('User Create Successfully')
                navigate('/')
            })
        })
        .catch(error =>{toast.error(error.message)}
        )

    }
   
    return (
        <>
           <div>
            <Header></Header>
           <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                       
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Full name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" name='img' placeholder="image url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button className="btn btn-neutral" type='submit'>Register</button>
                            </div>
                            <div className='w-full mt-5 items-center flex'>
                                <p className=' font-semibold text-l'>Continue With</p>
                            <button onClick={()=>handleGooglelLogin(googleLogin)} className="btn  btn-neutral  "><FcGoogle></FcGoogle>Google</button>
                            </div>
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                           
                        </form>
                    </div>
                </div>
            </div>
           </div>
        </>
    );
};

export default Register;