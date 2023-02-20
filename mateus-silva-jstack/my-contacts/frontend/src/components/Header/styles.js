import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 4.625rem;
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

`;

export const InputSearchContainer = styled.div`
  margin-top: 3rem;
  width: 100%;

  input {
    width: 100%;
    padding: 0 1rem;
    border: none;
    border-radius: 25px;
    height: 3.125rem;
    background: hsl(0, 100%, 100%);
    box-shadow: 0px 4px 10px hsla(0, 0%, 0%, .04);
    outline: 0;

    &::placeholder {
      color: hsl(0, 0%, 74%);
    }
  }
`;
