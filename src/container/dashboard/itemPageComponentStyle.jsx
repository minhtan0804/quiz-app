import styled from "styled-components"

export const ItemPageWrap = styled.div`
    width: 100%;
    height: 100%;  
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ItemPrevPage = styled.div`
    width: 2%;
    height: 80%;
    display: flex;
    justify-content: center;
    background: #919EAB;
    opacity: 0.5;
    border-radius: 4px;
    > img {
        width: 32%;
    }
`;

export const ItemPage = styled.div`
    width: 2%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 4px;
    background: #FFFFFF;
    border: 1px solid #DFE3E8;
    border-radius: 4px;
    font-size: 14px;

    border-color: ${props => props.border};
`;

export const ItemNextPage = styled.div`
    width: 2%;
    height: 80%;
    display: flex;
    justify-content: center;
    background: #FFFFFF;
    border: 1px solid #DFE3E8;
    border-radius: 4px;
    > img {
        width: 32%;
    }
`;


