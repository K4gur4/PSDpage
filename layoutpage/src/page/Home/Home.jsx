import React from 'react'
import Nav from '../../components/navbar/Nav.jsx'
import Header from '../../components/header/Header.jsx'
import { Container,Content } from "./homeStyle";
import Main from '../../components/main/Main.jsx';
import Event from '../../components/events/Event.jsx';
import Footer from '../../components/footer/Footer.jsx';

const Home = () => {
  return (
    <Container>
      <Nav/>
      <Content>
      <Header/>
      <Main/>
      </Content>
      <Event/>
      <Footer/>
    </Container>
  )
}

export default Home
