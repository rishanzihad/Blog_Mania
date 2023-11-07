/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FcGoogle } from 'react-icons/fc';
import Header from "../../Components/Header/Header";
import axios from "axios";

const Login = () => {
    const {login,googleLogin} =useContext(AuthContext)
    const location =useLocation()
    const navigate =useNavigate()
    const handleGooglelLogin =()=>{
      googleLogin()
     
      .then(res=>{
        console.log(res)
        const loggedInUser = res.user;
         
          const email = res.user.email;
          const user ={email}

          console.log(res.user.email)
          axios.post('http://localhost:3006/jwt', user,{withCredentials:true})
          .then(res => {
              console.log(res.data)
              if (res.data.success) {
                  toast.success('User Log In Successfully')
                  navigate(location?.state ? location?.state : '/')
              }
          })
     
      })
    .catch(error =>toast.error(error.message))
  }
    const handleSignIn =e=>{
        e.preventDefault()
        const email =e.target.email.value
        const password =e.target.password.value
        login(email,password)
        .then(res=>{
          const loggedInUser = res.user;
         
          const user = { email };
          axios.post('http://localhost:3006/jwt', user,{withCredentials:true})
          .then(res => {
              console.log(res.data)
              if (res.data.success) {
                  toast.success('User Log In Successfully')
                  navigate(location?.state ? location?.state : '/')
              }
          })
        })
        

        .catch(error =>toast.error(error.message))
    }
    return (
       <div>
        <Header></Header>
         <div className="hero min-h-screen bg-base-200">
      
      <div className="hero-content lg:w-[500px] flex-col lg:flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold"><span className=" text-green-300 block ">Please</span>Login now!</h1>
       
        </div>
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
           
              <button onClick={()=>handleGooglelLogin(googleLogin)} className="btn mt-5 btn-neutral "><FcGoogle></FcGoogle>Google</button>
            
              
            </div>
          </form>
          <p className=' text-center mt-4'>Do not Have An Account? <Link className='text-blue-600 font-bold' to='/register'>Register</Link></p>
        </div>
      </div>
    </div>
       </div>
    );
};

export default Login;