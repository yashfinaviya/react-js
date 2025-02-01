import Banner from './Benner.jsx';
import Cark from './Cark.jsx';
import PopularProducts from './PopularProducts.jsx';
import ProductBanner from './Product-Banner.jsx';
import SwiperSlide from './Swiper-Slide.jsx';
import Greatdeal from './Great-deal.jsx';
import OrganicHealthy from './OrganicHealthy.jsx';
import TestimonialCarousel from './TestimonialCarousel.jsx';
import NewsCarousel from './Latest-News.jsx';

const Home = () => {
    return (
        <>
            <Banner />
            <Cark />
            <PopularProducts />
            <ProductBanner />
            <SwiperSlide />
            <Greatdeal />
            <OrganicHealthy />
            <TestimonialCarousel />
            <NewsCarousel />
        </>
    )
}

export default Home