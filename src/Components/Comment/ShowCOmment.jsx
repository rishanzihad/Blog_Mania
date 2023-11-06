import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";


const ShowCOmment = ({title}) => {
    
    const [comment,setComment]=useState([])
    const [singlePostComment,setSinglePostComment]=useState([])

   
    useEffect(()=>{
        fetch('http://localhost:3006/comments')
        .then(res=>res.json())
        .then(data=>setComment(data))
        
    },[])
    useEffect(()=>{
        const findComment =comment && comment?.filter(comment => comment.title == title)
      setSinglePostComment(findComment)
       
      
      
    },[title,comment])
    

    return (
        <div className=" max-w-screen-lg">
            <h1 className=" text-center text-4xl font-bold mb-2">Comment Box</h1>
            <div className="comment-section grid md:grid-cols-2 gap-4  h-64 overflow-y-auto">
                {singlePostComment.map((single) => (
                    <CommentCard key={single.id} single={single} />
                ))}
            </div>
        </div>
    );
};


export default ShowCOmment;