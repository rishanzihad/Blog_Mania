import { Button } from '@material-tailwind/react';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddBlog from '../../AddBlog/AddBlog';
import toast from 'react-hot-toast';

const BlogCard = ({blog}) => {
  const {_id, title, time, image, category, shortDescription }=blog
    const [wishListBlog,setWishListBlog]=useState([])


    useEffect(()=>{
      fetch('http://localhost:3006/blogs')
      .then(res=>res.json())
      .then(data=>setWishListBlog(data))

      
  
    },[])
    const handleWish =(id)=>{
     
      let matchedBlog = wishListBlog.find((singleWish) => singleWish._id === id);
    
    
      if (matchedBlog) {
        const oneBlog = {
          _id: matchedBlog._id,
          title: matchedBlog.title,
          time: matchedBlog.time,
          image: matchedBlog.image,
          category: matchedBlog.category,
          shortDescription: matchedBlog.shortDescription,
        };
      console.log(oneBlog)
      fetch(``, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(oneBlog)
    })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          toast.success('Product Added in WishList Successfully');
          //navigate('/');
      })


    
      }
      }

  


   

        
    
    return (
        <div className="relative mt-20  flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
  <div className="relative mx-4 flex-1  -mt-6 overflow-hidden  text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <img
      src={image}
      alt="img-blur-shadow"
     
    />
  </div>
  <div className="px-6 flex-1">
    <div className='flex py-6 justify-around'>
    <h5 className="block  text-center font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    <span className='text-gray-500 '>Title: </span>{title}
    </h5>
    <h5 className="block  font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    <span className='text-gray-500 '>Category: </span> {category}
    </h5>
    </div>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
     {shortDescription}
    </p>
  </div>
  <div className=" w-full py-2 px-6 pt-0">
  <Link className="btn bg-yellow-300 w-full" to={`/details/${_id}`}> <button >Details</button></Link>
  </div>
  <div className="p-6 w-full pt-0">
    <button   onClick={()=>handleWish(_id)}
      className="select-none w-full rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
     Wish List
    </button >
  </div>
</div>
    );
};

export default BlogCard;