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
                    A Moove compreende as necessidades especiais de mobilidade
                    dos idosos e oferece um serviço de transporte dedicado,
                    projetado para proporcionar segurança, conforto e
                    independência.
                  </p>
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
