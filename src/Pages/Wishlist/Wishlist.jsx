
import WishlistCard from "./WishlistCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";

const Wishlist = () => {
    const {user}=useContext(AuthContext)
   //const wishlists =useLoaderData()
   const [wishlist, setWishList] = useState([])
   //const [noCard,setNoCard]=useState(false)
   const email = user.email
   const axiosSecure =useAxiosSecure()
   const url = `/wishlist?email=${user.email}`;
   useEffect(() => {
   
    

    axiosSecure.get(url)
      .then((res) => {
       // const filterAddBlog = res.data.filter((blog) => blog.email === email.toLowerCase());

        //if (filterAddBlog.length > 0) {
          setWishList(res.data);
       // } else {
          //setNoCard(true); 
        //}
     // })
      //.catch((error) => {
          //console.error(error);
      });
  }, [url,axiosSecure, email])

    return (
        //noCard ? <p className="h-[50vh] flex justify-center items-center">{noCard}</p>:
        <div className="grid md:grid-cols-2">
            {
                wishlist.map(wish=><WishlistCard key={wish._id} wish={wish}></WishlistCard>)
            }
        </div>
    );
};

export default Wishlist;