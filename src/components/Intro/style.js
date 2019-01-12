import styled from 'styled-components';

export const Appbox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    width: 90%;
    padding: 20px;
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
    background: #ccc;
    box-shadow: 0px 0px 2px black;
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
    }
    img{
        width: 100%;
        height: auto;
    }
`
