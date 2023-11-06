import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import WishDetailsCard from "./WishDetailsCard";


const WishDetails = () => {
    const blogs =useLoaderData()
    const [blog,setBlog] =useState([])
    
    const {id} =useParams()
    useEffect(()=>{
        const findBlog =blogs && blogs?.find(blog => blog._id == id)
        setBlog(findBlog)
      
    },[id,blogs])
  
    return (
        <div>
            <WishDetailsCard key={blog._id} blog={blog}></WishDetailsCard>
        </div>
    );
};



export default WishDetails;