import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    font-size: 24px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F5F5F5;
`;

export const Content = styled.div`
    width: ${props => props.isMobile ? 90 : 50}%;
    height: ${props => props.isMobile ? 96 : 40}%;
    padding: ${props => props.isMobile ? 5 : 2}%;
    border: ${props => props.isMobile ? 'none' : '1px solid rgba(0, 0, 0, 0.5)'};
    background: #D9D9D9;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

export const TopContent = styled.div`
    width: 100%;
    height: 80%;
`;

export const HeaderContent = styled.div`
    width: 100%;
    font-weight: 700;
    margin-bottom: 2%;
    font-size: ${props => props.isMobile ? 26 : 24}px;    
`;

export const MainContent = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    margin-bottom: 10%;
    margin-top: ${props => props.isMobile ? 10 : 0}%;
    flex-direction: ${props => props.isMobile ? 'column' : 'row'};
`;

export const DetailContest = styled.div`
    height: 100%;
    width: ${props => props.isMobile ? 'auto' : '40%'};
    min-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; 
    `;

export const ChildDetails = styled.div`
    flex-direction: row;
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;

export const Detail = styled.div`
`;

export const ResultDetail = styled.div`
`;

export const ResultContest = styled.div`
    width: ${props => props.isMobile ? 'auto' : '60%'};
    margin-top: ${props => props.isMobile ? 50 : 0}px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;    
    `;

export const Result = styled.div`
    font-weight: 700;
    font-size: 26px;
    `;

export const DashboardButton = styled.button`
    align-self: center;
    width: ${props => props.isMobile ? 50 : 25}%;
    height: ${props => props.isMobile ? 8 : 18}%;
    margin-bottom: ${props => props.isMobile ? 24 : 0}%;
    background: #9F9D9F;
    border-radius: 41px;
    border: none;
    font-weight: 700;
    font-size: 24px;    
`;
