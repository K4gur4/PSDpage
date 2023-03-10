import styled from "styled-components";
import prod1 from "../../img/product1.png";
import { mobile } from "../../responsive";
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${mobile({
    width: "100%",
  })}
`;
export const Title = styled.div`
  height: 100px;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  ${mobile({
    textAlign: "center",
  })}
  & hr {
    color: #8262b5;
    width: 50px;
    margin: 0;
    ${mobile({
      margin: "auto",
    })}
  }
`;
export const Products = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${mobile({
    justifyContent: "space-around",
    padding: "20px",
  })}
`;
export const Item = styled.div`
  width: 262px;
  height: 408px;
  margin: 25px 0px;
  ${mobile({
    width: "47%",
    height: "100%",
  })}
`;
export const Name = styled.p`
  letter-spacing: 6px;
  font-size: 12px;
  color: #8262b5;
  margin-bottom: 10px;
`;
export const TitleName = styled.h2`
  letter-spacing: 2px;
  font-size: 24;
  margin-bottom: 24px;
`;

export const Img = styled.img`
  height: 323;
  width: 262px;
  ${mobile({
    width: "100%",
  })}
`;
export const Data = styled.div`
  font-family: "Open Sans";
`;
export const DataTitle = styled.p`
  font-size: 15px;
  font-weight: bold;
  padding-top: 15px;
  margin-bottom: 2%;
`;
export const Icon = styled.div`
  & i {
    font-size: 12px;
  }
  margin-bottom: 2%;
`;
export const PriceContainer = styled.div`
  display: flex;
`;
export const Price = styled.div`
  text-decoration: line-through;
  color: gray;
  margin-right: 2%;
`;
export const Discount = styled.div`
  color: #8262b5;
  font-weight: bold;
`;
export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const ImgButton = styled.button`
  position: absolute;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  border: none;
  color: #424242;
  background-color: white;
  margin-bottom: 4px;
  margin-left: 4px;
  padding: 14px 18px;
  cursor: pointer;
  &:hover {
    color: #a791cb;
  }
`;
