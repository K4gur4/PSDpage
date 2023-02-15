import React from "react";
import prod1 from "../../img/product1.png";
import prod2 from "../../img/product2.png";
import prod3 from "../../img/product3.png";
import prod4 from "../../img/product4.png";
import prod5 from "../../img/product5.png";
import prod6 from "../../img/product6.png";
import prod7 from "../../img/product7.png";
import prod8 from "../../img/product8.png";

import {
  Container,
  Data,
  DataTitle,
  Discount,
  Icon,
  Img,
  Item,
  Price,
  PriceContainer,
  Products,
  Title,
  Name,
  TitleName,
  ImgButton,ImgContainer
} from "./main";
const Main = () => {
  const products = [
    {
      id: 0,
      img: prod1,
      name: "Suspendisse id volutpat",
      price: 99.00,
      discount: 84.00,
    },
    {
      id: 1,
      img: prod2,
      name: "Lorem ipsum dolor",
      price: 99.0,
      discount: 84.00,
    },
    {
      id: 2,
      img: prod3,
      name: "Proin sed nulla mi",
      price: 99.00,
      discount: 84.00,
    },
    {
      id: 3,
      img: prod4,
      name: "Aenean placerat",
      price: 99.00,
      discount: 84.00,
    },
    {
      id: 4,
      img: prod5,
      name: "Suspendisse id volutpat",
      price: 99.00,
      discount: 84.00,
    },
    {
      id: 5,
      img: prod6,
      name: "Lorem ipsum dolor",
      price: 99.00,
      discount: 84.00,
    },
    {
      id: 6,
      img: prod7,
      name: "Proin sed nulla mi",
      price: 99.00,
      discount: 84.00,
    },
    {
      id: 7,
      img: prod8,
      name: "Aenean placerat",
      price: 99.00,
      discount: 84.00,
    },
  ];
  return (
    <Container>
      <Title>
        <Name>FRANCO</Name>
        <TitleName>FEATURED ITEMS</TitleName>
        <hr />
      </Title>
      <Products>
        {products.map((item) => (
          <Item>
            <ImgContainer>
              <Img src={item.img} />
              <ImgButton>ADD TO CART</ImgButton>
            </ImgContainer>
            <Data>
              <DataTitle>{item.name}</DataTitle>
              <Icon><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></Icon>
              <PriceContainer>
                <Price>${(item.price).toFixed(2)}</Price>
                <Discount>${(item.discount).toFixed(2)}</Discount>
              </PriceContainer>
            </Data>
          </Item>
        ))}
      </Products>
    </Container>
  );
};

export default Main;
