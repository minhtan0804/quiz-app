import { isMobile } from 'react-device-detect';
import Images from '../../assets/images'
import { NavBarIcon, NavBarIconWrapper, NavBarTitle, Wrapper } from "./navBarStyle";

const NavBar = (props) => {
    return (
        <Wrapper isMobile={isMobile} >
            <NavBarIconWrapper>
                <NavBarIcon src={Images.navbar.menuIcon} />
            </NavBarIconWrapper>

            <NavBarTitle>{props.title}</NavBarTitle>
        </Wrapper>
    );
}
 
export default NavBar;