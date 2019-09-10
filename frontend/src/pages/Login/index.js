import React, { Component } from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Container, LoginDialog, SubmitButton, FormLogin } from './styles';

import api from '../../service/api';

import Error from '../../components/Error';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {},
      username: '',
      password: '',
      loading: 0,
      error: false,
      errorMessage: [],
    };
  }

  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: 1 });

    const { username, password, error, errorMessage } = this.state;

    const params = {
      username,
      password,
    };

    try {
      const response = await api.post('/sessions', params);

      const data = {
        id: response.data.user.id,
        username: response.data.user.username,
        email: response.data.user.email,
        token: response.data.token,
      };

      this.setState({
        userData: data,
        username: '',
        password: '',
        loading: 0,
        error: false,
      });
    } catch (err) {
      this.setState({
        // username: '',
        // password: '',
        loading: 0,
        error: true,
        errorMessage: err.response.data.error,
      });
      // console.log(err);
    }
  };

  render() {
    const { username, password, loading, error, errorMessage } = this.state;

    return (
      <Container>
        <LoginDialog>
          <h1>Login</h1>
          <FormLogin onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={username}
              onChange={this.handleUsernameChange}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={this.handlePasswordChange}
            />
            <SubmitButton loading={loading}>
              {loading ? (
                <>
                  <span>Please wait...</span>
                  <FaSpinner color="#fff" size={14} />
                </>
              ) : (
                'Login'
              )}
            </SubmitButton>
          </FormLogin>
          {error && <Error errorMessages={errorMessage} />}
        </LoginDialog>
      </Container>
    );
  }
}
