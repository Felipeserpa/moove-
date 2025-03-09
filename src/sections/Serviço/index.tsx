import { FaHospital, FaNotesMedical, FaClinicMedical } from 'react-icons/fa';

import { IoBarbellOutline } from 'react-icons/io5';
import { IoIosAdd } from 'react-icons/io';
import { BsDropletFill, BsCart4, BsBuilding } from 'react-icons/bs';

import Container from './styles';

export default function Skills() {
  return (
    <Container>
      <section id="skills" className="section-blue">
        <div className="container">
          <h1 className="section-title text-white">SERVIÇOS</h1>
          <div className="section-container">
            <div className="section-article">
              <p>
                Nosso serviço de transporte é pensado para aqueles que precisam
                de um deslocamento seguro e confortável para consultas médicas e
                fisioterapias academias eventos e muito mais.Com um olhar
                humanizado,buscamos proporcionar não apenas uma viagem,mas um
                momento de acolhimento e bem-estar.
              </p>

              <p>Nossos diferenciais:</p>
              <ul>
                <p>Veiculo confortável e seguro</p>
                <p>Atendimento humanizado e atencioso</p>
                <p>Segurança e tranquilidade em cada trajeto</p>
              </ul>
              <p>
                Na MOOVE+ mais do que transportar cuidamos de cada detalhe para
                que nossos passageiros sintam-se acolhidos e respeitados.
              </p>
              <p>Entre em contato e agende seu transporte conosco!</p>
            </div>
            <p
              style={{
                textAlign: 'center',
                padding: '20px',
                width: '100%',
                fontSize: '25px',
              }}
            >
              Alguns dos lugares aonde podemos levá-lo:
            </p>
            <div id="skills-container" data-aos="fade-up">
              <div className="skill-card">
                <h2>Hospitais</h2>
                <FaHospital className="icon" />
              </div>
              <div className="skill-card">
                <h2>Academias</h2>
                <IoBarbellOutline className="icon" />
              </div>

              <div className="skill-card">
                <h2>Centro Dialise</h2>
                <BsDropletFill className="icon" />
              </div>

              <div className="skill-card">
                <h2>Fisioterapias</h2>
                <FaNotesMedical className="icon" />
              </div>

              <div className="skill-card">
                <h2>Centros de saúde</h2>
                <FaClinicMedical className="icon" />
              </div>
              <div className="skill-card">
                <h2>Eventos Sociais</h2>
                <BsBuilding className="icon" />
              </div>

              <div className="skill-card">
                <h2>compras</h2>
                <BsCart4 className="icon" />
              </div>
              <div className="skill-card">
                <h2>E muito mais...</h2>
                <IoIosAdd className="icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
