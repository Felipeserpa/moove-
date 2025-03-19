import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useState, useRef } from 'react';

import imagem1 from '../../img/moove1.jpg';
import imagem3 from '../../img/moove3.jpg';
import imagem4 from '../../img/moove4.jpg';
import imagem5 from '../../img/moove5.jpg';
import imagem6 from '../../img/moove6.jpg';
import imagem8 from '../../img/moove08.jpg';
import imagem9 from '../../img/moove9.jpg';

import mooves from '../../assets/videos/moove.mp4';
import type { Swiper as SwiperCore } from 'swiper'; // Importe o tipo SwiperCore
import type { SwiperRef } from 'swiper/react'; // Importe o tipo SwiperRef

export default function Cards() {
  const swiperRef = useRef<SwiperRef | null>(null); // Use SwiperRef para tipar a referência
  const [activeSlide, setActiveSlide] = useState(0); // Estado para controlar o slide ativo

  const [telaCheia, setTelaCheia] = useState<{
    url: string | null;
    isVideo: boolean;
  }>({ url: null, isVideo: false });

  const toggleTelaCheia = (url: string | null, isVideo = false) => {
    setTelaCheia(
      telaCheia.url === url ? { url: null, isVideo: false } : { url, isVideo }
    );
  };

  return (
    <div style={{ position: 'relative' }}>
      <Swiper
        ref={swiperRef} // Agora o tipo da ref é compatível
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={35}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          1024: { slidesPerView: 3 }, // 3 imagens em telas grandes
          768: { slidesPerView: 2 }, // 2 imagens em tablets
          480: { slidesPerView: 1 }, // 1 imagem em telas pequenas
        }}
        onSlideChange={(swiper: SwiperCore) =>
          setActiveSlide(swiper.activeIndex)
        }
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <img
            src={imagem1}
            alt="moove1"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia(imagem1)}
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <img
            src={imagem9}
            alt="moove transportes"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia(imagem9)}
          />
        </SwiperSlide>

        {/* Slide 3 (Vídeo) */}

        {/* Slide 4 */}
        <SwiperSlide>
          <img
            src={imagem3}
            alt="moove transportes"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia(imagem3)}
          />
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <img
            src={imagem4}
            alt="moove transportes"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia(imagem4)}
          />
        </SwiperSlide>

        {/* Slide 6 */}
        <SwiperSlide>
          <img
            src={imagem5}
            alt="moove transportes"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia(imagem5)}
          />
        </SwiperSlide>

        {/* Slide 7 */}
        <SwiperSlide>
          <img
            src={imagem6}
            alt="moove transportes"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia(imagem6)}
          />
        </SwiperSlide>

        {/* Slide 8 */}
        <SwiperSlide>
          <img
            src={imagem8}
            alt="moove transportes"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia(imagem8)}
          />
        </SwiperSlide>
      </Swiper>

      {/* Modal para tela cheia */}
      {telaCheia.url && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={() => toggleTelaCheia(null)}
        >
          {telaCheia.isVideo ? (
            <video
              src={telaCheia.url}
              controls
              autoPlay
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                width: 'auto', // Mantém a proporção do vídeo
                height: 'auto', // Mantém a proporção do vídeo
              }}
            />
          ) : (
            <img
              src={telaCheia.url}
              alt="Fullscreen"
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                width: 'auto', // Mantém a proporção da imagem
                height: 'auto', // Mantém a proporção da imagem
                objectFit: 'contain', // Garante que a imagem inteira seja visível
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
