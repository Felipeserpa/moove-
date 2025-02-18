import Loading from '../../components/Loading';
import Container from './styles';

export default function About() {
  return (
    <Container>
      <section id="about" className="section-blue">
        <div className="container">
          <h1 className="section-title text-white">Sobre Mim</h1>
          <div className="section-container">
            <article>
              <p>Olá,Somos a MOOVE +</p>
              <p>
                Na MOOVE+, oferecemos serviços de transporte especialmente
                pensados para os idosos, garantindo viagens seguras e
                confortáveis.
              </p>
              <p>Nossos diferenciais</p>
              <ul>
                <li>Transporte exclusivo</li>
                <li>Motoristas experientes e atenciosos</li>
                <li>Conforto</li>
                <li>Veículos adaptados</li>
                <li>Preços acessíveis</li>
              </ul>
              <p>
                Agende sua próxima viagem conosco e experimente a diferença!
              </p>
            </article>
            <picture data-aos="fade-up">
              /<img src="logomarca.jpg" alt="avatar.webp" />
            </picture>
          </div>
        </div>
      </section>
    </Container>
  );
}
