import styled from "styled-components";

export const ItemQuiz = styled.div`
    padding: 4%;
    height: 20%;
    border: 1px solid #000000;
    border-radius: 4px;
    margin: 3% 0px 4%;
`;

export const Title = styled.div`
    font-size: 20px;
    width: 100%;
    margin-bottom: 3%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const Infor = styled.div`
    display: flex;
    font-size: 16px;
`;

export const InforItem = styled.div`
    width: 40%;
    height: 5%;
    display: flex;
    align-items: center;    
`;

export const InforTextQuiz = styled.div`
    margin-left: 5%;
`;

export const IconImg = styled.img`
    width: 16%;
`;

export const Ratings = styled.div`
    margin-top: 3%;

    > img {
        margin-right: 1%;
    }
`;