import { useEffect, useLayoutEffect, useState, useRef } from 'react'
import { 
  Wrapper,
  PropupLoginWrapper,
  CameraWrap,
  CameraImg,
  InputContainer,
  UserIconImg,
  Input,
  CheckBoxWrap,
  ButtonLogin,
  Blank,
 } from './loginStyle'

const Login = () => {
    const [state, setState] = useState({
        userName: '',
        password: '',
        isRememberMe: false,
      })

  //console.log(count, prevCo.current);
  const userNameOnChange = (event) => {
    setState({...state, userName: event.target.value})
  }

  const passwordOnChange = (event) => {
    setState({...state, password: event.target.value})
  }
  
  const remeberOnClick = (event) => {
    setState({...state, isRememberMe: event.target.value})
  }

  const loginOnClick = () => {
    console.log("user = ", state)
  }

  return (
    <Wrapper>
        <PropupLoginWrapper>
          <CameraWrap>
            <CameraImg src="images/camera.svg" alt="" className='camera-icon' />
          </CameraWrap> 

          <InputContainer>
            <UserIconImg src="images/userLogin.png" alt="" />
            <Input type="text" placeholder='Username' value={state.userName} onChange={userNameOnChange }/>
          </InputContainer>

          <Blank height={3} />

          <InputContainer>
            <UserIconImg src="images/password.png" alt="" className='password-icon' width={74}/>
            <Input type="text" placeholder='Password' value={state.password} onChange={passwordOnChange} />
          </InputContainer>

          <CheckBoxWrap>
            <input type="checkbox" className='checkbox-icon' onClick={remeberOnClick}/>
            <span>Remember me!</span>
          </CheckBoxWrap>

          <Blank height={2} />

          <ButtonLogin onClick={loginOnClick}>Log in</ButtonLogin>
        </PropupLoginWrapper>
    </Wrapper>
  );
}

export default Login;
