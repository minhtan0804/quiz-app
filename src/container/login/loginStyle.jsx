import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url(images/background1.png) no-repeat center;
    background-size: cover;
`;

export const PropupLoginWrapper = styled.div`
    position: relative;
    width: 20em;
    border-radius: 0.2em;
    margin-left: 32em;
    height: 28em;
    background: #999595;
    border: 2px solid #FBBC1A;
    align-self: flex-end;
    margin-right: 8%;
`;

export const CameraWrap = styled.div`
    position: absolute;
    top: -12%;
    left: 50%;
    transform: translateX(-50%);
    background: #999595;
    border-radius: 50%;
    width: 30%;
    height: 20%;
    border: 2px solid #FBBC1A;
`;

export const CameraImg = styled.img`
    position: absolute;
    width: 86%;
    left: 7%;
`;

export const InputContainer = styled.div`
    width: 80%;
    position: relative;
    top: 20%;
    margin-left: 10%;
    height: 10%;
    border: 3px solid #fff;
    border-radius: 4px;
`;

export const UserIconImg = styled.img`
    position: absolute;
    height: 100%;
    background-color: #fff;
    width: ${props => props.width}px;
`;

export const Input = styled.input`
    position: absolute;
    left: 50%;
    transform: translateX(-38%);
    height: 100%;
    width: 80%;
    border: none;
    background-color: #F3F1F1;
    padding-left: 2%;
    font-size: 24px;
`;

export const Blank = styled.div`
    width: ${props => props.width}em;
    height: ${props => props.height}em;
`;

export const CheckBoxWrap = styled.label`
    cursor: pointer;
    position: relative;
    top: 24%;
    left: 12%;
    font-size: 20px;
    
    .checkbox-icon {
        margin-right: 4%;
        transform: scale(2);
        user-select: none;
        cursor: pointer;
    }
`;

export const ButtonLogin = styled.button`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 250%);
    width: 40%;
    height: 12%;
    font-size: 32px;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    border-radius: 4px;
`;



