import { 
    ExamWrap,
    Content,
    SideBar, 
    HeaderContent,
    ContentWrap,
    Title,
    TimeExist,
    TimeLine,
    Question,
    AnswerForm,
    AnswerLabel,
    Prev,
    Next,
    ButtonSubmit,
} from "./examStyle";

import IndexQuiz from "./IndexQuiz";

const Exam = () => {
    return (  
        <ExamWrap>
            <Content>
                <HeaderContent>
                    <Title>Kiểm tra an toàn bảo mật thông tin lần 2</Title>
                    <TimeExist>Còn lại: 14 phút 22 giây</TimeExist>
                    <TimeLine></TimeLine>
                </HeaderContent>

                <ContentWrap>
                    <Question>Câu 3. Nhân viên chính thức của công ty Amela được nghỉ phép (có hưởng lương) bao nhiêu ngày một năm?</Question>

                    <AnswerForm>
                        <AnswerLabel>
                            <input type="checkbox" className="answer" />
                            <span>A. 12 ngày nếu làm đủ cả năm</span>
                        </AnswerLabel>
                    </AnswerForm>

                    <AnswerForm>
                        <AnswerLabel>
                            <input type="checkbox" className="answer" />
                            <span>B. 16 ngày nếu làm đủ cả năm</span>
                        </AnswerLabel>
                    </AnswerForm>

                    <AnswerForm>
                        <AnswerLabel>
                            <input type="checkbox" className="answer" />
                            <span>C. Không có nghỉ phép vẫn hưởng lương</span>
                        </AnswerLabel>
                    </AnswerForm>

                    <AnswerForm>
                        <AnswerLabel>
                            <input type="checkbox" className="answer" />
                            <span>D. 8 ngày nếu làm đủ cả năm</span>
                        </AnswerLabel>
                    </AnswerForm>
                    <Prev>Câu trước</Prev>

                    <Next>Câu sau</Next>
                </ContentWrap>

            </Content>

            <SideBar>
                <IndexQuiz />

                <ButtonSubmit>Nộp bài</ButtonSubmit>
            </SideBar>
        </ExamWrap>
    );
}
 
export default Exam;