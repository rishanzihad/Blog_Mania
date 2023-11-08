import React from 'react';

const TestimonialList = ({testimonials}) => {
    return (
        <div className=' max-w-[300px] mx-auto' >
        <h2 className=' text-3xl font-bold text-center mt-5 underline'>User Testimonials</h2>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial text-center mt-5 sm:w-[300px] md:w-[400px] lg:w-[500px]">
            <h3  className=' font-bold text-xl'>Name:{testimonial.name}</h3>
       <div >
       <p  ><span className=' font-bold '>FeedBAck:</span>{testimonial.testimonial.slice(0,30)}</p>
       </div>
          </div>
        ))}
      </div>
    );
};

export default TestimonialList;