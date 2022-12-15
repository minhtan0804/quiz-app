import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    font-size: 24px;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    background: #ccc;
    min-height: ${props => props.isMobile ? '100vh' : '0px'};    
`;

export const ExamContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const Content = styled.div`
    width: ${props => props.isMobile ? 100 : 70}%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const HeaderContent = styled.div`
    height: ${props => props.isMobile ? '6%' : 'calc(12% - 2px)'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3% 4% 2% 4%;
    border: ${props => props.isMobile ? 'none' : '1px solid rgba(0, 0, 0, 0.5)'};
    font-size: 20px;
    background: #D9D9D9;
`;

export const HeaderTitle = styled.div`
    font-weight: 700;
    font-size: 24px;
    display: ${props => props.isMobile ? 'none' : 'block'};
`;

export const HeaderCountdown =  styled.div`
    margin-top: ${props => props.isMobile ? 0 : 1}%;
    margin-bottom: ${props => props.isMobile ? 2 : 0}%;
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
    width: ${props => props.isMobile ? '96%' : 'calc(88% - 2px)'};
    height: ${props => props.isMobile ? '92%' : 'calc(76% - 2px)'};
    background: #C4C4C4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${props => props.isMobile ? '2%' : '5% 6% 5% 6%'};
    border: ${props => props.isMobile ? 'none' : '1px solid rgba(0, 0, 0, 0.5)'};    
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
    width: ${props => props.isMobile ? 100 : 90}%;
    margin: ${props => props.isMobile ? '16% 0% 0% 2%' : '4% 0% 0% 4%'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const AnswerLabel= styled.div`
    /* background: #fff; */
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: ${props => props.isMobile ? 6 : 2}%;
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
    height: ${props => props.isMobile ? 25 : 10}%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const TopFooter = styled.div`
    height: 70%;
    height: ${props => props.isMobile ? 36 : 70}%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const PrevButton = styled.button`
    height: 100%;
    width: ${props => props.isMobile ? 36 : 15}%;
    min-width: 65px;
    background: #EEE7A9;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    font-weight: 700;
    font-size: 20px;
    margin: ${props => props.isMobile ? '0px 5%': 'auto'};
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
    display: ${props => props.isMobile ? 'block' : 'none'};
`;


export const SideMenu = styled.div`
    width: ${props => props.isMobile ? '90%' : 'calc(30% - 2px)'};
    height: ${props => props.isMobile ? '70%' : 'calc(100% - 2px)'};
    min-width: 350px;
    background: #D9D9D9;
    border: 1px solid rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-left: ${props => props.isMobile ? 5 : 0}%;
    position: ${props => props.isMobile ? 'fixed' : 'unset'};
    z-index: ${props => props.isMobile ? 1000 : 1};

    @media screen and (max-width: 1023.98px) {
        display: none;
    }
    
`;

export const SubmitButton = styled.button`
    width: ${props => props.isMobile ? 40 : 30}%;
    height: ${props => props.isMobile ? 10 : 6}%;
    margin-bottom: 15%;
    background: #9F9D9F;
    border-radius: 40px;
    border: none;
    font-weight: 700;
    font-size: 24px;
`;