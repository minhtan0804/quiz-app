import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    font-size: 24px;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    background: #ccc;

    @media screen and (max-width: 1023.98px) {
        min-height: 100vh;
        /* height: auto; */
    }
    
`;

export const ExamContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const Content = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1023.98px) {
        width: 100%;
    }
    
`;

export const HeaderContent = styled.div`
    background: #D9D9D9;
    border: 1px solid rgba(0, 0, 0, 0.5);
    height: calc(12% - 2px);
    padding: 3% 4% 2% 4%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 20px;

    @media screen and (max-width: 1023.98px) {
        border: none;
        height: 6%;
    }
    
`;

export const HeaderTitle = styled.div`
    font-weight: 700;
    font-size: 24px;

    @media screen and (max-width: 1023.98px) {
        display: none;
    }
    
`;

export const HeaderCountdown =  styled.div`
    margin-top: 1%;

    @media screen and (max-width: 1023.98px) {
        margin-top: 0;
        margin-bottom: 2%;
    }
    
`;

export const HeaderTimeline = styled.div`
    position: relative;
    width: 100%;
    height: 16px;
    background: #BAB7B7;
    border-radius: 4px;
    overflow: hidden;
`;

export const HeaderTimeCountdown = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: #41C54E;
`;

export const MainContent = styled.div`
    width: calc(88% - 2px);
    height: calc(76% - 2px);
    background: #C4C4C4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5% 6% 5% 6%;
    border: 1px solid rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 1023.98px) {
        padding: 2%;
        width: 96%;
        height: 92%;
        border: none;
    }
    
`;

export const QuestionAndAnswer = styled.div`
    width: 100%;
    flex-shrink: 1;
    height: 80%;
`;

export const Question = styled.div`
    font-weight: 700;
    font-size: 24px;
    width: 100%;
`;

export const AnswerForm = styled.div`
    width: 90%;
    margin: 4% 0% 0% 4%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 1023.98px) {
        width: 100%;
        margin: 0;
        margin-top: 16%;
        margin-left: 2%;
    }
    
`;

export const AnswerLabel= styled.div`
    /* background: #fff; */
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 2%;

    @media screen and (max-width: 1023.98px) {
        margin-bottom: 6%;
    }
    
`;

export const AnswerCheckbox = styled.input`
    width: 36px;
    height: 36px;
    margin: 0;
    background: #D9D9D9;
    border: 1px solid #000000;
    border-radius: 4px;
`;

export const Answer = styled.div`
    font-weight: 400;
    font-size: 24px;
    margin-left: 2%;
`;

export const FooterMain = styled.div`
    width: 100%;
    height: 10%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1023.98px) {
        height: 25%;
    }
    
`;

export const TopFooter = styled.div`
    height: 70%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1023.98px) {
        height: 36%;
        /* margin-bottom: 8%; */
    }
    
`;

export const PrevButton = styled.button`
    height: 100%;
    width: 15%;
    min-width: 65px;
    background: #EEE7A9;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    font-weight: 700;
    font-size: 20px;

    @media screen and (max-width: 1023.98px) {
        margin: 0px 5%;
        width: 36%;
        height: 100%;
    }
    
`;

export const RadomIndexButton = styled.button`
    width: 50%;
    height: 35%;
    background: #9F9D9F;
    border-radius: 41px;
    margin-bottom: 4%;
    font-weight: 700;
    font-size: 24px;
    border: none;

    @media screen and (min-width: 1024px) {
        display: none;
    }
    
`;


export const SideMenu = styled.div`
    height: calc(100% - 2px);
    width: calc(30% - 2px);
    min-width: 350px;
    background: #D9D9D9;
    border: 1px solid rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1023.98px) {
        /* display: none; */
        z-index: 1000;
        position: fixed;
        width: 90%;
        height: 70%;
        margin-left: 5%;
    }
    
`;

export const SubmitButton = styled.button`
    margin-bottom: 15%;
    width: 30%;
    height: 6%;
    background: #9F9D9F;
    border-radius: 40px;
    border: none;
    font-weight: 700;
    font-size: 24px;

    @media screen and (max-width: 1023.98px) {
        width: 40%;
        height: 10%;
    }
    
`;