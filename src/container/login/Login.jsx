import { useState } from "react";
import Images from '../../assets/images'
import { isMobile } from "react-device-detect";
import { CameraWrap, Checkbox, FormLogin, IconInputContainer, Input, InputContainer, LoginButton, Remember, RememberCheckbox, Wrapper } from "./loginStyle";

const Login = () => {
    const [user, setUser] = useState({
        userName: '',
        password: '',
        isRemember: false,
    });

    const userNameOnChange = (event) => {
        setUser({...user, userName: event.target.value})
    }

    const passwordOnChange = (event) => {
        setUser({...user, password: event.target.value})
    }

    const handleOnClickRemember = (event) => {
        setUser({...user, isRemember: !user.isRemember})
        console.log(user);
    }

    const handleOnSubmit = (event) => {
        
    }

    console.log(user);
    console.log(isMobile);
    return ( 
        <Wrapper>
            <FormLogin>
                <CameraWrap>
                    <img src={Images.login.camera} alt="" />
                </CameraWrap>

                <InputContainer isMobile={isMobile}>
                    <IconInputContainer>
                        <img src={Images.login.userLogin} isMobile={isMobile} alt="" />
                    </IconInputContainer>
                    
                    <Input 
                        type={"text"}
                        placeholder="Username"
                        value={user.userName}
                        onChange={userNameOnChange}
                        />
                </InputContainer>

                <InputContainer isMobile={isMobile}>
                    <IconInputContainer>
                        <img src={Images.login.passwordLock} isMobile={isMobile} alt="" />
                    </IconInputContainer>
                    
                    <Input 
                        type={"text"} 
                        placeholder="Password" 
                        value={user.password}
                        onChange={passwordOnChange}
                    />
                </InputContainer>

                <RememberCheckbox>
                    <Checkbox 
                        type={"checkbox"}
                        onClick={handleOnClickRemember}
                    />
                    <Remember>Remember</Remember>
                </RememberCheckbox>

                <LoginButton
                    onSubmit={handleOnSubmit}
                    isMobile={isMobile}
                >
                Login
                </LoginButton>
            </FormLogin>
        </Wrapper>
    );
}
 
export default Login;