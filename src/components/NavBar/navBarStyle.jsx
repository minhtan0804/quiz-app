import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 65px;
    background: #545151;
    z-index: 100;
    position: sticky;
    top: 0;
    align-items: center;
    text-align: center;
    display: none;

    @media screen and (max-width: 1023.98px) {
        display: flex;
    }
`;

export const NavBarIconWrapper = styled.div`
    height: 65px;
    background: #D9D9D9;
    border-radius: 4px;
    width: 45px;
    height: 45px;
    margin-left: 20px;
`;

export const NavBarIcon = styled.img`
    height: 100%;
`;

export const NavBarTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
`;