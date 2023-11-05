import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";


const ShowCOmment = ({id}) => {
    
    const [comment,setComment]=useState([])
    const [singlePostComment,setSinglePostComment]=useState([])

   
    useEffect(()=>{
        fetch('http://localhost:3006/comments')
        .then(res=>res.json())
        .then(data=>setComment(data))
        
    },[])
    useEffect(()=>{
        const findComment =comment && comment?.filter(comment => comment.id == id)
      setSinglePostComment(findComment)
       
      
      
    },[id,comment])
    

    return (
        <div className=" max-w-screen-lg">
            <div className="comment-section grid md:grid-cols-2 gap-4  h-64 overflow-y-auto">
                {singlePostComment.map((single) => (
                    <CommentCard key={single.id} single={single} />
                ))}
            </div>
        </div>
    );
};


export default ShowCOmment;