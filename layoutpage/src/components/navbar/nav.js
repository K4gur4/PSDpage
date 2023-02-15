import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;
export const Top = styled.div`
  display: flex;
  height: 46px;
  background-color: black;
  color: #525252;
  justify-content: space-between;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;

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
  width: 1920px;
  height: 79px;
  box-shadow: 0px 1px #dddddd;
  `;
export const Botleft = styled.div`
  margin-left: 30px;
  /* margin-right: 200px; */
  `;

  export const Logo = styled.div`
    letter-spacing: 15px;
    font-size: 20px;
    padding: 6px 0px 6px 15px;
    border: 2px solid black;
  `;


export const Botright = styled.div`
margin-left: 119px;
  & i {
    font-size: 30px;
    margin-right: 30px;
  }
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
  }

  & li:hover {
    color: #a791cb;
    cursor: pointer;
  }

  
`;
