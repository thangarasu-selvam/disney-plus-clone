import React from 'react';
import styled from 'styled-components';

function Login(props) {
    return (
      <Container>
        <CTA>
          <LogoOne src="/images/cta-logo-one.svg" />
          <SignupButton>GET ALL THERE</SignupButton>
          <Description>
            Disney+ is the streaming home of Disney, Pixar, Marvel, Star Wars,
            National Geographic, and more.
          </Description>
          <LogoTwo src="/images/cta-logo-two.png" />
        </CTA>
      </Container>
    );
}

export default Login;

const Container = styled.div`
    height: calc(100vh - 70px);
    position: relative;
    display:flex;
    align-items:top;
    justify-content:center;

    &:before {
        content:"";
        position:absolute;
        background-image: url("/images/login-background.jpg");
        background-size:cover;
        background-position:top;
        background-repeat:no-repeat;
        top:0;
        right:0;
        bottom:0;
        left:0; 
        opacity:0.6;
        z-index:-1;
        
    }
`
const CTA = styled.div`
    max-width:650px;
    width: 90%;
    padding:80px 25px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;
const LogoOne = styled.img `

`
const SignupButton = styled.a`
    background: #0063e5;
    width:100%;
    padding: 15px 0;
    text-align:center;
    border-radius:4px;
    font-weight:bold;
    font-size:15px;
    color:#f9f9f9;
    cursor:pointer;
    transition: all 250ms; 
    letter-spacing:1.5px;
    margin-top : 8px;
    margin-bottom : 12px; 
    &:hover {
        background: #0483ee;
    }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  line-height: 1.5;
  text-align:center;
`;

const LogoTwo = styled.img`
    width:90%;
`