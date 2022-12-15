import { useState } from "react";
import { isMobile } from "react-device-detect";
import Images from "../../assets/images.js"
import ItemPage from "../../components/ItemPage/ItemPage";
import ItemQuiz from "../../components/ItemQuiz/ItemQuiz";
import NavBar from "../../components/NavBar/NavBar";
import { AvatarImage, AvatarWrap, Content, DashboardContainer, FilterSelect, FilterWrap, FooterContent, IconSearch, IconSearchWrapper, LogoutButton, MainContent, MenuBar, MenuBarWrap, SearchInput, SearchWrap, TopContent, UserInfo, Wrapper } from "./dashboardStyle";

const Dashboard = (props) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const openMenu = () => {
        setIsOpenMenu(prev => !prev)
    }

    console.log(isMobile);

    return ( 

        <Wrapper isMobile={isMobile}>
            <NavBar
                title="Dashboard"
                onClick={openMenu}
            >
                
            </NavBar>

            <DashboardContainer>
                {/* <MenuBarWrap isMobile={isMobile} > */}

                    <MenuBar
                        show={isOpenMenu}
                        isMobile={isMobile}
                    >
                        <AvatarWrap>
                            <AvatarImage src={Images.dashboard.avatarUser} />
                            
                            <UserInfo>User: MinhTân</UserInfo>
                            
                            <UserInfo>Point: 2488</UserInfo>
                        </AvatarWrap>

                        <LogoutButton>Logout</LogoutButton>
                    </MenuBar>
                {/* </MenuBarWrap> */}

                <Content isMobile={isMobile} >
                    <TopContent isMobile={isMobile} >
                        <SearchWrap isMobile={isMobile} >
                            <SearchInput placeholder="Search" isMobile={isMobile} />

                            <IconSearchWrapper>
                                <IconSearch src={Images.dashboard.searchIcon} />
                            </IconSearchWrapper>
                        </SearchWrap>

                        <FilterWrap isMobile={isMobile} >
                            <FilterSelect>
                                <option value="1">All</option>
                                <option value="2">Difficult</option>
                                <option value="3">Medium</option>
                                <option value="4">Easy</option>
                            </FilterSelect>
                        </FilterWrap>
                    </TopContent>

                    <MainContent isMobile={isMobile} >
                        <ItemQuiz 
                            title="Kiểm tra an toàn bảo mật thông tin 2"
                            time={7}
                            point={200}
                            maxPoint={250}
                        />
                        <ItemQuiz 
                            title="Kiểm tra an toàn bảo mật thông tin 2"
                            time={7}
                            point={200}
                            maxPoint={250}
                        />
                        <ItemQuiz 
                            title="Kiểm tra an toàn bảo mật thông tin 2"
                            time={7}
                            point={200}
                            maxPoint={250}
                        />
                        <ItemQuiz 
                            title="Kiểm tra an toàn bảo mật thông tin 2"
                            time={7}
                            point={200}
                            maxPoint={250}
                        />
                        <ItemQuiz 
                            title="Kiểm tra an toàn bảo mật thông tin 2"
                            time={7}
                            point={200}
                            maxPoint={250}
                        />
                        <ItemQuiz 
                            title="Kiểm tra an toàn bảo mật thông tin 2"
                            time={7}
                            point={200}
                            maxPoint={250}
                        />
                    </MainContent>

                    <FooterContent isMobile={isMobile} >
                        <ItemPage />
                    </FooterContent>
                </Content>
            </DashboardContainer>
        </Wrapper>
    );
}
 
export default Dashboard;