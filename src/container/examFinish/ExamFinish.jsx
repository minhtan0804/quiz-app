import {
    Wrapper,
    Content,
    HeaderContent,
    MainContent,
    FooterContent,
    InforQuiz,
    ResultDetails,
    ResultQuiz,
} from "./exmaFinishStyle";

const ExamFinish = () => {
    return ( 
        <Wrapper>
            <Content>      
                <HeaderContent>
                    Kiểm tra an toàn bảo mật thông tin lần 2
                </HeaderContent>
                <MainContent>
                    <InforQuiz>
                        <span>Số câu trả lời đúng:</span>
                        <span>Số câu trả lời sai:</span>
                        <span>Số câu chưa trả lời:</span>
                        <span>Tổng số câu hỏi:</span>
                    </InforQuiz>

                    <ResultDetails>
                        <span>12</span>
                        <span>3</span>
                        <span>1</span>
                        <span>16</span>
                    </ResultDetails>

                    <ResultQuiz>Điểm số: 120/160</ResultQuiz>
                    
                </MainContent>
                <FooterContent>Dashboard</FooterContent>
            </Content>
        </Wrapper>
    );
}
 
export default ExamFinish;