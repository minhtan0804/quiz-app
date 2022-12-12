import styled from "styled-components";

export const IndexQuizWrap = styled.div`
    width: 100%;
    /* height: auto; */
    /* background: #fff; */
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
`;

export const IndexQuizItem = styled.div`
    line-height: 58px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    border: 1px solid #000;
    border-radius: 4px;
    margin: 25% 18% 0px;

    background: ${props => props.background};
`;