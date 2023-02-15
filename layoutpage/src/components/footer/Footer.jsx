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
                <li>Home</li>
                <li>About Us</li>
                <li>Our Blog</li>
                <li>Women</li>
                <li>Men</li>
                <li>Contact Us</li>
              </ListItem>
              <ListItem>
                <li>FAQs</li>
                <li>Featured Brands</li>
                <li>Gift Vouchers</li>
                <li>Affiliates</li>
                <li>Speccial Gift</li>
                <li>Terms & Conditions</li>
              </ListItem>
            </List>
          </TopCenter>
          <TopRight>
            <Title>Shop Location</Title>
            <Desc>
              <ListItem>
                <li><i class="fa-regular fa-map"></i>500 Hennessy Road</li>
                <li>Causeway Bay, Hong Kong</li>
                <li><i class="fa-solid fa-phone"></i>+1 23456789</li>
                <li><i class="fa-regular fa-envelope"></i>contact@yourdomain.com</li>
              </ListItem>
            </Desc>
          </TopRight>
        </Top>
      </Contents>
        <Bot>
          <BotContainer>
          <BotLeft>© Copyright 2015 & Made with <i style={{color:'red'}} class="fa-solid fa-heart"></i> by ArrowHitech.</BotLeft>
          <p><img src={payment} alt="" /></p>
          </BotContainer>
        </Bot>
    </Container>
  );
};

export default Footer;
