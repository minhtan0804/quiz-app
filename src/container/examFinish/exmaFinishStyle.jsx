import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    font-size: 24px;
    font-weight: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F5F5F5;
`;

export const Content = styled.div`
    width: 60%;
    height: 56%;
    background: #D9D9D9;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const HeaderContent = styled.div`
    font-weight: 700;
    width: 70%;
    display: flex;
    align-items: center;
    margin: 4% 0px 4% 5%;
`;

export const MainContent = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    margin-left: 5%;
`;

export const InforQuiz = styled.div`
    width: 30%;
    height: 100%;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    > span {
        margin: 2px 0px;
    }
`;

export const ResultDetails = styled.div`
    height: 100%;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    margin-left: 10%;

    > span {
        margin-bottom: 2px;
    }
`;

export const ResultQuiz = styled.div`
    font-weight: 700;
    align-self: center;
    margin-left: 30%;
`;

export const FooterContent = styled.button`
    background: #9F9D9F;
    border-radius: 41px;
    align-self: center;
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    padding: 2% 4%;
    margin-top: 5%;
`;