import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;   
`;

export const PrevPage = styled.button` 
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #919EAB;
    opacity: 0.5;
    border-radius: 4px;
    border: none;
    margin-right: 8px;

    > img {
        width: 60%;
    }
`;

export const Page = styled.button`
    height: 32px;
    width: 32px;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #DFE3E8;
    border-radius: 4px;
    margin-right: 8px;
    font-weight: 700;
    font-size: 14px;

    border-color: ${props => props.border};
    color: ${props => props.color};
`;

export const NextPage = styled.button`
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #DFE3E8;
    border-radius: 4px;
    margin-right: 8px;

    > img {
        width: 60%;
    }
`;