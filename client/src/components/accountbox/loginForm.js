import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  Or,
  Socialmedia,
  Googlelogin,
  login_a_tag,
  Google_banner,
  Span_text, Facebook_banner,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from "axios";



const LoginForm = () => {
  const { switchToSignup } = useContext(AccountContext);

  const [user, setUser] = useState({

    email: "",
    password: "",

  })



  const handleChange = e => {
    console.log(e.target);
    const {
      name,
      value
    } = e.target

    setUser({
      ...user,
      [name]: value
    })
  }

  const login = () => {
    axios.post("http://localhost:9000/login", user)
      .then(res => alert(res.data.message))

  }


  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" name="email" value={user.email} placeholder="Email" onChange={handleChange} />
        <Input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={login}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
      <Or>---- OR ----</Or>
      <Socialmedia>
        <Googlelogin>
          <login_a_tag>
            <Google_banner></Google_banner>
            <Span_text>Sign in with Google</Span_text>
          </login_a_tag>
        </Googlelogin>
        <Googlelogin>
          <login_a_tag>
            <Facebook_banner></Facebook_banner>
            <Span_text>Sign in with Facebook</Span_text>
          </login_a_tag>
        </Googlelogin>
      </Socialmedia>
    </BoxContainer>
  );
}

export default LoginForm