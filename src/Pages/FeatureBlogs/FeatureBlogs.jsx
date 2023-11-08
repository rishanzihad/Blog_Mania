import 'ka-table/style.css';


import axios from 'axios';
import { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';


const FeatureBlogs = () => {
  const [blogs,setBlogs]=useState([])

  const [topPosts, setTopPosts] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3006/blogs')
      .then((res) => {
        setBlogs(res.data);
      });
  }, []);

  useEffect(() => {
   
    if (blogs.length ) {

      const validBlogs = blogs.filter(blog =>  blog.longDescription      );
      

      const sortedBlogs = validBlogs.sort((a, b) => {
        const wordCountA = a.longDescription.split(' ').length;
        const wordCountB = b.longDescription.split(' ').length;
        return wordCountB - wordCountA;
      });


      const top10Posts = sortedBlogs.slice(0, 10);
      setTopPosts(top10Posts);
    }
  }, [blogs]);
 
 
    return (
       <div>
      <FeatureCard post={topPosts} ></FeatureCard>
      
       
       </div>
    );
  };

export default FeatureBlogs;