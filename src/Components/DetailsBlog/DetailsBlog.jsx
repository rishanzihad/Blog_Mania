import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailCard from "../DetailsCard/DetailCard";


const DetailsBlog = () => {
    const blogs =useLoaderData()
    const [blog,setBlog] =useState([])
    
    const {id} =useParams()
    useEffect(()=>{
        const findBlog =blogs && blogs?.find(blog => blog._id == id)
        setBlog(findBlog)
        console.log(findBlog)
    },[id,blogs])
  
    return (
        <div>
            <DetailCard key={blog._id} blog={blog}></DetailCard>
        </div>
    );
};

export default DetailsBlog;