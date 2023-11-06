import { useContext, useEffect, } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import toast from "react-hot-toast";
import ShowCOmment from "./ShowCOmment";
import { Navigate, useNavigate } from "react-router-dom";

const Comment = ({ id, email }) => {
    const { user } = useContext(AuthContext)
   


    const handleComment = e => {
       e.preventDefault()
        const form = e.target
        if (email === user.email) {
            toast.error("You cannot comment on your own post.");
            return;
        }
        const comment = form.comment.value
        const addComment = {
            comment,
            name: user.displayName,
            image: user.photoURL,
            id: id


        }
        fetch('http://localhost:3006/comments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addComment)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    form.reset()
                  
                    toast.success('Comment Added Successfully')
                  

                }
            })

    }
    return (
        <div className="md:flex flex-row-reverse items-center p-5 gap-4  mt-10">
            <div className="flex-1 mb-5 max-w-xl overflow-x-auto">
                <ShowCOmment id={id} ></ShowCOmment>
            </div>
            <div className="flex-1" >

                <div className="relative   min-w-[200px]">
                    <form onSubmit={handleComment} >
                        <textarea
                            name="comment"
                            className="peer h-[100px] w-full bg-gray-300 rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border"
                            placeholder=""
                            
                        ></textarea>
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Type Comment
                        </label>
                        <button type="submit" className="w-full bg-red-300 rounded-lg py-3">
                            Comment
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Comment;