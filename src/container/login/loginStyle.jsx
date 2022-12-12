import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    font-size: 24px;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    background: url(images/background1.png) no-repeat center center;
    background-size: cover;
`;

export const FormLogin = styled.div`
    width: 25%;
    height: 70%;
    background: #999595;
    border: 3px solid #FBBC1A;
    border-radius: 6px;
    margin: 6% 10% 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 1023.98px) {
        width: 60%;
        margin-right: 0;
        align-self: center;
        height: 50%;
        margin-top: 16%;
    }

    @media screen and (max-width: 767.98px) {
        width: 80%;
        height: 60%;
    }
    
    
`;

export const CameraWrap = styled.div`
    width: 180px;
    height: 180px;
    transform: translateY(-50%);
    background: #999595;
    border: 3px solid #FBBC1A;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 767.98px) {
        width: 100px;
        height: 100px;
        > img {
            width: 80%;
        }
    }
    
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 75%;
    height: 100px;
    background: white;
    margin-top: -10%;
    margin-bottom: 20%;
    background: #fff;
    border-radius: 4px;

    @media screen and (max-width: 1023.98px) {
        height: 80px;
    }
    
    @media screen and (max-width: 767.98px) {
        height: 56px;
    }
    
`;

export const IconInputContainer = styled.div`
    width: 25%;
    /* height: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 4px;
    border: none;

    > img {
        width: 80%;
        height: 80%;
        object-fit: cover;

        @media screen and (max-width: 1023.98px) {
            width: 50%;
        }     
    }
`;

export const Input = styled.input`
    width: 75%;
    height: 100%;
    padding: 0;
    border: none;
    border-radius: 4px;
    background: #F3F1F1 ;
    padding-left: 10px;
    font-size: 20px;
    outline: none;
`;

export const RememberCheckbox = styled.div`
    width: 70%;
    height: 30px;
    margin-top: -18%;
    /* background: black; */
    display: flex;
`; 

export const Checkbox = styled.input`
    width: 8%;
    object-fit: cover;
    margin: 0px;
    flex-shrink: 0;
    border-radius: 50%;
`;

export const Remember = styled.div`
    flex-shrink: 1;
    align-self: center;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    display: flex;
    align-items: center;
    margin-left: 12px;
`;

export const LoginButton = styled.button`
    width: 75%;
    height: 10%;
    margin-top: 10%;
    background: #D9D9D9;
    border-radius: 4px;
    font-weight: 400;
    font-size: 20px;
    border: none;
    text-transform: uppercase;
`;



