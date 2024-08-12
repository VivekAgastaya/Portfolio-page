import styled from "styled-components"

const Footer = () => {
  return (
    <Down className="footer">
        Copyright 2024
    </Down>
  )
}

export default Footer

const Down = styled.footer`
width: 100vw;
height: 4rem;
background: rgb(40,40,40);
display: flex;
align-items: center;
justify-content: center;
font-size: large;
font-weight: 300;

`;