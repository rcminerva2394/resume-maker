import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import { Icon } from '../Utils/Icon';

const AddInput = ({ onChange, onSubmit, placeholder }) => {
  return (
    <Form onSubmit={onSubmit}>
      <label>
        <input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
        ></input>
      </label>
      <Button
        type="submit"
        height={'25px'}
        padding={'auto'}
        fontSize={'12rem'}
        tertiary
      >
        <Icon name={'plus'} />
      </Button>
    </Form>
  );
};

const Form = styled.form`
  margin-bottom: 10rem;
`;

export default AddInput;
