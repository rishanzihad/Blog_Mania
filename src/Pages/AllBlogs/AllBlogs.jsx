import { useLoaderData } from "react-router-dom";
import BlogCard from "./Blog/BlogCard";


const AllBlogs = () => {
    const Blogs = useLoaderData()
    return (
        <div>
            <div className="md:flex gap-4 justify-center mt-5 ">
                <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                <div className="relative mt-4 md:mt-0  ">
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Category
                    </label>
                    <select  id="category" name="category" className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                        <option value="null">Select a category</option>
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
            </div>
            <div className="grid md:grid-cols-2">
                {
                    Blogs.map(blog=><BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            
            </div>
        </div>

    );
};

export default AllBlogs;