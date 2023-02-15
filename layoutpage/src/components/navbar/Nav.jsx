
import {Bot,Botcenter,Botleft,Botright,Container,Logo,Top,Topleft,Topright} from './nav'
const Nav = () => {
  return (
    <Container>
      <Top>
        <Topleft>
          <p><i class="fa-sharp fa-regular fa-bookmark"></i> Welcome to Franco - an e-Commerce PSD Template!</p>
        </Topleft>
        <Topright>
        <p> <i class="fa-solid fa-gear"></i> Shop Setting</p>
          <p><i class="fa-sharp fa-solid fa-lock"></i> Member Login</p>
        </Topright>
      </Top>
      <Bot>
      
             <Botleft><Logo>FRANCO</Logo></Botleft>
        <Botcenter>
          <ul>
            <li className='navlist'>HOME</li>
            <li className='navlist'>WOMEN</li>
            <li className='navlist'>MEN</li>
            <li className='navlist'>ABOUT US</li>
            <li className='navlist'>BLOG</li>
            <li className='navlist'>COLLECTIONS</li>
            <li className='navlist'>CONTACT</li>
            <li className='navlist'><i class="fa-solid fa-magnifying-glass"></i></li>
          </ul>
        </Botcenter>
        <Botright>
        <i class="fa-sharp fa-regular fa-heart"></i>
        
        <i class="fa-solid fa-cart-shopping"></i>
        </Botright>
     
        
      </Bot>
    </Container>
  );
};

export default Nav;
