import React, { useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

import {
  LoginButton,
  LoginContainer,
  LoginWrapper,
  FormControl,
  LoginTitle,
  FormLogin,
  Input,
  Label,
} from "./StyledLogin";

function Login() {
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      await login(emailRef.current.value, passwordRef.current.value);

      history.push("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginTitle>Login</LoginTitle>
        <FormLogin onSubmit={handleLogin}>
          <FormControl>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" ref={emailRef} required />
          </FormControl>
          <FormControl>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" ref={passwordRef} required />
          </FormControl>
          <FormControl>
            <LoginButton>Login</LoginButton>
          </FormControl>
        </FormLogin>
      </LoginWrapper>
    </LoginContainer>
  );
}

export default Login;
