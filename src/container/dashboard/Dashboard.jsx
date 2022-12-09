import { Wrapper,
    SideMenu,
    Content,
    TopSideMenu,
    AvatarWrap,
    InforText,
    Button,
    HeaderContent,
    MainContent,
    SearchWrap, 
    InputSearch, 
    ButtonWrap,
    Blank,
    FilterWrap,
    FilterSelectWrap,
    ColumnListQuiz,
    FooterContent,
 } from "./dashboardStyle";

import ItemQuizComponent from "./ItemQuizComponent";
import ItemPageComponent from "./ItemPageComponent";

const Dasnhbord = () => {
    return ( 
        <Wrapper>
            <SideMenu>
                <TopSideMenu>
                    <AvatarWrap>
                        <img src="images/avatarUser.png" alt="" />
                    </AvatarWrap>

                    <InforText>User: minhtan </InforText>
                    <InforText>Point: 240/250 </InforText>
                </TopSideMenu>

                <Button>Log out</Button>
            </SideMenu>

            <Content>
                <HeaderContent>
                    <SearchWrap>
                        <InputSearch placeholder="Search"/>

                        <ButtonWrap>
                            <img src="images/ButtonSearch.png" />
                        </ButtonWrap>
                    </SearchWrap>

                    <Blank width={5} height={100} />

                    <FilterWrap>
                        <FilterSelectWrap>
                            <option value="1">Difficult</option>
                            <option value="2">Medium</option>
                            <option value="3">Easy</option>
                        </FilterSelectWrap>
                    </FilterWrap>

                </HeaderContent>

                <MainContent>
                    <Blank width={10} height={100}  />

                    <ColumnListQuiz>
                        <ItemQuizComponent></ItemQuizComponent>
                        <ItemQuizComponent></ItemQuizComponent>
                        <ItemQuizComponent></ItemQuizComponent>
                    </ColumnListQuiz>

                    <Blank width={8} height={100}  />

                    <ColumnListQuiz>
                        <ItemQuizComponent></ItemQuizComponent>
                        <ItemQuizComponent></ItemQuizComponent>
                        <ItemQuizComponent></ItemQuizComponent>
                    </ColumnListQuiz>

                    <Blank width={10} height={100}  />
                </MainContent>

                <FooterContent>
                    <ItemPageComponent></ItemPageComponent>
                </FooterContent>
            </Content>
        </Wrapper>
    );
}
 
export default Dasnhbord;