import styled from "styled-components"

const Project = () => {
  return (
    <Pro>
        <span className="projectTitle">Why Choose Me</span>
        <span className="projectDescription">With a strong command of programming languages like Javascript coupled with proficiency in web development and MySQL, I possess a diverse skill set that enables me to create robust software applications, design responsive websites, and effectively manage and manipulate data using database systems. My expertise in these areas empowers me to tackle a wide range of software engineering challenges with precision and efficiency.</span>
        <div className="projectBars">
            <div className="projectBar">
            <img src="diceGame.png" alt="diceGame image" className="projectImg" />
            <h2>Dice Game</h2>
            </div>
            {/* <div className="projectBar">
            <img src="foodyZone.png" alt="foodyZone image" className="projectImg" />
            <h2>Foody Zone</h2>
            </div> */}
            <div className="projectBar">
            <img src="firebaseContact.png" alt="firebaseContact image" className="projectImg firebase" />
            <h2>Firebase Contact App</h2>
            </div>
        </div>
    </Pro>
    )
}

export default Project

const Pro = styled.section`
  width: 100vw;
 max-width: 65rem;
 overflow: hidden;
 margin: 0 auto;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

  .projectTitle {
    font-size: 3rem;
    padding-top: 3rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .projectDescription {
    max-width: 51rem;
    font-size: 0.9rem;
    font-weight: 400;
    padding: 0 2rem;
  }

  .projectBars{
    margin: 1.5rems;
    display: flex;
   flex-direction: row;
   flex-wrap: wrap;
  }

  .projectBar {
    display: flex;
   flex-direction: column;
   margin: 1rem;
   padding: 1.5rem 2rem;
   border-radius: 0.5rem;
   /* background: rgb(50,50,50); */
   align-items: center;
   gap: 1rem;
   
  }

  .projectImg {
    /* object-fit: cover; */
    height: 25rem;
    width: 25rem;
    align-items: center;
  }

  .firebase {
    object-fit: cover; 
  }

  @media screen and (max-width: 768px) {
    .projectDescription {
    max-width: 55rem;
    font-size: 2vw;
     }

     .projectBars{
    
    display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
  }
  }


  @media screen and (max-width: 576px) {
     
    .projectBars{
      font-size: 0.7rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .projectImg {
      height: 18rem;
      width: 18rem;
    } 
   
  }


  @media screen and (max-width:992px) {

    .projectBars {
      display: flex;
      flex-direction: row;
    }

    .projectImg {
      height: 22rem;
      width: 22rem;
    }
  }
   

  @media screen and (min-width:768) , (max-width:992px)  {
    .projectBars {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .projectImg {
      height: 20rem;
      width: 20rem;
    }
  }
`;