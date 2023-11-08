import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter/NewsLetter";
import RecentBlog from "../RecentBlog/RecentBlog";
import Service from "../OurService/Service";
import TestimonialForm from "../Testimonial/TestimonialForm";
import TestimonialList from "../Testimonial/TestimonialList";
import { useState } from "react";



const Home = () => {
    const [testimonials, setTestimonials] = useState([]);

  const addTestimonial = (newTestimonial) => {
    setTestimonials([...testimonials, newTestimonial]);
  };
    const recent =useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <RecentBlog blogs={recent}></RecentBlog>
            <NewsLetter></NewsLetter>
            <TestimonialForm addTestimonial={addTestimonial} />
        <TestimonialList testimonials={testimonials} />
            <Service></Service>
        </div>
    );
};

export default Home;