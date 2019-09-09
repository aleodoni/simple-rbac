import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100%;
  background: #ddd;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginContainer = styled.div`
  max-width: 400px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;

export const FormLogin = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  input {
    flex: 1;

    border: 1px solid #ddd;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #7159c1;
  border: 0;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 18px;
  color: #fff;

  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
