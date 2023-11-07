import toast from "react-hot-toast";


const NewsLetter = () => {
    const handleNewsLetter = e => {
        e.preventDefault()
        const form = e.target
        const email =form.email.value 
        if(email){
            form.reset()
            toast.success('Thank you for subscribing to our newsletter')
        }
        
        console.log(email)
    }
    return (
        <div className=" max-w-[1300px] py-20 mt-10  bg-slate-300 mx-auto">
            <h1 className=" md:text-5xl font-bold text-3xl text-center ">WelCome NewsLetter</h1>
            <form onSubmit={handleNewsLetter}>
               <div className="flex justify-center items-center ">
               <div className="form-control w-2/4  ">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="Email" className="input input-bordered " required />
                </div>
                <div className="form-control  mt-9">
                    <button className="  rounded-r-md py-[11px] px-2 bg-green-400">NewsLetter</button>
                </div>
               </div>
            </form>
        </div>
    );
};

export default NewsLetter;