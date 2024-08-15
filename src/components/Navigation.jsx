import styled from "styled-components";
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { Link } from "react-scroll"
import { TbMenuDeep } from "react-icons/tb";
import { useState } from "react";



const Navigation = () => {

  const [showMenu, setShowMenu] = useState(false);



  return (
    <Nav>
      <img src="Portfolio-logo.jpg"  className="img"/>
      <div className="desktopMenu">
        <Link className="link"   to="Home" spy={true} smooth={true} hashSpy={true} offset={-100} duration={500}  >Home</Link>
        <Link className="link"  to="About" spy={true} smooth={true} hashSpy={true} offset={-100} duration={500} >About</Link>
        <Link className="link"  to="Skill" spy={true} smooth={true} hashSpy={true} offset={-50} duration={500}  >Skills</Link>
        <Link className="link"  to="Project" spy={true} smooth={true} hashSpy={true} offset={-40} duration={500} >Project</Link>
        <Link className="link"  to="Contact" spy={true} smooth={true} hashSpy={true} offset={-100} duration={500}>Contact Me</Link>
       
      </div>

      <TbMenuDeep  className="mobMenu" onClick={() => setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu ? "flex" : "none"}}>
        <Link className="listItem" activeClass="active"  to="Home" spy={true} smooth={true} hashSpy={true} offset={-100} duration={500}  onClick={() => setShowMenu(false)}>Home</Link>
        <Link className="listItem" activeClass="active" to="About" spy={true} smooth={true} hashSpy={true} offset={-100} duration={500} onClick={() => setShowMenu(false)}>About</Link>
        <Link className="listItem" activeClass="active" to="Skill" spy={true} smooth={true} hashSpy={true} offset={-50} duration={500}  onClick={() => setShowMenu(false)}>Skills</Link>              
        <Link className="listItem" activeClass="active" to="Project" spy={true} smooth={true} hashSpy={true} offset={-40} duration={500} onClick={() => setShowMenu(false)}>Project</Link>
        <Link className="listItem" activeClass="active" to="Contact" spy={true} smooth={true} hashSpy={true} offset={-100} duration={500} onClick={() => setShowMenu(false)}>Contact Me</Link>
       
       
        <a href=" https://github.com/VivekAgastaya" className="listItem" activeClass="active" to="Github" spy={true} smooth={true} hashSpy={true} offset={-100} duration={500} onClick={() => setShowMenu(false)}> Github Profile</a>

        </div>
     
      <div>
         <button  onClick={() => {
          document.getElementsByClassName(".github").scrollIntoView({Behaviour: "smooth"});
         }}
         
         className="button desktopMenuBtn"><a href="https://github.com/VivekAgastaya" className="github">Github Profile</a></button>
      </div>

      
    </Nav>
  )
}

export default Navigation;

const Nav = styled.section`
background: rgb(30,30,30);
display: flex;
flex-direction: row;
justify-content: space-between;
height: 5rem;
width: 75rem;
margin: 0 auto;
align-items: center;
position: sticky;
top: 0;
z-index: 3;


 img {
    object-fit: cover;
    height: 3rem;
    width: 5rem;
    border-radius: 10px;
 }

  .link{
  color: white;
  margin: 1rem;
 }
  
 .link:hover {
  color: yellow;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid yellow;
 }

  .button {
    border: none;
  }

   .github {
    color: white;
    border: 2px solid white;
    padding: 8px 12px;
    border-radius: 20px;
    cursor: pointer;
   }
   
   .active {
    color: yellow;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid yellow;
   }

   .navMenu {
    position: absolute;
    top: 4rem;
    right: 2rem;
    z-index: 2;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    height: fit-content;
    min-width: 15rem;
    background: rgb(40,40,40);
    border-radius: 1rem;
   }

   .listItem {
    color: white;
    padding: 0.5rem 3rem;
    margin: 0.25rem;
    background: rgb(30,30,30);
   }

   .mobMenu {
    display: none;
    object-fit: cover;
    height: 1.8rem;
    height: 2rem;
    width: 2rem;
    color: yellow;
   }

   @media screen and (max-width: 768px) {
    .mobMenu {
      display: flex;
    }

    .desktopMenuBtn {
      display: none;
    }

    .desktopMenu {
      display: none;
    }

    .img {
      display: none;
    }

    .navMenu {
    position: absolute;
    left: 2rem;
    /* flex-direction: column;
    padding: 0.5rem;
    height: fit-content; */
   }
   /* .listItem { */
    /* color: red; */
    /* padding: 0.5rem 3rem;
    margin: 0.25rem; */
    /* background: rgb(30,30,30); */
   

   /* .mobMenu {
    object-fit: cover;
    height: 1.8rem;
    height: 2rem;
    width: 2rem;
    color: yellow;
   } */

   }

`;