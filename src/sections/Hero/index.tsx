import Container from './styles';

export default function Presentation() {
  return (
    <Container>
      <div className="presentation container" id="inicio">
        <div>
          <h1>
            Olá,
            <span />
          </h1>
          <h1>
            somos a <span />
          </h1>
          <h1>
            Moove +
            <span />
          </h1>
          <div>
            <p>
              Oferecemos transporte exclusivo
              <br /> e seguro para idosos, garantido conforto <br /> e bem-estar
              durante todo trajeto
            </p>
          </div>
          <a
            href="https://wa.me/message/VOG6YD5POXPPG1"
            type="button"
            className="cta"
          >
            <button type="button">Agende um horário conosco</button>
          </a>
        </div>
      </div>
    </Container>
  );
}
