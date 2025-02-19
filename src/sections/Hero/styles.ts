import styled from 'styled-components';

const Container = styled.div`
  .presentation {
    min-height: 100vh;
    background-image: url(/cuidador.jpg);
    background-size: cover;
    background-position: top center;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    @media (max-width: 930px) {
      min-height: 90vh;
      align-items: flex-start;
    }
  }

  .presentation::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.black};
    opacity: 0.5;
    z-index: -1;
  }

  .presentation div {
    width: 100%;
    max-width: 700px;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: 930px) {
      max-width: 100%;
      padding-top: 20px;
    }
  }

  .presentation h1 {
    display: block;
    font-size: 3rem;
    position: relative;
    color: ${(props) => props.theme.transparent};
    animation: text_reveal 0.5s ease forwards;
    padding-left: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    max-width: 100%;
  }

  .presentation h1:nth-child(1) {
    animation-delay: 0.5s;
  }

  .presentation h1:nth-child(2) {
    animation-delay: 1s;
  }

  .presentation h1:nth-child(3) {
    animation: text_reveal_name 0.1s ease forwards;
    animation-delay: 3s;
    color: #9c5000;
  }

  .presentation h1 span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 20;
    animation: text_reveal_box 1s ease forwards;
    background-color: rgb(156, 80, 0);
    animation-delay: 0.5s;
  }

  @keyframes text_reveal {
    100% {
      color: aliceblue;
    }
  }
  /* ... (rest of your CSS) */

  .presentation button {
    display: inline-block;
    padding: 1.5rem 3rem; /* Aumenta o padding para melhor aparência */
    font-size: 1.4rem; /* Aumenta um pouco o tamanho da fonte */
    background-color: #1da851; /* Verde do WhatsApp (ou sua cor preferida) */
    color: white; /* Cor do texto branca para contraste */
    border: none; /* Remove a borda padrão */
    border-radius: 10px; /* Arredonda os cantos (ajuste o valor conforme preferir) */
    font-weight: 600; /* Deixa o texto um pouco mais negrito */
    text-transform: uppercase; /* Transforma o texto em maiúsculas */
    letter-spacing: 0.1rem; /* Espaçamento entre as letras */
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); /* Adiciona uma sombra suave */
    transition: all 0.3s ease; /* Adiciona uma transição suave para os efeitos hover */
    cursor: pointer; /* Muda o cursor para uma mãozinha ao passar por cima */
    width: auto; /* Largura automática */

    &:hover {
      background-color: #1da851; /* Verde mais escuro no hover */
      transform: translateY(-2px); /* Levemente para cima no hover */
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25); /* Sombra mais forte no hover */
    }

    /* Estilos para telas menores (opcional) */
    @media (max-width: 768px) {
      font-size: 1.2rem;
      padding: 1rem 2rem;
    }
  }
`;

export default Container;
