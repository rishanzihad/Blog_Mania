import { useState } from "react";
import toast from "react-hot-toast";


const TestimonialForm = ({ addTestimonial }) => {
    const [name, setName] = useState('');
    const [testimonial, setTestimonial] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && testimonial) {
            toast.success('FeedBack Received')
          addTestimonial({ name, testimonial });
          setName('');
          setTestimonial('');
          
        }
      };
    return (
        <form className="mt-10" onSubmit={handleSubmit}>
            <h1 className=" text-4xl font-bold text-center">FeedBack</h1>
<div  className=" h-32 justify-center flex items-center w-full min-w-[200px]" >
<label className=" font-bold" htmlFor="name">Name:</label>
      <input className="input bg-slate-300" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
</div>

     <div className=" mt-5 h-28 flex justify-center items-center">
     <label className=" font-bold" htmlFor="testimonial">FeedBack:</label>
      <textarea 
       className="peer h-full w-1/2 bg-slate-400 rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border "
         id="testimonial" value={testimonial} onChange={(e) => setTestimonial(e.target.value)} required />

     </div >
      <div className="flex justify-center mt-5">
      <button className="btn justify-center" type="submit">Submit FeedBAck</button>
      </div>
    </form>
    );
};

export default TestimonialForm;