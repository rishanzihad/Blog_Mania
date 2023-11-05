import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";




const Layout = () => {
    return (
        <div className='max-w-[1300px] mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Layout;