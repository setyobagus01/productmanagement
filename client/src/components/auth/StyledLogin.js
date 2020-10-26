import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const LoginWrapper = styled.div`
  width: 15%;
  height: 50vh;
  border: 1px solid #bebaba;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormLogin = styled.form`
  width: 80%;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const LoginTitle = styled.h3`
  font-size: 2rem;
  margin: 2rem auto;
`;

const Label = styled.label`
  font-size: 0.8rem;
  margin-bottom: 0.7rem;
  font-weight: 600;
`;

const Input = styled.input`
  outline: none;
  height: 5vh;
  border-radius: 5px;
  border: 1px solid #bebaba;
  padding-left: 0.8rem;

  &:focus {
    border-color: blue;
  }
`;

const LoginButton = styled.button`
  width: 40%;
  padding: 1rem 0;
  border-radius: 5px;
  outline: none;
  background-color: #0b7edc;
  color: #fff;
  border: none;
  margin: 0 auto;

  &:hover {
    background-color: #196eb4;
  }
`;

export {
  LoginButton,
  LoginContainer,
  LoginWrapper,
  FormControl,
  LoginTitle,
  FormLogin,
  Input,
  Label,
};
