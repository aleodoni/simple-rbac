import React from 'react';
// import PropTypes from 'prop-types';

import { Container } from './styles';

function Error(errorMessages) {
  const errors = errorMessages.errorMessages;

  if (typeof errors === 'string') {
    return (
      <Container>
        <ul>{errors}</ul>
      </Container>
    );
  }
  const messages = errors.map(message => {
    return <li key={message}>{message}</li>;
  });

  return (
    <Container>
      <ul>{messages}</ul>
    </Container>
  );
}

export default Error;
