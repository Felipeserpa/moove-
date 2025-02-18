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
            Stechnology
            <span />
          </h1>
          <a href="#portfolio" type="button" className="cta">
            <button type="button">Portfólio</button>
          </a>
        </div>
      </div>
    </Container>
  );
}
