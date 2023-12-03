import img1 from '../../../assets/building1.jpg'
import img2 from '../../../assets/building2.jpg'
import img3 from '../../../assets/building3.jpg'
import img4 from '../../../assets/building4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className='w-full h-[350px] md:h-[500px] lg:h-[700px] ' src={img1}/></SwiperSlide>
                <SwiperSlide><img className='w-full h-[350px] md:h-[500px] lg:h-[700px] ' src={img2} /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[350px] md:h-[500px] lg:h-[700px] ' src={img3} /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[350px] md:h-[500px] lg:h-[700px] ' src={img4}/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;