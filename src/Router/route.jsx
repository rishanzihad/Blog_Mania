import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import Wishlist from "../Pages/Wishlist/Wishlist";
import FeatureBlogs from "../Pages/FeatureBlogs/FeatureBlogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DetailsBlog from "../Components/DetailsBlog/DetailsBlog";
import UpdateBlog from "../Components/UpdateBlog/UpdateBlog";



const route = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://blog-mania-theta.vercel.app/blogs')
            },

            {
                path: '/addblog',
                element: <AddBlog></AddBlog>
            },
            {
                path: '/allblogs',
                element: <AllBlogs></AllBlogs>,
                loader: () => fetch('https://blog-mania-theta.vercel.app/blogs')
            },
            {
                path: '/wishlist',
                element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>,
                // loader: () => fetch('https://blog-mania-theta.vercel.app/wishlist')
            },
            {
                path: '//update/:id',
                element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
                loader: ({ params }) => fetch(`https://blog-mania-theta.vercel.app/blogs/${params.id}`)
            },
            {
                path: '/featuredblogs',
                element: <FeatureBlogs></FeatureBlogs>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><DetailsBlog></DetailsBlog></PrivateRoute>,
                loader: () => fetch('https://blog-mania-theta.vercel.app/blogs')

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

         





        ]
    },
   
])
export default route;