import React from "react";
import payment from "../../img/Payment.png"
import about from "../../img/icon.png"

import {
  Container,
  Contents,
  Bot,
  BotLeft,
  Top,
  TopCenter,
  TopLeft,
  TopRight,
  Desc,
  Icon,
  List,
  ListItem,
  Title,BotContainer
} from "./footerStyle";
const Footer = () => {
  return (
    <Container>
      <Contents>
        <Top>
          <TopLeft>
            <Title>About Franco</Title>
            <Desc>
              <p>Aliquam tempor sagittis neque, vel aliquam risus consectetur vel.
              Aenean hendrerit, elit a lacinia suscipit, orci mauris vulputate
              mi, eu interdum nunc diam at ipsum.</p>
            </Desc>
            <Icon>
              <img src={about} alt="" />
            </Icon>
          </TopLeft>
          <TopCenter>
            <Title>Navigation</Title>
            <List>
              <ListItem>
                <li><p>Home</p></li>
                <li><p>About Us</p></li>
                <li><p>Our Blog</p></li>
                <li><p>Women</p></li>
                <li><p>Men</p></li>
                <li><p>Contact Us</p></li>
              </ListItem>
              <ListItem className="right">
                <li><p>FAQs</p></li>
                <li><p>Featured Brands</p></li>
                <li><p>Gift Vouchers</p></li>
                <li><p>Affiliates</p></li>
                <li><p>Speccial Gift</p></li>
                <li><p>Terms & Conditions</p></li>
              </ListItem>
            </List>
          </TopCenter>
          <TopRight>
            <Title>Shop Location</Title>
            <Desc>
              <ListItem>
                <li><i class="fa-regular fa-map"></i> 500 Hennessy Road</li>
                <li> Causeway Bay, Hong Kong</li>
                <li><i class="fa-solid fa-phone"></i> +1 23456789</li>
                <li><i class="fa-regular fa-envelope"></i> contact@yourdomain.com</li>
              </ListItem>
            </Desc>
          </TopRight>
        </Top>
      </Contents>
        <Bot>
          <BotContainer>
          <BotLeft>© Copyright 2015 & Made with <i style={{color:'red'}} class="fa-solid fa-heart"></i> by <a style={{color:'white'}}>ArrowHitech.</a> </BotLeft>
          <p><img src={payment} alt="" /></p>
          </BotContainer>
        </Bot>
    </Container>
  );
};

export default Footer;
