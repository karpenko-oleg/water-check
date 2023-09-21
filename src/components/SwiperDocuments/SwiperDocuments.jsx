

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';

import "./swiperDocuments.scss";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function SwiperDocuments({ swiperDocList }) {
  return (
    <div className='SwiperDocuments'>
      <Swiper
        // install Swiper modules
        // для slidesPerView={"auto"} необходимо прописать свойство .swiper-slide {width: auto!important;}
        modules={[Navigation, A11y]}
        spaceBetween={30}
        slidesPerView={"3"}
        breakpoints={{
          0:{
            slidesPerView:1
          },
          810:{
            slidesPerView:1
          },
          810:{
            slidesPerView:2
          },
          1215:{
            slidesPerView:3
          },
        }}
        navigation
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {swiperDocList?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="SwiperDocuments__item">
                <div className="SwiperDocuments__item__img"><img src={item.img} alt="" /></div>
                <h3>{item.name}</h3>
                <p>{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default SwiperDocuments;
