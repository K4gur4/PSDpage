import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 1920px;
  display: flex;
  height: 417px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #222222;
  ${mobile({
    width: "100%",
    height: "auto",
  })}
`;
export const Contents = styled.div`
  width: 1140px;
  height: 100%;
  color: #888888;
  ${mobile({
    width: "100%",
  })}
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 54px;
  ${mobile({
    width: "100%",
    heigh: "auto",
    flexWrap: "wrap",
    justifyContent: "space-around",
  })}
`;
export const TopLeft = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${mobile({
    width: "50%",
  })}
`;
export const TopRight = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${mobile({
    width: "95%",
    marginBottom: "20px",
  })}
`;
export const TopCenter = styled.div`
  width: 360px;
  ${mobile({
    width: "40%",
  })}
`;
export const Bot = styled.div`
  border-top: 1px solid #888888;
  width: 1920px;
  display: flex;
  justify-content: center;
  ${mobile({
    width: "100%",
  })}
`;
export const BotLeft = styled.div``;
export const BotRight = styled.div``;
export const Title = styled.p`
  font-family: "Montserrat";
  font-size: 17px;
  border-bottom: 1px solid #888888;
  padding-bottom: 30px;
  margin-bottom: 22px;
  color: white;
`;
export const Desc = styled.div`
  & p {
    font-family: "Open Sans";
    font-size: 14px;
    line-height: 1.5;
  }
`;
export const Icon = styled.div`
  margin-top: 50px;
  cursor: pointer;
`;
export const List = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ListItem = styled.ul`
  list-style: none;
  & li {
    font-family: "Open Sans";
    font-size: 14px;
    cursor: pointer;
    line-height: 2.1;
  }
  &.right {
    padding-right: 35px;
  }

  & p:hover {
    border-bottom: 1px solid white;
    color: white;
  }
`;

export const BotContainer = styled.div`
  width: 1140px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #888888;
  margin: 25px;
  font-size: 15px;

  & p {
    cursor: pointer;
  }
`;
