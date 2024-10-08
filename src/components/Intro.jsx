import React from 'react'
import styled from 'styled-components'


const Intro = () => {
    return (
        <Introduction id="Home">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName"> Vivek Maurya</span><br /> I am Fronted Developer </span>
                <p className="introPara">I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results with a positive attitude and a growth mindset. I am ready to make a meaningful contribution and achieve great things.</p>
                <button id="btn">Hire Me!</button>
            </div>
            <div className="photo">
                <img src="/portfolioVivek.jpg" alt="Intro Photo" className="introImage" />
            </div>

        </Introduction>
    )
}

export default Intro;


const Introduction = styled.section`
    height: calc(100vh - 5rem);
    width: 100vw;
    max-width: 75rem;
    margin: 0 auto;
    overflow: hidden;
    position: relative;

    .introImage {
        position: absolute;
        top: -4rem;
        right: 0;
        z-index: -1;
        object-fit: cover;
        height: 100vh;
      
    }

   
    
    .introContent {
        height: 100vh;
        width: 100vw;
        padding: 2rem;
        font-size: 3rem;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .hello {
        font-size: 1.75rem;
        font-weight: 100;
    }

    .introName {
        color: yellow;
    }

    .introPara {
        font-size: medium;
        font-weight: 200;
        width: 40rem;
        letter-spacing: 1px;
    }

        #btn {
            color: white;
            border: none;
            width: 100px;
             margin-top: 1rem;
            /* margin-right: 82rem;  */
            padding: 8px 8px;
            background-color: black;
            border-radius: 2rem;
            border: 1px solid white;
            cursor: pointer;
        }

        #btn:hover {
            color: black;
            background-color: yellow;
        }

        @media screen and (max-width: 768px) {
            .introImage {
                height: 30rem;
                width: 40rem;
                padding-right: 2rem;
                margin-right: 3.2rem;
                border-radius: 30%;
            }

            .introContent {
                font-size: 8vw;
                padding-top: 11rem;
                margin-top: 3rem;
            }

            #btn {
            border: 1px solid white;
            font-size: 0.6rem;
            width: 80px;
         } 

         .introPara {
        width: 40rem;
        letter-spacing: 0.9px;
        text-align: start;
    }
  }


   @media screen and (max-width: 576px) {
    
    .introImage {
                height: 28rem;
                width: 32rem;
                padding-right: 2rem;
                margin-right: 1.9rem;
                border-radius: 22%;
            }

            .introContent {
                font-size: 6vw;
                padding-top: 14rem;
            }

            #btn {
            border: 1px solid white;
            font-size: 0.5rem;
            width: 50px;
         } 

     .introPara {
        width: 30rem;
        letter-spacing: 0.9px;
        text-align: start;
    }
} 
     @media screen and (max-width: 430px) {
        .introImage {
            height: 25rem;
            padding: 2.8rem;
            width: 25rem;
            border-radius: 20%;
            margin: auto;
        }

        .introContent {
            font-size: 1.5rem;
            padding-top: 21rem;

        }

        .introPara {
            width: 20rem;
        }

        #btn {
            margin-bottom: 10rem;
        }
     }

`;