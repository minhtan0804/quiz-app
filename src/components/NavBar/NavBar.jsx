import { NavBarIcon, NavBarIconWrapper, NavBarTitle, Wrapper } from "./navBarStyle";

const NavBar = (props) => {
    return (
        <Wrapper>
            <NavBarIconWrapper>
                <NavBarIcon src="images/navBarMenu.svg" />
            </NavBarIconWrapper>

            <NavBarTitle>{props.title}</NavBarTitle>
        </Wrapper>
    );
}
 
export default NavBar;