import { useState } from "react";
import { CameraWrap, Checkbox, FormLogin, IconCamera, IconInputContainer, Input, InputContainer, LoginButton, Remember, RememberCheckbox, Wrapper } from "./loginStyle";

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
    return ( 
        <Wrapper>
            <FormLogin>
                <CameraWrap>
                    <img src="images/camera.svg" />
                </CameraWrap>

                <InputContainer>
                    <IconInputContainer>
                        <img src="images/user login.svg"/>
                    </IconInputContainer>
                    
                    <Input 
                        type={"text"}
                        placeholder="Username"
                        value={user.userName}
                        onChange={userNameOnChange}
                        />
                </InputContainer>

                <InputContainer >
                    <IconInputContainer>
                        <img src="images/password.svg"/>
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
                >
                Login
                </LoginButton>
            </FormLogin>
        </Wrapper>
    );
}
 
export default Login;