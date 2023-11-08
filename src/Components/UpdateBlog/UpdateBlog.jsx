
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {  useLoaderData, useNavigate } from 'react-router-dom';

const UpdateBlog = () => {
    const singleBlogs =useLoaderData()
    const navigate =useNavigate()
    const [singleBlog,setSingleBlog]=useState(singleBlogs)
    useEffect(()=>{
        setSingleBlog(singleBlog)
    },[])
    console.log(singleBlog)
    const handleUpdateBlog = e => {
        e.preventDefault()
        const form = e.target
        const image = form.image.value
        const title = form.title.value
        const category = form.category.value
       
        const longDescription = form.longDescription.value
      
        const shortDescription = form.shortDescription.value
       

        const UpdateBlog = {
            image, title, shortDescription, longDescription,category
        }
        console.log(UpdateBlog)
        fetch(`https://blog-mania-theta.vercel.app/blogs/${singleBlogs._id}`,{

            method:"PUT",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(UpdateBlog)
        })
        .then(res=>(res.json()))
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                navigate('/')
            toast.success('Update Successful')
           
        }})
        
        
    }

    return (
       
        
        <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Update Product</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdateBlog} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name="image" defaultValue={singleBlog.image} placeholder="ImageURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tittle</span>
                            </label>
                            <input type="text" placeholder="Name" defaultValue={singleBlog.title} name="title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select name="category" defaultValue={singleBlog.category} className="input input-bordered" required>
                            <option value="Lifestyle">Lifestyle</option>
                                <option value="Technology">Technology</option>
                                <option value="Personal Development">Personal Development</option>
                                <option value="Hobbies and Interests">Hobbies and Interests</option>
                                <option value="Finance">Finance</option>
                                <option value="Parenting">Parenting</option>
                                <option value="Travel">Travel</option>
                                <option value="Food and Cooking">Food and Cooking</option>
                                <option value="Education">Education</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Environment and Sustainability">Environment and Sustainability</option>
                                <option value="Science and Technology">Science and Technology</option>
                                <option value="Art and Creativity">Art and Creativity</option>
                            </select>
                        </div>
                        


                        <div className="relative h-32 w-full min-w-[200px]">
                            <textarea
                            defaultValue={singleBlog.longDescription}
                                name="longDescription"
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border"
                                placeholder=""
                                required
                            ></textarea>
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Long Description
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" placeholder="Short Description" defaultValue={singleBlog.shortDescription} name="shortDescription" className="input input-bordered" required />
                        </div>
                       
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
   
    )
};

export default UpdateBlog;