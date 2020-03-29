import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

export const MainTitleStyled = styled.div`
  width: 30%;
  margin: auto;
  font-size: 2em;
  text-shadow: 2px 2px 2px black;
  text-align:center;
  color: white;
  margin: 15px auto 5px auto;
  padding:0;
  @media only screen and (max-width: 768px){
    width: 100%;
  }
  img{
    width: 100%;
  }
`;

const MainTitle = () => (
  <MainTitleStyled>
    <img title="React MovieFlix by @lucazweb" alt="React MovieFlix" src={logo} /> 
  </MainTitleStyled>
);

export default MainTitle;
