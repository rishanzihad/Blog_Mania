
import WishlistCard from "./WishlistCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const Wishlist = () => {
    const {user}=useContext(AuthContext)

   const [wishlist, setWishList] = useState([])
   //const [noCard,setNoCard]=useState(false)
   const email = user.email
   const axiosSecure =useAxiosSecure()
   const url = `/wishlist?email=${user.email}`;
   useEffect(() => {
   
    

    axiosSecure.get(url)
      .then((res) => {
   
       setWishList(res.data);
        
    
      });
      
  }, [url,axiosSecure, email])

  const handleDelete = id => {
    const proceed = confirm('Are You sure you want to delete');
    if (proceed) {
        fetch(`http://localhost:3006/wishlist/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('deleted successful');
                    const remaining = wishlist.filter(blog => blog._id !== id);
                    setWishList(remaining);
                }
            })
    }
}


    return (
        //noCard ? <p className="h-[50vh] flex justify-center items-center">{noCard}</p>:
        <div className="grid md:grid-cols-2">
            {
                wishlist.map(wish=><WishlistCard key={wish._id} handleDelete={handleDelete} wish={wish}></WishlistCard>)
            }
        </div>
    );
};

export default Wishlist;