import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    min-height: ${props => props.isMobile ? '100vh' : '0px'};
    height: ${props => props.isMobile ? 'auto' : '100vh'};
    font-size: 24px;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const DashboardContainer = styled.div`
    display: flex;
    align-items: center;
    height: ${props => props.isMobile ? 'calc(100% - 65px)' : '100%'}; 
`;

export const MenuBarWrap = styled.div` 
    display: ${props => props.isMobile ? 'none' : 'flex'};
    width: 300px;
    height: 100%;
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
        /* transform: ${(props) => props.show ? "translateX(0)" : "translateX(-100%)" }; */
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
    height: 6%;
    margin-bottom: 12%;
    font-weight: 400;
    font-size: 20px;
    text-transform: uppercase;
    padding: 0 40px;
    cursor: pointer;
`;

export const Content = styled.div`
    background:  #C4C4C4;;
    flex-shrink: 1;
    width: ${props => props.isMobile ? "100%" : 'calc(100% - 300px)'};
    height: ${props => props.isMobile ? 'fit-content' : '100%'};
    display: flex;
    align-items: center;
    flex-direction: column;    
`;

export const TopContent = styled.div`
    width: ${props => props.isMobile ? '94%' : '90%'};
    height: ${props => props.isMobile ? '72px' : '8%'};
    display: flex;
    align-items: center;
    margin-top: 2%;
    justify-content: space-between;    
`;

export const SearchWrap = styled.div`
    width: ${props => props.isMobile ? '100%' : '74%'};
    height: calc(100% - 2px);
    background: #F3F1F1;
    border: 1px solid #000000;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
`;

export const SearchInput = styled.input`
    padding-left: 5%;
    padding-right: ${props => props.isMobile ? 24 : 16}%;
    border: none;
    width: calc(70% - 50px);
    border-radius: 4px;
    outline: none;
    background: #F3F1F1;
    font-weight: 400;
    font-size: 20px;
    flex-shrink: 1;
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
    display: ${props => props.isMobile ? 'none' : 'block'};
`;

export const FilterSelect = styled.select`
    width: 95%;
    height: 100%;
    outline: none;
    border-style: none;
    border-radius: 4px;
    font-weight: 400;
    font-size: 20px;
    margin-left: 5%;

`;

export const MainContent = styled.div`
    width: ${props => props.isMobile ? 90 : 80}%;
    height: ${props => props.isMobile ? 'fit-content' : '70%'};
    background: #D9D9D9;
    border-radius: 4px;
    margin-top: 2%;
    padding: ${props => props.isMobile ? '2%' : '2% 5%'};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    justify-content: ${props => props.isMobile ? 'center' : 'space-between'};
`;

export const FooterContent = styled.div`
    min-width: 272px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${props => props.isMobile ? 4 : 1}%;
    margin-bottom: ${props => props.isMobile ? 5 : 0}%;
`;
