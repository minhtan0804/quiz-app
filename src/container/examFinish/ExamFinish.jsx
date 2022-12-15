import { isMobile } from "react-device-detect";
import { ChildDetails, Content, DashboardButton, Detail, DetailContest, HeaderContent, MainContent, Result, ResultContest, ResultDetail, TopContent, Wrapper } from "./examFinishStyle";

const ExamFinish = () => {
    return (  
        <Wrapper>
            <Content isMobile={isMobile} >
                <TopContent>

                    <HeaderContent isMobile={isMobile} >
                        Kiểm tra an toàn bảo mật thông tin lần 2
                    </HeaderContent>

                    <MainContent isMobile={isMobile} >
                        <DetailContest isMobile={isMobile} >
                            <ChildDetails>
                                <Detail>Số câu trả lời đúng:</Detail>
                                <ResultDetail>12</ResultDetail>
                            </ChildDetails>
                            <ChildDetails>
                                <Detail>Số câu trả lời sai:</Detail>
                                <ResultDetail>3</ResultDetail>
                            </ChildDetails>
                            <ChildDetails>
                                <Detail>Số câu chưa trả lời:</Detail>
                                <ResultDetail>1</ResultDetail>
                            </ChildDetails>
                            <ChildDetails>
                                <Detail>Tổng số câu hỏi:</Detail>
                                <ResultDetail>16</ResultDetail>
                            </ChildDetails>

                        </DetailContest>

                        <ResultContest isMobile={isMobile} >
                            <Result>Điểm số: 120 / 160</Result>
                        </ResultContest>
                    </MainContent>
                </TopContent>

                <DashboardButton isMobile={isMobile} >
                    Dashboard
                </DashboardButton>
            </Content>
        </Wrapper>
    );
}
 
export default ExamFinish;