import React, { useRef } from "react";
import { auth } from "../firebase.js";
import {
  Container,
  InnerContainer,
  Form,
  Input,
  SignUpButton,
  Title,
} from "../styles/SignUpScreen.styles.js";

export const SignUpScreen = ({ emailRef }) => {
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log({ authUser });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Container>
      <InnerContainer>
        <Form>
          <Title>Sign Up</Title>
          <Input
            ref={emailRef}
            defaultValue={emailRef?.current?.value}
            type="email"
            placeholder="Email"
            autoFocus={!emailRef?.current?.value}
          />
          <Input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            autoFocus={!!emailRef?.current?.value}
          />
          <SignUpButton onClick={register}>Sign Up</SignUpButton>
        </Form>
      </InnerContainer>
    </Container>
  );
};
