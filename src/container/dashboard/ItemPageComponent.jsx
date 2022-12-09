import { ItemPageWrap,
    ItemPrevPage,
    ItemPage,
    ItemNextPage,
} from "./itemPageComponentStyle";

const ItemPageComponent = () => {
    return ( 
        <ItemPageWrap>
            <ItemPrevPage>
               <img src="images/prev.svg" alt="" />
            </ItemPrevPage>

            <ItemPage border="#4200FF">1</ItemPage>
            <ItemPage>2</ItemPage>
            <ItemPage>...</ItemPage>
            <ItemPage>3</ItemPage>
            <ItemPage>4</ItemPage>

            <ItemNextPage>
                <img src="images/next.svg" alt="" />
            </ItemNextPage>
        </ItemPageWrap>
        )
}
 
export default ItemPageComponent;