import React from "react";
import event1 from "../../img/event1.png";
import event2 from "../../img/event2.png";
import event3 from "../../img/event3.png";
import date from "../../img/Date.png";
import {
  Container,
  Events,
  Title,
  Footer,
  Dot,
  Item,
  ItemData,
  ItemDesc,
  ItemFooter,
  ItemImg,
  ItemTitle,
} from "./eventStyle";
const Event = () => {
  const events = [
    {
      id: 0,
      img: event1,
      title: "In commodo dolor vitae",
      desc: "Aliquam tempor sagittis neque, vel aliquam risus consectetur vel. Aenean hendrerit, elit a lacinia suscipit, orci mauris.",
      comment: 12,
      heart: 6,
    },
    {
      id: 0,
      img: event2,
      title: "Vivamus non dignissim elit",
      desc: "Aliquam tempor sagittis neque, vel aliquam risus consectetur vel. Aenean hendrerit, elit a lacinia suscipit, orci mauris.",
      comment: 12,
      heart: 6,
    },
    {
      id: 0,
      img: event3,
      title: "Ut lacinia erat ut diam volutpat",
      desc: "Aliquam tempor sagittis neque, vel aliquam risus consectetur vel. Aenean hendrerit, elit a lacinia suscipit, orci mauris.",
      comment: 12,
      heart: 6,
    },
  ];
  return (
    <Container>
      <Title>
        <p>LASTEST</p>
        <h2>NEW & EVENTS</h2>
        <hr />
      </Title>
      <Events>
        {events.map((item) => (
          <Item>
            <ItemImg>
              <img className="events" src={item.img} alt="" />
              <img className="date" src={date} alt="" />
            </ItemImg>
            <ItemData>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDesc>{item.desc}</ItemDesc>
            </ItemData>
            <ItemFooter>
              <Footer>
                <i class="fa-regular fa-comment"> 12</i>
                <i class="fa-regular fa-heart"> 6</i>
              </Footer>
            </ItemFooter>
          </Item>
        ))}
      </Events>
      <Dot>
        <i class="fa-solid fa-circle"></i> 
      
        <i style={{fontSize:'13px',opacity:'1'}} class="fa-solid fa-circle"></i>
     
        <i class="fa-solid fa-circle"></i>
      </Dot>
    </Container>
  );
};

export default Event;
