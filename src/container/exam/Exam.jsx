import NavBar from "../../components/NavBar/NavBar";
import { Answer, AnswerCheckbox, AnswerForm, AnswerLabel, Content, ExamContainer, FooterMain, HeaderContent, HeaderCountdown, HeaderTimeCountdown, HeaderTimeline, HeaderTitle, MainContent, PrevButton, Question, QuestionAndAnswer, RadomIndexButton, SideMenu, SubmitButton, TopFooter, Wrapper } from "./examStyle";
import IndexQuiz from "./IndexQuiz";

const Exam = (props) => {
    return ( 
        <Wrapper>
            <NavBar
                title="Làm bài thi"
                // onClick={openMenu}
            >
                
            </NavBar>

            <ExamContainer>
                <Content>
                    <HeaderContent>
                        <HeaderTitle>
                            {/* {props.title} */}
                            Kiểm tra an toàn bảo mật thông tin lần 2
                        </HeaderTitle>

                        <HeaderCountdown>
                            Còn lại: 14 phút 22 giây
                        </HeaderCountdown>

                        <HeaderTimeline>
                            <HeaderTimeCountdown />
                        </HeaderTimeline>

                    </HeaderContent>

                    <MainContent>
                        <QuestionAndAnswer>
                            <Question>
                            Câu 3. Nhân viên chính thức của công ty Amela được nghỉ phép (có hưởng lương) bao nhiêu ngày một năm?
                            </Question>

                            <AnswerForm>
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

                        <FooterMain>
                            <TopFooter>
                                <PrevButton>
                                    Câu trước
                                </PrevButton>

                                <PrevButton>
                                    Câu sau
                                </PrevButton>
                            </TopFooter>

                            <RadomIndexButton>
                                Chuyển tiếp
                            </RadomIndexButton>
                        </FooterMain>
                    </MainContent>
                </Content>

                <SideMenu>
                    <IndexQuiz />

                    <SubmitButton>Nộp bài</SubmitButton>
                </SideMenu>
            </ExamContainer>
        </Wrapper>
    );
}
 
export default Exam;