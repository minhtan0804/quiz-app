import { isMobile } from "react-device-detect";
import Images from "../../assets/images";
import { IconInfoQuiz, InfoItem, InfoQuiz, InfoQuizWrap, LevelQuiz, Star, Title, Wrapper } from "./itemQuizStyle";

const ItemQuiz = (props) => {
    return (  
        <Wrapper isMobile={isMobile} >
            <Title>{props.title}</Title>

            <InfoQuizWrap>
                <InfoQuiz>
                    <IconInfoQuiz src={Images.dashboard.clockIcon} />
                    <InfoItem>{`${props.time} phút`}</InfoItem>
                </InfoQuiz>

                <InfoQuiz>
                    <IconInfoQuiz src={Images.dashboard.bonusIcon} />
                    <InfoItem>{`${props.point}/${props.maxPoint}`}</InfoItem>
                </InfoQuiz>
            </InfoQuizWrap>

            <LevelQuiz isMobile={isMobile} >
                <Star src={Images.dashboard.starFill} />
                <Star src={Images.dashboard.starFill} />
                <Star src={Images.dashboard.starFill} />
                <Star src={Images.dashboard.starFill} />
                <Star src={Images.dashboard.starNoFill} />
            </LevelQuiz>
        </Wrapper>
    );
}
 
export default ItemQuiz;