import Images from '../../assets/images'
import { NavBarIcon, NavBarIconWrapper, NavBarTitle, Wrapper } from "./navBarStyle";

const NavBar = (props) => {
    return (
        <Wrapper>
            <NavBarIconWrapper>
                <NavBarIcon src={Images.navbar.menuIcon} />
            </NavBarIconWrapper>

            <NavBarTitle>{props.title}</NavBarTitle>
        </Wrapper>
    );
}
 
export default NavBar;