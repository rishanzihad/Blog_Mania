import axios from 'axios';
import { useContext, useEffect } from 'react';
;
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const axiosSecure=axios.create({
    baseURL: "https://blog-mania-theta.vercel.app",
    withCredentials:true
})
const useAxiosSecure = () => {
    const navigate=useNavigate()
    const {logOut}=useContext(AuthContext)
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res
        },error =>{
       // console.log("error",error.response)
        if(error.response.status===401|| error.response.status===403){
            console.log('logged out')
            logOut()
            .then(() =>{toast.success('Logout Successful')
            navigate('/login')
        })
            .catch( error => console.log(error))
        }
        })
         
    },[])
    return axiosSecure
};

export default useAxiosSecure;