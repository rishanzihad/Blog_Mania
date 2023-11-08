
import RecentBlogCard from "./RecentBlogCard";
import {motion} from 'framer-motion'

import { fadeIn } from '../FormarMotion/Framer'
const RecentBlog = ({ blogs }) => {

  const sortedBlogs = blogs.sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateB - dateA;
  });
  const recentBlogs = sortedBlogs.slice(0, 6);
  return (
   <motion.div
   variants={fadeIn('up',0.40)}
   initial='hidden'
   whileInView={"show"}
   viewport={{once:false,amout:0.9}}
   >
     <h1 className="text-center text-5xl font-bold mt-10 mb-5 underline">Recent Blogs</h1>
    <div className="grid md:grid-cols-2 gap-4 ">
      
      {recentBlogs.map((blog, index) => (
        <RecentBlogCard key={blog._id} blog={blog} />
      ))}
    </div>
   </motion.div>
  );
};

export default RecentBlog;
