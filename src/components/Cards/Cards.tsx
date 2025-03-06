import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import imagem1 from '../../img/foto1.jpg';
import imagem2 from '../../img/foto1.jpg';
import imagem3 from '../../img/foto1.jpg';
import imagem4 from '../../img/foto1.jpg';

export default function Cards() {
  return (
    <div style={{ position: 'relative' }}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img
            src={imagem1}
            alt="Imagem 1"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imagem2}
            alt="Imagem 2"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imagem3}
            alt="Imagem 3"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imagem4}
            alt="Imagem 4"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
