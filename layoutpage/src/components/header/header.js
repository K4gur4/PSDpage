import styled from "styled-components";
import { mobile } from "../../responsive";
export const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 78px;
  width: 100%;
  display: flex;
  ${mobile({
    width: "100%",
    flexDirection:"column",
    alignItems:'center',
    marginTop:'125px'
  })}
`;

export const Leftcontainer = styled.div`
  position: relative;
  width: 750px;
  height: 560px;
  background-color: #eeeeee;
  & p {
    text-align: right;
    margin:0px 97px 0px 0px;
  }
  & .pacifico {
    font-family: 'Pacifico';
    color: black;
    font-size: 30px;
    line-height: 0;
  }
  & button {
    font-size: 14px;
    background-color: #9b83c3;
    text-align: center;
    color: white;
    border: none;
    float: right;
    padding: 13px 20px;
    margin-right: 97px;
    right: 0;
    margin-top: 25px;
  }
  & img {
    position: absolute;
    z-index: 1;
    left: -30px;
    top: 24px;
    
  }
  ${mobile({
    width:'100%',
  })}
`;
export const Title = styled.div`
    position: absolute ;
    margin-top: 32%;
    right: 0;
    color: #e1e1e1;
  font-family: "Montserrat", sans-serif;
  & .up {
    font-size: 80px;
    font-weight: bold;
    padding: 0;
    line-height: 0.5;
  }
  & .down {
    font-size: 50px;
  }
`;
export const Left = styled.div`
  margin-right: 30px;
  overflow: hidden;
  ${mobile({
     marginRight: '0px',
     width:'100%'
  })}
  
`;
export const Right = styled.div`
 ${mobile({
    display:'none'
  })}
`;
export const Top = styled.div`
display: flex;
position: relative;
  width: 360px;
  height: 200px;
  background-color: #cad7df;
  margin-bottom: 30px;

  & .text {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    letter-spacing: 4px;
    color: #616161;
  }

  & .textBold {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: bold;
  }
  & img {
    position: absolute;
  }
  
`;

export const TopTitle= styled.div`
position: absolute;
margin-top: 24%;
margin-left: 15%;
`

export const Bot = styled.div`
display: flex;
position: relative;
  background-color: #dedede;
  width: 360px;
  height: 330px;
  & .text {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    letter-spacing: 4px;
    color: #616161;
  }

  & .textBold {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: bold;
  }

  .img{
    position: absolute;
  }
`;

export const HeaderBtn = styled.button`
font-size: 14px;
    background-color: #9b83c3;
    text-align: center;
    color: white;
    border: none;
    float: right;
    padding: 12px 20px;
    right: 0;
    margin-top: 15%;
    margin-right: 10%;
`
export const BotTitle= styled.div`
position: absolute;
margin-left: 11%;
margin-top: 33%;
`