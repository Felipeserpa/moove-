import styled from 'styled-components';

const Container = styled.div`
  #skills-container {
    max-width: 1200px; /* Aumenta um pouco a largura máxima */
    margin: 0 auto; /* Centraliza o container */
    display: flex;
    justify-content: center; /* Centraliza os cards horizontalmente */
    flex-wrap: wrap;
    gap: 3rem; /* Aumenta o espaçamento entre os cards */
    padding: 3rem; /* Padding geral */

    @media (max-width: 930px) {
      gap: 2rem;
      padding: 2rem;
    }
  }

  #skills-container .skill-card {
    border: 1px solid ${(props) => props.theme.primaryColor};
    width: 25rem; /* Largura um pouco maior */
    padding: 2rem; /* Padding interno maior */
    text-align: center;
    transition: 0.5s ease-in-out;
    background-color: rgba(
      0,
      0,
      0,
      0.2
    ); /* Adiciona um fundo levemente transparente */
    border-radius: 10px; /* Arredonda os cantos */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */

    &:hover {
      transform: scale(1.05); /* Escala um pouco menos no hover */
      background-color: rgba(0, 0, 0, 0.3); /* Fundo mais escuro no hover */
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Sombra mais intensa no hover */
    }

    @media (max-width: 930px) {
      width: 18rem;
      padding: 1.5rem;
    }
  }

  #skills-container .skill-card h2 {
    color: aliceblue;
    font-size: 2.2rem; /* Tamanho da fonte um pouco maior */
    font-weight: 600; /* Mais negrito */
    margin-bottom: 1rem; /* Margem inferior */

    @media (max-width: 930px) {
      font-size: 1.7rem;
    }
  }

  #skills-container .skill-card p {
    /* Estilo para o parágrafo de descrição */
    color: #ccc; /* Cor de texto mais clara */
    font-size: 1.4rem;
    line-height: 1.6; /* Melhora a legibilidade */
    padding: 0 1rem; /* Padding lateral */

    @media (max-width: 930px) {
      font-size: 1.2rem;
    }
  }

  #skills-container .icon {
    font-size: 7rem; /* Ajusta o tamanho do ícone */
    color: ${(props) => props.theme.secondaryColor};
    margin-bottom: 1rem; /* Espaçamento abaixo do ícone */

    @media (max-width: 930px) {
      font-size: 5rem;
    }
  }
`;

export default Container;
