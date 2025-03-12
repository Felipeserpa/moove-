import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useState, useRef } from 'react';
import VideoPlayer from '../player';

import imagem1 from '../../img/moove1.jpg';
import imagem3 from '../../img/moove3.jpg';
import imagem4 from '../../img/moove4.jpg';
import imagem5 from '../../img/moove5.jpg';
import imagem6 from '../../img/moove6.jpg';
import imagem8 from '../../img/moove08.jpg';
import imagem9 from '../../img/moove9.jpg';

import mooves from '../../assets/videos/moove.mp4';

export default function Cards() {
  const [activeSlide, setActiveSlide] = useState(0); // Estado para controlar o slide ativo
  const swiperRef = useRef(null); // Referência para o swiper
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
        ref={swiperRef} // Referência do Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={35}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)} // Atualiza o slide ativo
      >
        <SwiperSlide>
          <img
            src={imagem1}
            alt="moove1"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia(imagem1)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imagem9}
            alt="moove transportes"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia(imagem9)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              width: '100%', // Largura do contêiner
              height: '400px', // Altura do contêiner
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            {/* Passando a prop isActive para VideoPlayer */}
            <video
              src={mooves} // Caminho correto para o vídeo
              controls={true}
              autoPlay={activeSlide === 2} // Reproduzir apenas no slide ativo
              style={{
                width: '100%', // Ocupa 100% da largura do contêiner
                height: '100%', // Ocupa 100% da altura do contêiner
                objectFit: 'cover', // Cobre o espaço disponível sem distorcer
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imagem3}
            alt="moove transportes"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia(imagem3)}
          />
        </SwiperSlide>
        {/* Adicione os outros SwiperSlides como você fez antes */}
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
              style={{ maxWidth: '90%', maxHeight: '90%' }}
            />
          ) : (
            <img
              src={telaCheia.url}
              alt="Fullscreen"
              style={{ maxWidth: '90%', maxHeight: '90%' }}
            />
          )}
        </div>
      )}
    </div>
  );
}
