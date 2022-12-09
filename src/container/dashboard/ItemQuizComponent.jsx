import React from "react";
import { ItemQuiz,
    Title, 
    Infor,
    IconImg, 
    InforItem, 
    InforTextQuiz,
    Ratings 
} from "./itemQuizComponentStyle";

const ItemQuizComponent = () => {
    return (
        <ItemQuiz>
            <Title>Kiểm tra an toàn bảo mật thông tin 2</Title>

            <Infor>
                <InforItem>
                    <IconImg src="images/clockQuiz.png" />
                    <InforTextQuiz>7 phút</InforTextQuiz>
                </InforItem>

                <InforItem>
                    <IconImg src="images/pointQuiz.png" />
                    <InforTextQuiz>200/250 điểm</InforTextQuiz>
                </InforItem>
            </Infor>

            <Ratings>
                <img src="images/StarFill.png" alt="" />
                <img src="images/StarFill.png" alt="" />
                <img src="images/StarFill.png" alt="" />
                <img src="images/StarFill.png" alt="" />
                <img src="images/StarNoFill.png" alt="" />
            </Ratings>
        </ItemQuiz>
    )
}

export default ItemQuizComponent;