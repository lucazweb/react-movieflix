import styled from 'styled-components';

export const Appbox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: space-around;
    width: 90%;
    padding: 10px;
    margin:auto;
    height: 80vh;
`;

export const MovieImageBox = styled.div`
  width: 40%;
  height: 500px;
  overflow: hidden;
  box-shadow: 0px 2px 6px black;
  img{
    width: 100%;
    height:500px;
  }
`;

export const MovieDetailBox = styled.div`
  display:flex;
  flex-direction:column;
  width: 50%;
  height: 450px;
  h2{
    color: white;
    margin:0;
  }
  p{
    color: white;
    line-height: 17pt;
  }
`;