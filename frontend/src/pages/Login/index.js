import React from 'react';

import {
  PageContainer,
  LoginContainer,
  SubmitButton,
  FormLogin,
} from './styles';

export default function Login() {
  return (
    <PageContainer>
      <LoginContainer>
        <h1>Login</h1>
        <FormLogin>
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" />
          <SubmitButton>Login</SubmitButton>
        </FormLogin>
      </LoginContainer>
    </PageContainer>
  );
}
