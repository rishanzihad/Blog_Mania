
import WishlistCard from "./WishlistCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

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

  const handleDelete = (_id) => {

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
                console.log(_id)
            fetch(`http://localhost:3006/wishlist/${_id}`, {
                method: 'DELETE'
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data)
                  
                   
                     if (data.deletedCount > 0) {
                        toast.success('Delete Successful')
                     const remaining = wishlist.filter(blog => blog._id !== _id);
                      setWishList(remaining);
                 
                     }
                })
        }
    })
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