import styled from 'styled-components';

export const Details = styled.div`
  article {
    display: flex;
    gap: 20px;
    align-items: start;
    margin-top: 20px;
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    margin: 30px 0 0;
    font-size: 1.2rem;
  }

  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
    span {
        font-size: 1.1rem;
        font-weight: 500;
        font-style: italic;
    }
  }
`;