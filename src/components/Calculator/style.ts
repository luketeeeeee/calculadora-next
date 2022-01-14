import styled from "styled-components";

export const Container = styled.main`
  width: 500px;
  height: 600px;
  padding: 2rem 0;
  margin: auto;
  background: var(--calculator-bg);
  border-radius: 0.5rem;

  .main-container {
    width: 90%;
    margin: auto;

    .buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 5px;

      button {
        height: 80px;
        border: none;
        border-radius: 0.15rem;
        font-size: 1.2rem;
        font-weight: 600;
      }

      .functional {
        background-color: var(--red);
      }

      .num {
        background-color: var(--dark-gray);
      }

      .operator {
        background-color: var(--blue);
      }

      .assistant {
        background-color: var(--light-gray);
      }

      .result {
        background-color: var(--green);
      }
    }
  }
`;