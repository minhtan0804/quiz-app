import { isMobile } from "react-device-detect";
import { IndexItem, Wrapper } from "./indexQuizStyle";

const IndexQuiz = (props) => {
    return (
        <Wrapper isMobile={isMobile} >
            <IndexItem background="#B6B6B6" >1</IndexItem>
            <IndexItem background="#B6B6B6" >2</IndexItem>
            <IndexItem background="#92FD9D" border={2} >3</IndexItem>
            <IndexItem background="#B6B6B6" >4</IndexItem>
            <IndexItem background="#B6B6B6" >5</IndexItem>
            <IndexItem>6</IndexItem>
            <IndexItem background="#B6B6B6" >7</IndexItem>
            <IndexItem>8</IndexItem>
            <IndexItem>9</IndexItem>
            <IndexItem>10</IndexItem>
            <IndexItem>11</IndexItem>
            <IndexItem>12</IndexItem>
            <IndexItem>13</IndexItem>
            <IndexItem>14</IndexItem>
            <IndexItem>15</IndexItem>
            <IndexItem>16</IndexItem>
            <IndexItem>17</IndexItem>
        </Wrapper>
    );
}
 
export default IndexQuiz;