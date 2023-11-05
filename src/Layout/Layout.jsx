import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";





const Layout = () => {
    return (
  <div  className='max-w-[1300px] mx-auto'>
        <Header></Header>
          <div className="min-h-[80vh]">
        
            <Outlet></Outlet>
            
        </div>
        <Footer></Footer>
        <Toaster/>
  </div>
    );
};

export default Layout;