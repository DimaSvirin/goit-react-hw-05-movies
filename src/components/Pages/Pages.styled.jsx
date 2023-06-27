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
    font-size: 1.3rem;
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

export const MovieForm = styled.div`
  label {
    display: flex;
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  input {
    font-size: 1.1rem;
    border: 1px solid;
    border-radius: 5px;
    margin-right: 10px;
  }
  input::placeholder {
    font-size: 0.9rem;
  }
  
  button {
    border: 1px solid;
    font-size: 1.1rem;
    border-radius: 5px;
    background-color: #fff;
      &:hover {
        background-color: blue;
        color: #fff;
      }
      
  }
`