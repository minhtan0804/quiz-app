import Images from "../../assets/images";
import { NextPage, Page, PrevPage, Wrapper } from "./itemPageStyle";

const ItemPage = () => {
    return (
        <Wrapper>
            <PrevPage>
                <img src={Images.dashboard.prevIcon} alt=""/>
            </PrevPage>

            <Page border="#4200FF" color="#4200FF">1</Page>
            <Page>2</Page>
            <Page>...</Page>
            <Page>9</Page>
            <Page>10</Page>

            <NextPage>
                <img src={Images.dashboard.nextIcon} alt=""/>
            </NextPage>
        </Wrapper>
    );
}
 
export default ItemPage;