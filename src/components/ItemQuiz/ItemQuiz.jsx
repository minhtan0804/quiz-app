import { IconInfoQuiz, InfoItem, InfoQuiz, InfoQuizWrap, LevelQuiz, Star, Title, Wrapper } from "./itemQuizStyle";

const ItemQuiz = (props) => {
    return (  
        <Wrapper>
            <Title>{props.title}</Title>

            <InfoQuizWrap>
                <InfoQuiz>
                    <IconInfoQuiz src="images/clockQuiz.svg" />
                    <InfoItem>{props.time} phút</InfoItem>
                </InfoQuiz>

                <InfoQuiz>
                    <IconInfoQuiz src="images/pointQuiz.svg" />
                    <InfoItem>{`${props.point}/${props.maxPoint}`}</InfoItem>
                </InfoQuiz>
            </InfoQuizWrap>

            <LevelQuiz>
                <Star src="images/starFill.svg" />
                <Star src="images/starFill.svg" />
                <Star src="images/starFill.svg" />
                <Star src="images/starFill.svg" />
                <Star src="images/starNoFill.svg" />
            </LevelQuiz>
        </Wrapper>
    );
}
 
export default ItemQuiz;