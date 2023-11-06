import { useLoaderData,  } from "react-router-dom";
import WishlistCard from "./WishlistCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Wishlist = () => {
    const {user}=useContext(AuthContext)
   const wishlists =useLoaderData()
   const [wishlist, setWishList] = useState(wishlists)
   const [noCard,setNoCard]=useState(false)
   const email = user.email

   useEffect(() => {
       const filterAddBlog = wishlist && wishlist?.filter(blog => blog.email == email.toLowerCase())


       

       if(filterAddBlog.length>0){
           setWishList(filterAddBlog)
       
       
           }
           else{
               setNoCard('No Cart Added')
           }

   }, [email])
   
    return (
        noCard ? <p className="h-[50vh] flex justify-center items-center">{noCard}</p>:
        <div>
            {
                wishlist.map(wish=><WishlistCard key={wish._id} wish={wish}></WishlistCard>)
            }
        </div>
    );
};

export default Wishlist;