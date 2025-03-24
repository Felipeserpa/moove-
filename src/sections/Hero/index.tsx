import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaWhatsapp } from 'react-icons/fa';
import Container from './styles';
import mooves from '../../assets/videos/moove.mp4';

export default function Presentation() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playButtonRef = useRef<HTMLDivElement | null>(null); // Ref para o div do botão

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        if (playButtonRef.current) {
          // Verifica se playButtonRef.current existe
          playButtonRef.current.style.display = 'flex';
        }
      } else {
        videoRef.current.play();
        videoRef.current.muted = false;
        if (playButtonRef.current) {
          // Verifica se playButtonRef.current existe
          playButtonRef.current.style.display = 'none';
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Container
      id="inicio"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5%',
        backgroundImage: 'url("../../assets/images/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Box branco com texto e vídeo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1100px',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '10px',
          padding: '50px',
          boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
          animation: 'fadeInUp 1s ease-out',
        }}
        className="box"
      >
        {/* Texto à esquerda */}
        <div
          style={{ width: '50%', textAlign: 'left', padding: '10px' }}
          id="inicio"
        >
          <h1
            style={{ fontSize: '34px', color: '#9c5000', marginBottom: '10px' }}
          >
            Olá, somos a Moove +
          </h1>
          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.5',
              color: '#007',
              marginBottom: '20px',
            }}
          >
            Oferecemos transporte exclusivo e seguro para idosos, garantindo
            conforto e bem-estar durante todo o trajeto.
          </p>
          <a href="https://wa.me/message/VOG6YD5POXPPG1" className="cta">
            <button
              type="button"
              style={{
                backgroundColor: '#017410',
                color: 'white',
                border: 'none',
                padding: '12px 20px',
                fontSize: '18px',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
              }}
            >
              Agende um horário conosco{' '}
              <FaWhatsapp style={{ fontSize: '22px' }} />
            </button>
          </a>
        </div>

        {/* Vídeo à direita */}
        <div
          className="video-container"
          style={{ width: '50%', textAlign: 'center', position: 'relative' }}
        >
          <video
            ref={videoRef}
            src={mooves}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '420px',
              borderRadius: '10px',
              boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
              cursor: 'pointer',
            }}
          />
          <div
            ref={playButtonRef}
            onClick={handlePlayPause}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              padding: '10px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
          </div>
        </div>
      </div>

      {/* Estatísticas mais abaixo */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '60px',
          width: '100%',
          maxWidth: '900px',
          animation: 'fadeInUp 1.2s ease-out',
        }}
        className="stats"
      >
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', color: '#007bff' }}>500+</h2>
          <p style={{ fontSize: '16px', color: '#e2e2dc' }}>
            Viagens realizadas com conforto e segurança para idosos
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', color: '#007bff' }}>50%</h2>
          <p style={{ fontSize: '16px', color: '#e2e2dc' }}>
            Redução no tempo de espera para transporte exclusivo
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', color: '#007bff' }}>25%</h2>
          <p style={{ fontSize: '16px', color: '#e2e2dc' }}>
            Capacidade ampliada para atender melhor nossos passageiros idosos
          </p>
        </div>
      </div>
    </Container>
  );
}
