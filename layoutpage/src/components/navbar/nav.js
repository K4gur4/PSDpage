import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  ${mobile({
    position: "fixed",
  width: '100%'

  })}
  z-index: 5;
  background-color: white;
`;
export const Top = styled.div`
  display: flex;
  height: 46px;
  background-color: #222222;
  color: #525252;
  justify-content: space-between;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  width: 100%;
`;

export const Topright = styled.div`
  display: flex;
  & p {
    margin-right: 30px;
  }
`;
export const Topleft = styled.div`
  & p {
    margin-left: 30px;
  }
`;
export const Bot = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 79px;
  box-shadow: 0px 1px #dddddd;
  ${mobile({
    display: "none",
    height: "auto",
  })}
`;
export const Botleft = styled.div`
  margin-left: 30px;
`;

export const Logo = styled.div`
  letter-spacing: 15px;
  font-size: 20px;
  padding: 6px 0px 6px 15px;
  border: 2px solid black;
`;

export const Botright = styled.div`
margin-left: 110px;
  & i {
    font-size: 30px;
    margin-right: 30px;
  }
  ${mobile({
    marginRight: '0px',
    marginLeft: "0px",
  })}
`;

export const Botcenter = styled.div`
  padding: 0;
  & ul {
    list-style: none;
    width: 830px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 0;
    ${mobile({
      width: "100%",
      flexDirection: "column",
    })}
  }

  & li:hover {
    color: #a791cb;
    cursor: pointer;
  }
`;

export const BotMoblie = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 79px;
  box-shadow: 0px 1px #dddddd;
  display: none;
  ${mobile({
    display: "flex",
    justifyContent: "center",
  })}
  z-index: 3;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  font-size: 45px;
  cursor: pointer;
  display: none;
  ${mobile({ display: "inline" })}
`;

export const MobileTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MobileBot = styled.div`
  position: absolute;
  left: 0;
  background-color: white;
  top: 130px;
  & li {
    padding: 10px 30px;
    font-size: 20px;
    text-align: start;
    border-bottom: 1px solid #888888;
  }
`;
