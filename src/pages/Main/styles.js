import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-rigth: 10px;
    }
  }
`;

export const Form = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`;

export const SubmitButton = styled.div``;
