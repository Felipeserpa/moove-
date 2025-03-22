import { useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Container from './styles';
import mooves from '../../assets/videos/moove.mp4';

export default function Presentation() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
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
          <h1 style={{ fontSize: '34px', color: '#007', marginBottom: '10px' }}>
            Olá, somos a Moove +
          </h1>
          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.5',
              color: '#666',
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
          style={{ width: '50%', textAlign: 'center' }}
        >
          <video
            ref={videoRef}
            src={mooves}
            onClick={handleClick}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '420px',
              borderRadius: '10px',
              boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
              cursor: 'pointer',
            }}
          />
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
