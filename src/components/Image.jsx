import styled from "styled-components";
const Image = () => {
  return (
    <Pic className="links">
    <img src="/facebook.jpg" alt="facebook image" className="link" />
    <img src="/instagram.jpg" alt="instagram image" className="link" />
    <img src="/linkedin.jpg" alt="linkedin image" className="link" />
    <img src="/github.jpg" alt="github image" className="link" />     
  </Pic>
  )
}

export default Image;

const Pic = styled.div`
 width: 100vw;
 max-width: 65rem;
 overflow: hidden;
margin:  auto;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;


  .link {
    height: 2.5rem;
    width: 2.5rem;
    object-fit: cover;
    border-radius: 2.1rem;
    margin: 0.5rem;
    margin-bottom: 1rem;
    margin-top: 00rem;
  }

  @media screen and (max-width: 768px) {

    .link {
      height: 2.2rem;
      width: 2.2rem;
    }
  }

  @media screen and (max-width: 576px) {

    .link {
      height: 1.8rem;
      width: 1.8rem;
    }
  }





`;