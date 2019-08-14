import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-size: 2em;
  text-shadow: 2px 2px 2px black;
  text-align:center;
  color: white;
  margin: 15px auto 5px auto;
  padding:0;
  background-image:url('./assets/logo.png');
`;

export const Appbox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 90%;
    padding: 10px;
    margin:auto;
    height: 80vh;
`;

export const Movie = styled.div`
    display:flex;
    position: relative;
    overflow: hidden;
    flex-direction: column;
    width: 200px;
    height: 280px;
    margin: 10px;
    background: #ccc;
    box-shadow: 1px 1px 5px black;
    transition:all ease 0.6s;
    filter: saturate(50%) drop-shadow(16px 16px 20px black);
    &:hover{
        cursor: pointer;
        box-shadow: 1px 1px 8px black;
        img{
            filter: saturate(160%) drop-shadow(6px 6px 20px black);
        }
    }
    h2{
        position: absolute;
        bottom: 0;
        margin:0;
        font-size: 0.8em;
        background: rgba(0, 0, 0, 0.8);
        color: #ccc;
        width: 100%;
        padding: 5px;
        text-align: center;
        font-family: font-family: 'Mukta', sans-serif !important;
        a{
          color: #ccc;
          text-decoration: none;
        }
    }
    img{
        width: 100%;
        height: auto;
    }
`
