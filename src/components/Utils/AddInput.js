import React from "react";

import Button from "./Button";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const AddInput = ({ onChange, onSubmit, placeholder }) => {
  return (
    <Form onSubmit = {onSubmit}>
      <label>
        <input type="text" placeholder={placeholder} onChange={onChange}></input>
      </label>
      <Button type="submit" text="Add">
        <FaPlus />
      </Button>
    </Form>
  );
};

const Form = styled.form`
  margin-bottom: 10rem;
`;

export default AddInput;
