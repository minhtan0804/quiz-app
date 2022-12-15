import { isMobile } from "react-device-detect";
import NavBar from "../../components/NavBar/NavBar";
import { Answer, AnswerCheckbox, AnswerForm, AnswerLabel, Content, ExamContainer, FooterMain, HeaderContent, HeaderCountdown, HeaderTimeCountdown, HeaderTimeline, HeaderTitle, MainContent, PrevButton, Question, QuestionAndAnswer, RadomIndexButton, SideMenu, SubmitButton, TopFooter, Wrapper } from "./examStyle";
import IndexQuiz from "./IndexQuiz";

const Exam = (props) => {
    return ( 
        <Wrapper isMobile={isMobile} >
            <NavBar
                title="Làm bài thi"
                // onClick={openMenu}
            >
                
            </NavBar>

            <ExamContainer>
                <Content isMobile={isMobile} >
                    <HeaderContent isMobile={isMobile} >
                        <HeaderTitle isMobile={isMobile} >
                            {/* {props.title} */}
                            Kiểm tra an toàn bảo mật thông tin lần 2
                        </HeaderTitle>

                        <HeaderCountdown isMobile={isMobile} >
                            Còn lại: 14 phút 22 giây
                        </HeaderCountdown>

                        <HeaderTimeline isMobile={isMobile} >
                            <HeaderTimeCountdown />
                        </HeaderTimeline>

                    </HeaderContent>

                    <MainContent isMobile={isMobile} >
                        <QuestionAndAnswer>
                            <Question>
                            Câu 3. Nhân viên chính thức của công ty Amela được nghỉ phép (có hưởng lương) bao nhiêu ngày một năm?
                            </Question>

                            <AnswerForm isMobile={isMobile} >
                                <AnswerLabel isMobile={isMobile} >
                                    <AnswerCheckbox type={"checkbox"} />
                                    <Answer>
                                        A. 12 ngày nếu làm đủ cả năm
                                    </Answer>
                                </AnswerLabel>

                                <AnswerLabel isMobile={isMobile} >
                                    <AnswerCheckbox type={"checkbox"} />
                                    <Answer>
                                        A. 12 ngày nếu làm đủ cả năm
                                    </Answer>
                                </AnswerLabel>

                                <AnswerLabel>
                                    <AnswerCheckbox type={"checkbox"} />
                                    <Answer>
                                        A. 12 ngày nếu làm đủ cả năm
                                    </Answer>
                                </AnswerLabel>
                                
                                <AnswerLabel>
                                    <AnswerCheckbox type={"checkbox"} />
                                    <Answer>
                                        A. 12 ngày nếu làm đủ cả năm
                                    </Answer>
                                </AnswerLabel>

                            </AnswerForm>
                        </QuestionAndAnswer>

                        <FooterMain isMobile={isMobile} >
                            <TopFooter isMobile={isMobile} >
                                <PrevButton  isMobile={isMobile}>
                                    Câu trước
                                </PrevButton>

                                <PrevButton  isMobile={isMobile}>
                                    Câu sau
                                </PrevButton>
                            </TopFooter>

                            <RadomIndexButton isMobile={isMobile} >
                                Chuyển tiếp
                            </RadomIndexButton>
                        </FooterMain>
                    </MainContent>
                </Content>

                <SideMenu isMobile={isMobile}>
                    <IndexQuiz />

                    <SubmitButton isMobile={isMobile} >Nộp bài</SubmitButton>
                </SideMenu>
            </ExamContainer>
        </Wrapper>
    );
}
 
export default Exam;