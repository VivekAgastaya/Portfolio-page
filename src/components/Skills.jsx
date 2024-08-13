import styled from "styled-components"

const Skills = () => {
  return (
    <Coding>
        <span className="skillTitle">What I do</span>
        <span className="skillDescription">Aspiring Software developer Passionate about design and develop innovative software solutions, applying problem-solving skills and programming knowledge to create efficient and reliable applications that meet user needs and industry standards</span>

<div className="skillBars">
            <div className="skillBar">
                <img src="html-5.png" alt="html logo" className="skillBarImg" />
                <h2>HTML</h2>
            </div>
            <div className="skillBar">
                <img src="css-3.png" alt="css logo" className="skillBarImg" />
                <h2>CSS</h2>
            </div>
            <div className="skillBar">
                <img src="Bootstrap.jpeg" alt="bootstrap logo" className="skillBarImg bootstrap" />
                <h2>BOOTSTRAP</h2>
            </div>
            <div className="skillBar">
                <img src="js.png" alt="js logo" className="skillBarImg js" />
                <h2>JAVASCRIPT</h2>
            </div>
             <div className="skillBar">
                <img src="react.png" alt="react logo" className="skillBarImg" />
                <h2>REACT</h2>
            </div>
             <div className="skillBar">
                <img src="mysql.png" alt="MySql logo" className="skillBarImg" />
                <h2>MYSQL</h2>
            </div>
             <div className="skillBar">
                <img src="java.png" alt="java logo" className="skillBarImg"/>
                <h2>JAVA</h2>
            </div>
            <div className="skillBar">
                <img src="gitAndGithub.jpeg" alt="git and github logo" className="skillBarImg  git" />
                <h2>GIT & GITHUB</h2>
            </div>
        </div>
    </Coding>
  )
}

export default Skills

const Coding = styled.section`
 width: 100vw;
 max-width: 65rem;
 overflow: hidden;
 margin: 0 auto;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
   
  .skillTitle {
    font-size: 3rem;
    padding-top: 3rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
}

  .skillDescription {
    font-size: 0.9rem;
    font-weight: 400;
    padding: 0 2rem;
    max-width: 51rem;
  }

  .skillBars {
    margin: 1.5rem;
   /* width: 15vw; */
   /* height: 20vh; */
   /* max-width: 80%; */
   /* text-align: center; */
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   /* border: 2px solid wheat; */
   justify-content: center;

  }

  .skillBar {
   display: flex;
   flex-direction: column;
   margin: 1rem;
   padding: 1.5rem 2rem;
   border-radius: 0.5rem;
   background: rgb(50,50,50);
   align-items: center;
   gap: 1rem;
   height: 120px;
   width: 250px;
   
   h2 {
    font-size: 1rem;
   }
  }

  .SkillBarImg {
    object-fit: cover;
    height: 4rem;
    width: 4rem;
    /* margin-right: 2rem; */
    align-items: center;
    }

    .bootstrap {
        height: 3rem;
        width: 3rem;
    }

    .js {
        height: 3rem;
        width: 3rem;
    }
    .git {
        height: 3rem;
        width: 3rem;
    }

    @media screen and (max-width: 768px) {
        .skillDescription {
    /* font-size: 0.9rem;
    font-weight: 400;
    padding: 0 2rem;
    max-width: 45rem; */
    font-size: 2vw;
    text-align: start;
  }

    }





`;