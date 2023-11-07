import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter/NewsLetter";
import RecentBlog from "../RecentBlog/RecentBlog";



const Home = () => {
    const recent =useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <RecentBlog blogs={recent}></RecentBlog>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;