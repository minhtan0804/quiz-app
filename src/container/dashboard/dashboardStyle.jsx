import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    font-size: 24px;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1023.98px) {
        min-height: 100vh;
        height: auto;
    }
    
`;

export const DashboardContainer = styled.div`
    display: flex;
    align-items: center;
    height: calc(100% - 65px);
`;

export const MenuBar = styled.div`
    width: 300px;
    background: #D9D9D9;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;

    @media screen and (max-width: 1023.98px) {
        display: none;
        width: 270px;
        z-index: 100;
        position: fixed;
        top: 0;
        left: 0;
        /* transform: ${(props) => props.show ? "translateX(0)" : "translatex(-100%)" }; */
    } 
`;

export const TopMenu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    
`;

export const AvatarWrap = styled.div`
    width: 80%;
    margin-top: 15%;
    /* height: 20%; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;  
`;

export const AvatarImage = styled.img`
    object-fit: cover;
    margin-bottom: 30px;
`;

export const UserInfo = styled.div`
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 10px;
    align-self: flex-start;
`;

export const LogoutButton = styled.button`
    background: #C9CBCB;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    /* width: 20%; */
    height: 6%;
    margin-bottom: 12%;
    font-weight: 400;
    font-size: 20px;
    text-transform: uppercase;
    padding: 0 40px;
`;

export const Content = styled.div`
    background:  #C4C4C4;;
    flex-shrink: 1;
    width: calc(100% - 300px);
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 1023.98px) {
        width: 100%;
        height: fit-content;
    }
    
`;

export const TopContent = styled.div`
    width: 90%;
    height: 8%;
    display: flex;
    align-items: center;
    margin-top: 2%;
    justify-content: space-between;

    @media screen and (max-width: 1023.98px) {
        height: 72px;
        width: 94%;
    }
    
`;

export const SearchWrap = styled.div`
    height: calc(100% - 2px);
    background: #F3F1F1;
    border: 1px solid #000000;
    border-radius: 4px;
    width: 74%;
    display: flex;
    justify-content: space-between;
    

    @media screen and (max-width: 1023.98px) {
        width: 100%;
        height: 60px;
    }
    
`;

export const SearchInput = styled.input`
    padding-left: 5%;
    padding-right: 16%;
    border: none;
    width: calc(70% - 50px);
    border-radius: 4px;
    outline: none;
    background: #F3F1F1;
    font-weight: 400;
    font-size: 20px;
    flex-shrink: 1;

    @media screen and (max-width: 1023.98px) {
        padding-right: 24%;
    }
    
`;

export const IconSearchWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16%;
    background: #FFFFFF;
    border-radius: 0px 4px 4px 0px;
    flex-shrink: 0;
`;

export const IconSearch = styled.img`
    height: 60%;
`;

export const FilterWrap = styled.div`
    height: calc(100% - 2px);
    width: 20%;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 4px;

    @media screen and (max-width: 1023.98px) {
        display: none;
    }
    
`;

export const FilterSelect = styled.select`
    width: 98%;
    height: 100%;
    outline: none;
    border-style: none;
    border-radius: 4px;
    font-weight: 400;
    font-size: 20px;
    margin-left: 2%;
`;

export const MainContent = styled.div`
    width: 80%;
    height: 70%;
    background: #D9D9D9;
    border-radius: 4px;
    margin-top: 2%;
    padding: 2% 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    
    @media screen and (max-width: 1023.98px) {
        height: fit-content;
        padding: 2%;
        width: 90%;
        justify-content: center;
    }
    
`;

export const FooterContent = styled.div`
    min-width: 272px;
    height: 32px;
    /* padding-bottom: 5%; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4%;

    @media screen and (max-width: 1023.98px) {
        margin-bottom: 5%;
    }
    
`;
