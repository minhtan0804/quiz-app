import styled from "styled-components";

export const Wrapper = styled.div`
    width: calc(34%);
    height: calc(24%);
    background: #fff;
    margin: 0px 5% 3% 5%;
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 20px;
    align-items: center;
    padding: 1% 2%;
    background: #D9D9D9;
    border: 1px solid #000000;
    border-radius: 4px;
    min-width: 230px;

    @media screen and (max-width: 1023.98px) {
        width: 90%;
        padding: 2% 4%;
        height: 15%;
        margin: 0;
        margin-bottom: 8%;
    }
    
`;

export const Title = styled.div`
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const InfoQuizWrap = styled.div`
    width: 100%;
    height: 40px;
    margin-top: 12px;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    flex-wrap: wrap;
    gap: 12%;
`;

export const InfoQuiz = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-width : 100px;
    
`;

export const IconInfoQuiz = styled.img`
    object-fit: cover;
`;

export const InfoItem = styled.div`
    margin-left: 16px;  
`;


export const LevelQuiz = styled.div`
    align-self: flex-start;
    height: 32px;
    margin-top: 10%;

    @media screen and (max-width: 1023.98px) {
        margin-top: 5%;
    }
    
`;

export const Star = styled.img`
    height: 100%;
`;


