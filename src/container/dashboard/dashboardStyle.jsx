import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    border: none;
`;

export const SideMenu = styled.div`
    width: 20%;
    background: #D9D9D9;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    border: none;
`;


export const TopSideMenu = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AvatarWrap = styled.div`
    width: 60%;
    height: 50%;
    margin: 12% auto;
    display: flex;
    
    > img {
        margin: 0 auto;
        height: 100%;
        object-fit: cover;
        align-items: center;
    }
`;

export const InforText = styled.div`
    font-weight: bold;
    font-size: 20px;
    width: 80%;
    margin-bottom: 5%;
`;

export const Button = styled.div`
    background: #C9CBCB;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    padding: 4% 10%;
    margin-bottom: 16%;
    text-transform: uppercase;
`;

export const Content = styled.div`
    background: #F5F5F5;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: none;
`;

export const HeaderContent = styled.div`
    /* background: gray; */
    /* border: 2px solid #000; */
    width: 90%;
    height: 7%;
    margin: 4% auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const SearchWrap = styled.div`
    background: #F3F1F1;
    border-radius: 4px;
    border: 1px solid #000000;
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const InputSearch = styled.input`
    width: 85%;
    height: 100%;
    padding: 0 0 0 4%;
    background: #F3F1F1;
    border: none;
    font-size: 20px;
    border-radius: 4px 0px 0px 4px;
`;

export const ButtonWrap = styled.button`
    width: 12%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    background: white;
    border-radius: 0px 4px 4px 0px;

    > img {
        width: 70%;
    }
`;

export const Blank = styled.div`
    width: ${props => props.width}%;
    height: ${props => props.height}%;
`;

export const FilterWrap = styled.div`
    width: 30%;
    height: 100%;
    background: #D9D9D9;
    border: 1px solid #000000;
    border-radius: 4px;
    display: flex;
    justify-content: flex-start;
`;
export const FilterSelectWrap = styled.select`
    width: 100%;
    height: 100%;
    border-radius: 4px 4px 4px 4px;
    padding: 0 10%;
    font-size: 24px;
    border: none;
`;

export const MainContent = styled.div`
    width: 90%;
    height: 70%;
    margin: 0px auto 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border: none;
    border-radius: 4px;
    background: #D9D9D9;
    padding-top: 2%;
;
`;

export const ColumnListQuiz = styled.div`
    width: 36%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const FooterContent = styled.div`
    width: 100%;
    height: 4%;
    margin-top: 1%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

