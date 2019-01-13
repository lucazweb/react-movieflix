import styled from 'styled-components';

export const Appbox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items:flex-start;
    justify-content: space-around;
    width: 70%;
    padding: 10px;
    margin:auto;
    height: 80vh;
`;

export const MovieImageBox = styled.div`
  width: 342px;
  overflow: hidden;
  box-shadow: 0px 2px 6px black;
  img{
    display:flex;
    width: 100%;
    align-self: center;
  }
`;

export const MovieDetailBox = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  width: 50%;
  height: auto;
  h2{
    color: white;
    margin:0;
  }
  p{
    color: white;
    line-height: 17pt;
  }
`;