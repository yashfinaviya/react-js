import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header1 from './components/Header-1.jsx';
import Header2 from './components/Header-2.jsx';
import Footer from './components/Footer.jsx';
import { Route, Routes } from 'react-router';
import Home from './components/Home.jsx';
import ShopLeftsidebar from './components/Shop-Left-sidebar.jsx';
import ShopRightsidebar from './components/Shop-Right-sidebar.jsx';
import ShopFullwidth from './components/Shop-Full-width.jsx';
import ProductLeftsidebar from './components/product-Left-sidebar.jsx';
import ProductRightsidebar from './components/product-Right-sidebar.jsx';
import ProductFullWidth from './components/Product-Full-width.jsx';
import About from './components/About.jsx';
import ContactUs from './components/ContactUs.jsx';
import Cart from './components/Cart.jsx';
import TrackOrder from './components/TrackOrder.jsx';
import Wishlist from './components/Wishlist.jsx';
import Faq from './components/Faq.jsx';
import LoginForm from './components/Loging.jsx';
import RegisterForm from './components/RegisterForm.jsx';
import Policy from './components/Policy.jsx';
import Checkout from './components/Checkout.jsx';
import LeftSidebar from './components/Left-Sidebar.jsx';
import RightSidebar from './components/Right-Sidebar.jsx';
import FullWidth from './components/Full-Width.jsx';
import DetailLeftSidebar from './components/Detail-Left-Sidebar.jsx';
import DetailRightSidebar from './components/Detail-Right-Sidebar.jsx';
import DetailFullWidth from './components/Detail-Full-Width.jsx';
import Products from './components/Products.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <>
            <Header1 />
            <Header2 />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shopLeftsidebar' element={<ShopLeftsidebar />} />
                <Route path='/shopRightsidebar' element={<ShopRightsidebar />} />
                <Route path='/shopFullWidthsidebar' element={<ShopFullwidth />} />
                <Route path='/productLeftsidebar' element={<ProductLeftsidebar />} />
                <Route path='/productRightsidebar' element={<ProductRightsidebar />} />
                <Route path='/productRightsidebar' element={<ProductRightsidebar />} />
                <Route path='/productFullWidth' element={<ProductFullWidth />} />
                <Route path='/about' element={<About />} />
                <Route path='/contactUs' element={<ContactUs />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/trackOrder' element={<TrackOrder />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/loginForm' element={<LoginForm />} />
                <Route path='/registerForm' element={<RegisterForm />} />
                <Route path='/policy' element={<Policy />} />
                <Route path='/leftSidebar' element={<LeftSidebar />} />
                <Route path='/rightSidebar' element={<RightSidebar />} />
                <Route path='/fullWidth' element={<FullWidth />} />
                <Route path='/detailLeftSidebar' element={<DetailLeftSidebar />} />
                <Route path='/detailRightSidebar' element={<DetailRightSidebar />} />
                <Route path='/detailFullWidth' element={<DetailFullWidth />} />
                <Route path='/products' element={<Products />} />
            </Routes>
            <Footer />
        </>
    )
}


export default App;