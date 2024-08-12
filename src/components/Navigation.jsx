import styled from "styled-components";

const Navigation = () => {
  return (
    <Nav>
        <img src="Portfolio-logo.jpg"/>
        <div >

          <a href="#" className="link">Home</a>
          <a href="#" className="link">About</a>
          <a href="#" className="link">Skills</a>
          <a href="#" className="link">Project</a>
          <a href="#" className="link">Contact Me</a>
            {/* <ul>
                <li className="lii">Home</li>
                <li className="lii">About</li>
                <li className="lii">Skills</li>
                <li className="lii">Projects</li>
                <li className="lii">Contact Me</li>
            </ul> */}
        </div>
        {/* <button>Github Profile</button> */}<div>
        <a href="https://github.com/VivekAgastaya" className="github">Github Profile</a>
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
/* background-color: red; */
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
  /* ul {
    font-size: 20px;
    display: flex;
    list-style: none;
    cursor: pointer;
    gap: 1rem;
  }

   .lii:hover {
    color: yellow;
    padding-bottom: 0.2rem;
    border-bottom: 3px solid yellow;
  } */
   
  /* button {
    color: white;
    padding: 10px 10px;
    margin: 10px;
    border-radius: 2rem;
  } */

   .github {
    color: white;
    border: 2px solid white;
    padding: 8px 12px;
    border-radius: 20px;
    cursor: pointer;
   }
`;