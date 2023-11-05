import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import Wishlist from "../Pages/Wishlist/Wishlist";
import FeatureBlogs from "../Pages/FeatureBlogs/FeatureBlogs";

const route =createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
           
            {
                path:'/addblog',
                element:<AddBlog></AddBlog>
            },
            {
                path:'/allblogs',
                element:<AllBlogs></AllBlogs>
            },
            {
                path:'/wishlist',
                element:<Wishlist></Wishlist>
            },
            {
                path:'/featuredblogs',
                element:<FeatureBlogs></FeatureBlogs>
            }
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
])
export default route;