import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import imagem1 from '../../img/moove1.jpg';
import imagem2 from '../../img/moove2.jpg';
import imagem3 from '../../img/moove3.jpg';
import imagem4 from '../../img/moove4.jpg';
import imagem5 from '../../img/moove5.jpg';
import imagem6 from '../../img/moove6.jpg';
import { useState } from 'react';

export default function Cards() {
  const [imagemTelaCheia, setImagemTelaCheia] = useState(null);

  const toggleTelaCheia = (url: string) => {
    setImagemTelaCheia(imagemTelaCheia === url ? null : url);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={35}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide style={{ width: '450px', height: '400px' }}>
          <img
            src={imagem1}
            alt="Imagem 1"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia(imagem1)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imagem2}
            alt="Imagem 2"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia(imagem2)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imagem3}
            alt="Imagem 3"
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
            }}
            onClick={() => toggleTelaCheia(imagem3)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imagem4}
            alt="Imagem 4"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia(imagem4)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imagem5}
            alt="Imagem 5"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia(imagem5)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imagem6}
            alt="Imagem 5"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia(imagem6)}
          />
        </SwiperSlide>
      </Swiper>

      {imagemTelaCheia && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            cursor: 'pointer',
          }}
          onClick={() => toggleTelaCheia(null)}
        >
          <img
            src={imagemTelaCheia}
            alt="Imagem em Tela Cheia"
            style={{
              maxWidth: '40%',
              maxHeight: '95%',
              objectFit: 'contain',
            }}
          />
        </div>
      )}
    </div>
  );
}
