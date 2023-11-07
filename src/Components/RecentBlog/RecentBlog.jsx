import React from "react";
import RecentBlogCard from "./RecentBlogCard";

const RecentBlog = ({ blogs }) => {
 console.log(blogs)
  const sortedBlogs = blogs.sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateB - dateA;
  });
  const recentBlogs = sortedBlogs.slice(0, 6);
  return (
   <div>
     <h1 className="text-center text-5xl font-bold mt-10 mb-5 underline">Recent Blogs</h1>
    <div className="grid md:grid-cols-2 gap-4 ">
      
      {recentBlogs.map((blog, index) => (
        <RecentBlogCard key={blog._id} blog={blog} />
      ))}
    </div>
   </div>
  );
};

export default RecentBlog;
