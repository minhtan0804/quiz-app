import styled from "styled-components";

export const Wrapper = styled.div` 
    width: 55%;
    min-width: 320px;
    margin: 15% auto;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 1023.98px) {
        width: 90%;
    }
    
`;

export const IndexItem = styled.div`
    width: 48px;
    height: 64px;
    background: #D9D9D9;
    border: 1px solid #000000;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4% 2%;

    background: ${props => props.background};
`;