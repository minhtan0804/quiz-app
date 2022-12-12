import styled from "styled-components";

export const ExamWrap = styled.div`
    width: 100vw;
    height: 100vh;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
`;

export const Content = styled.div`
    width: 70%;
    height: 100%;
`;

export const SideBar = styled.div`
    width: 20%;
    /* height: 80%; */
    background: #D9D9D9;
    padding: 4% 5%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderContent = styled.div`
    height: 15%;
    padding: 0 4%;
    background: #D9D9D9;
    border: 1px solid rgba(0, 0, 0, 0.5);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const Title = styled.div`
    width: 100%;
    height: 24%;
    margin: 2% 0px 0px;
`;

export const TimeExist = styled.div`
    font-size: 20px;
    font-weight: normal;
`;

export const TimeLine = styled.div`
    height: 10%;
    background: #41C54E;
    margin-top: 2%;
`;

export const ContentWrap = styled.div`
    width: 92%;
    height: 76%;
    padding: 4% 4% 2%;
    background: #F5F5F5;    
`;

export const Question = styled.div`
    line-height: 29px;
    align-items: center;
    padding: 2%;
`;

export const AnswerForm = styled.div`
    padding: 2% 0px 0px 6%;
`;

export const AnswerLabel = styled.div`
    margin: 0px 2%;
    height: 2em;
    display: flex;
    align-items: center;
    margin-top: 1%;

    .answer {
        transform: scale(2);
        margin-right: 2%;
    }
`;

export const Prev = styled.button`
    position: fixed;
    left: 4%;
    top: 86%;
    width: 12%;
    height: 8%;
    background: #EEE7A9;
    border: none;
    border-radius: 6px;
    font-size: 24px;
    font-weight: bold;
`;

export const Next = styled.button`
    position: fixed;
    width: 12%;
    right: 34%;
    top: 86%;
    height: 8%;
    background: #EEE7A9;
    border: none;
    border-radius: 4px;
    font-size: 24px;
    font-weight: bold
`;

export const ButtonSubmit = styled.button`
    position: fixed;
    bottom: 4%;
    right: 8%;
    width: 12%;
    height: 6%;
    background: #9F9D9F;
    border-radius: 41px;
    border: none;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
`;
