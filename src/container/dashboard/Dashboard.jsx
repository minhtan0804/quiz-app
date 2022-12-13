import { useState } from "react";
import ItemPage from "../../components/ItemPage/ItemPage";
import ItemQuiz from "../../components/ItemQuiz/ItemQuiz";
import NavBar from "../../components/NavBar/NavBar";
import { AvatarImage, AvatarWrap, Content, DashboardContainer, FilterSelect, FilterWrap, FooterContent, IconSearch, IconSearchWrapper, LogoutButton, MainContent, MenuBar, SearchInput, SearchWrap, TopContent, UserInfo, Wrapper } from "./dashboardStyle";

const Dashboard = (props) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const openMenu = () => {
        setIsOpenMenu(prev => !prev)
    }


    return ( 

        <Wrapper>
            <NavBar
                title="Dashboard"
                onClick={openMenu}
            >
                
            </NavBar>

            <DashboardContainer>
                <MenuBar
                    show={isOpenMenu}
                >
                    <AvatarWrap>
                        <AvatarImage src="images/avatarUser.svg" />
                        
                        <UserInfo>User: MinhTân</UserInfo>
                        
                        <UserInfo>Point: 2488</UserInfo>
                    </AvatarWrap>

                    <LogoutButton>Logout</LogoutButton>
                </MenuBar>

                <Content>
                    <TopContent>
                        <SearchWrap>
                            <SearchInput placeholder="Search" />

                            <IconSearchWrapper>
                                <IconSearch src="images/search.svg"/>
                            </IconSearchWrapper>
                        </SearchWrap>

                        <FilterWrap>
                            <FilterSelect>
                                <option value="1">All</option>
                                <option value="2">Difficult</option>
                                <option value="3">Medium</option>
                                <option value="4">Easy</option>
                            </FilterSelect>
                        </FilterWrap>
                    </TopContent>

                    <MainContent>
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

                    <FooterContent>
                        <ItemPage />
                    </FooterContent>
                </Content>
            </DashboardContainer>
        </Wrapper>
    );
}
 
export default Dashboard;