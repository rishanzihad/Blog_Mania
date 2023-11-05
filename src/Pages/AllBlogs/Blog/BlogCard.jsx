import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blog}) => {
    
    const {_id, title, time, image, category, shortDescription }=blog
    return (
        <div className="relative mt-20 flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
  <div className="relative mx-4 -mt-6 overflow-hidden  text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <img
      src={image}
      alt="img-blur-shadow"
     
    />
  </div>
  <div className="p-6">
    <div className='flex justify-around'>
    <h5 className="block mb-2 text-center font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    <span className='text-gray-500 '>Title: </span>{title}
    </h5>
    <h5 className="block mb-2  font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    <span className='text-gray-500 '>Category: </span> {category}
    </h5>
    </div>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
     {shortDescription}
    </p>
  </div>
  <div className="p-6 w-full pt-0">
  <Link className="btn bg-yellow-300 w-full" to={`/details/${_id}`}> <button >Details</button></Link>
  </div>
  <div className="p-6 w-full pt-0">
    <button
      className="select-none w-full rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
     Wish List
    </button>
  </div>
</div>
    );
};

export default BlogCard;