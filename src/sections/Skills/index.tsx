import { FaJs, FaGitAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import {
  SiFigma,
  SiMongodb,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiPostgresql,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { GrMysql } from 'react-icons/gr';
import Container from './styles';

export default function Skills() {
  return (
    <Container>
      <section id="skills" className="section-blue">
        <div className="container">
          <h1 className="section-title text-white">SERVIÇOS</h1>
          <div className="section-container">
            <div id="skills-container" data-aos="fade-up">
              <div className="section-container">
                <article className="text-center">
                  <p>
                    Nosso serviço de transporte é pensado para aqueles que
                    precisam de um deslocamento seguro e confortável para
                    consultas médicas,fisioterapias,academias,eventos e muito
                    mais.Com um olhar humanizado,buscamos proporcionar não
                    apenas uma viagem,mas um momento de acolhimento e bem-estar.
                  </p>

                  <p>Nossos diferenciais:</p>
                  <ul>
                    <p>Veiculo confortável e seguro</p>
                    <p>Atendimento humanizado e atencioso</p>
                    <p>Segurança e tranquilidade em cada trajeto</p>
                  </ul>
                  <p>
                    Na MOOVE+,mais do que transportar,cuidamos de cada detalhe
                    para que nossos passageiros sintam-se acolhidos e
                    respeitados.
                  </p>
                  <p>Entre em contato e agende seu transporte conosco!</p>
                </article>
                <h1>OBservação:</h1>
                <p>AQUI Ira ter o CARDS do servicos e suas descriçao</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
