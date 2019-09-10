import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginDialog = styled.div`
  max-width: 400px;
  width: 80%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  padding: 30px;
`;

export const FormLogin = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    flex: 1;

    border: 1px solid #ddd;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 18px;
  color: #fff;
  width: 100%;

  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-right: 10px;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
