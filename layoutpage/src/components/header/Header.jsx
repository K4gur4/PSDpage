import React from "react";
import {
  Container,
  Leftcontainer,
  Left,
  Right,
  Bot,
  Top,
  Title,TopTitle,HeaderBtn,BotTitle
} from "./header";
import hdl from "../../img/hdl.png";
import hd2 from "../../img/hd2.png";
import hd3 from "../../img/hd3.png";
const Header = () => {
  return (
    <Container>
      <Left>
        <Leftcontainer>
          <img id="img" src={hdl} alt="" />
          <Title>
            <p className="up">BLYSZAK</p>
            <p className="down">EYEWEAR</p>
          <p className="pacifico">Two High-end Materials</p>
          <button>Shop Now</button>
          </Title>
        </Leftcontainer>
      </Left>
      <Right>
        <Top>
        <img src={hd2} alt="" />
        <TopTitle>
        <p className="text">SMALL THING</p>
        <p className="textBold">MAKE DIFFERENT</p>
        </TopTitle>
        </Top>
        <Bot><img src={hd3} alt="" />
        <BotTitle>
        <p className="text">FOLIO</p>
        <p className="textBold">BACKPACK</p>
        <HeaderBtn>Shop Now</HeaderBtn>
        </BotTitle>
        </Bot>
      </Right>
    </Container>
  );
};

export default Header;
