import styled from "styled-components";
import img from "../../img/eventback.png";

export const Title = styled.div`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  & p {
    font-size: 12px;
    color: #9b83c3;
    letter-spacing: 5px;
    margin-top: 75px;
    text-align: center;
    margin-bottom: 10px;
  }

  & h2 {
    font-size: 24px;
    letter-spacing: 3px;
    margin-bottom: 24px;
  }

  & hr {
    margin-bottom: 50px;
  width:50px; margin: auto;
    color: #9b83c3;
  }
`;
export const Events = styled.div`
margin-top: 50px;
  width: 1140px;
  display: flex;
  justify-content: space-between;
`;
export const Container = styled.div`
  width: 1920px;
  margin-top: 55px;
  background-image: url(${img});
  height: 708px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Item = styled.div`
  height: 390px;
  width: 360px;
  background-color: white;
`;
export const ItemImg = styled.div`
display: flex;
.date{
  position: absolute;
  margin-left: 20px;
  margin-top: 20px;
}
`;
export const ItemData = styled.div`
font-family: 'Open Sans';
margin-left: 20px;
margin-top: 10px;
`;
export const ItemTitle = styled.div`
font-size: 16px;
font-weight: bold;
cursor: pointer;
&:hover{
  color: #9b83c3;
}
`;
export const ItemDesc = styled.div`
font-size: 16px;
margin-top: 20px;
`;
export const ItemFooter = styled.div`
border-top: 1px solid #ededed;
margin-top: 15px;

`;
export const Footer = styled.div`
display:flex;
 & i {
  font-size: 14px;
  margin-left: 19px;
  padding-right: 15px;
  margin-top: 20px;

  margin: 20px 2px 15px 19px;
 }
`

export const Dot = styled.div`
margin-top: 21px;
& i {
  color: #9b83c3;
  font-size: 10px;
  margin-right: 11px;
  opacity: 0.4;
}
`
;
