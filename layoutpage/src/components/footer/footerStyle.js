import styled from "styled-components";

export const Container = styled.div`
  width: 1920px;
  display: flex;
  height: 417px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;
export const Contents = styled.div`
  width: 1140px;
  height: 100%;
  color: #888888;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 54px;
`;
export const TopLeft = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const TopRight = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const TopCenter = styled.div`
  width: 360px;
`;
export const Bot = styled.div`
  border-top: 1px solid #888888;
  width: 1920px;
  display: flex;
  justify-content: center;
`;
export const BotLeft = styled.div``;
export const BotRight = styled.div``;
export const Title = styled.p`
  font-family: "Montserrat";
  font-size: 17px;
  border-bottom: 1px solid;
  padding-bottom: 30px;
  margin-bottom: 22px;
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
`;
export const List = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ListItem = styled.ul`
  list-style: none;

  & li {
    cursor: pointer;
    margin-bottom: 10px;
    /* font-size: 14px; */
  }

  & li:hover {
    border-bottom: 1px solid #888888;
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
`;
