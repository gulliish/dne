import React, { useState } from "react";
import {
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import LoaderButton from "./LoaderButton";
import { useDispatch } from "react-redux";
import { postAuthThunk } from "../LoginSlice";


export default function ForgetPassword() {

  const dispatch = useDispatch();

  const [value, setValue] = useState({
    email: '',
  })
  return (
    <form >
      <FormGroup bsSize="medium" controlId="email" className="forgetForm">
        <FormLabel>Email</FormLabel>
        <FormControl
          autoFocus
          type="email"
          onChange={(e) => setValue({ ...value, email: e.target.value })}
        />
        <a className="atext" href="/login"><i className="bi bi-arrow-bar-left"></i> Back</a>
        <LoaderButton
          className="btn addAssignBtn btn-secondary"
          block
          type="submit"
          bsSize="large"
          onClick={() => {
            dispatch(postAuthThunk(value));
            console.log(value);
          }}
        >
          Send Confirmation
        </LoaderButton>
      </FormGroup>

    </form>
  );
}