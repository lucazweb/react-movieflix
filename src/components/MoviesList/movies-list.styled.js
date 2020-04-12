import styled from 'styled-components';

export const MovieRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 90%;
  @media only screen and (max-width: 768px){
    flex-direction: column;
  }
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

    @media only screen and (max-width: 768px){
      width: 100%;
      height: 70vh;
    }
`;
export const MovieTitle = styled.h2`
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
`;

export const MovieImage = styled.img`
  width: 100%;
  height: auto;
`

