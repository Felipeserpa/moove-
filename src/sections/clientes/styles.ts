import styled from 'styled-components';

const Container = styled.div`
  .card {
    display: flex;
    height: 32rem;
    margin: 0 1rem 3rem 1rem;
    background-image: ${(props) => props.theme.linearGradient};
    transition: 0.6s ease-in-out;
    justify-content: space-between;
    @media (max-width: 930px) {
      margin: 0 1rem 2rem 1rem;
      flex-direction: column;
      height: max-content;
    }
  }
  .image-container {
    display: flex;
    justify-content: space-between;
  }

  .image-container img {
    width: 140px;
    margin: 10px; /* Cria um espaço de 10px em todos os lados da imagem */
  }
  .card-description {
    display: flex;
    justify-items: start;
    align-items: start;
    justify-content: start;
    height: 100%;
    width: 100%;
    flex-direction: column;
    padding: 2rem;
  }

  .card-image {
    padding: 8cqb;
    width: 100%;
    height: 100%;
  }
  #img {
    width: 376px;
  }
  #img1 {
    width: 200px;
  }

  .card:hover {
    transform: scale(1.02);
    background-color: ${(props) => props.theme.transparent};
  }
`;

export default Container;
