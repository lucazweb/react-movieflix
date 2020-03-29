import styled from 'styled-components';

export const FeaturedBox = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  background-image: url('https://observatoriodocinema.elav.tmp.br/wp-content/uploads/2019/12/img_0845.jpg');
  background-repeat: no-repeat;
  backround-size: cover;
  background-position: 0px -${(props) => props.yPos}px;
  padding: 40px;
  box-sizing: border-box;
  box-shadow: inset 30px 30px 60px rgba(0,0,0, 0.8);  
`;

export const FeaturedInfo = styled.div`
  width: 35%;
  position: absolute;
  top: 0;
  left: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FeaturedTitle = styled.h1`
  color: white;
  text-shadow: 0px 0px 10px black;
  opacity: 0.7;
  font-size: 8em;
  margin-bottom: 0;
  padding: 0;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
`;


export const FeaturedButton = styled.button`
  cursor: pointer;
  border: none;
  background: #E04141;
  color: white;
  width: 300px;
  height: 50px;
  border-radius: 4px;
  opacity: 0.8;
  transition: opacity ease 0.4s;
  box-shadow: 0 0 2px black;
  ouline: none;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  &:hover{
    opacity: 1;
  }
`;
