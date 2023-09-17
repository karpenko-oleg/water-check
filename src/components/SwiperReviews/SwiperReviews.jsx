
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';

import "./swiperReviews.scss";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function SwiperReviews({ reviewsObj }) {
  return (
    <div className='swiperReviews'>
      <Swiper
        // install Swiper modules
        // для slidesPerView={"auto"} необходимо прописать свойство .swiper-slide {width: auto!important;}
        modules={[Navigation, A11y]}
        spaceBetween={40}
        slidesPerView={"2"}
        navigation
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {reviewsObj.map((list) => (
          <SwiperSlide key={list.id}>
            <div className='swiperReviews__item'>
              <h4>{list.name}</h4>
              <span></span>
              <p>{list.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default SwiperReviews;