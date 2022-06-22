import React from "react";

import Button from "./Button";
import styled from "styled-components";

const AddInput = ({ onChange, onSubmit, placeholder, children }) => {
  return (
    <Form onSubmit={onSubmit}>
      <label>
        <input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
        ></input>
      </label>
      <Button type="submit" height={"25px"} padding={"auto"}>
        {children}
      </Button>
    </Form>
  );
};

const Form = styled.form`
  margin-bottom: 10rem;
`;

export default AddInput;
