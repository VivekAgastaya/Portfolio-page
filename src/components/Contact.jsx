import styled from "styled-components"
import emailjs from '@emailjs/browser';
import { useRef } from "react";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i7kqsyz', 'template_lzy30k8', form.current, {
        publicKey: '14PakEjgEUyypZ1MT',
      })
      .then(
        (result) => {
          console.log('SUCCESS!');
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Connect id="Contact">
      <span className="connectTitle">Contact Me</span>
      <span className="connectDescription">
        I'm currently available to take on jobs, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
      </span>
      <div className="common">
        <div className="mail">
          <img src="/mail.png" alt="mail image" className="image" />
          <h2>hrpsva.vns@gmail.com</h2>
        </div>

        <div className="phone">
          <img src="/phone.png" alt="phone image" className="image" />
          <h2>7518135896</h2>
        </div>

        <div className="location">
          <img src="location.png" alt="location image" className="image" />
          <h2>Varanasi, India</h2>
        </div>
      </div>

      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" name="your_name"/>
        <input type="email" className="email" placeholder="Your Email" name="your_email"/>
        <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
        <button type="submit" value="send" className="submitBtn">Submit</button>
      </form>

    </Connect>
  )
}

export default Contact;

const Connect = styled.section`
width: 100vw;
max-width: 65rem;
overflow: hidden;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  
  .connectTitle {
    font-size: 3rem;
    font-family: 600;
    padding: 0 2rem;
    margin-bottom: 1.5rem;
  }

  .connectDescription {
    font-size: medium;
    font-weight: 400;
    max-width: 51rem;
    padding: 0 2rem;
  }

  .common {
    display: flex;
    flex-direction: row;
    padding-top: 2rem;
    
  }

  .image {
    height: 1.5rem;
    width: 1.5rem;
  }

  .mail {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    margin-right: 4rem;    

    h2 {
      font-size: 1.2rem;
    }
  }

  .phone {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    h2 {
      font-size: 1.2rem;
    }
  }

  .location {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    margin-left: 4rem;

    h2 {
      font-size: 1.2rem;
    }
  }



  .contactForm {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
    max-width: 60rem;
  }

  .name, .email, .msg {
    font-size: medium;
    width: 100%;
    max-width: 40rem;
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    color: white;
    border: none;
    border-radius: 0.5rem;
    background: rgb(40,40,40);
  }

  .submitBtn {
    background-color: white;
    border: none;
    border-radius: 0.5rem;
    margin: 2rem;
    padding: 0.75rem 3.5rem;

    .links {
      /* height: 3rem;
      width: 3rem; */
      display: flex;
      flex-wrap: wrap;

    }

    .link {
      height: 3rem;
      width: 3rem;
    }
}

@media screen and (max-width: 768px) {
  .connectDescription {
    font-size: 2vw;
    max-width: 45rem;
  }

  .image {
    height: 1rem;
    width: 1rem;
  }

  .mail {
          h2 {
      font-size: 1rem;
    }
  }

  .phone {
h2 {
      font-size: 1rem;
    }
  }

  .location {
        h2 {
      font-size: 1rem;
    }
  }

  .contactForm {
    width: 75vw;
  }

  .name, .email, .msg {
    font-size: 0.8rem;
    }

  .submitBtn {
    padding: 0.50rem 2.5rem;
}

@media screen and (max-width: 576px) {
  .connectDescription {
    font-size: 2vw;
    max-width: 40rem;
  }

  .image {
    height: .7rem;
    width: .7rem;
  }

  .mail {
          h2 {
      font-size: .7rem;
    }
  }

  .phone {
h2 {
      font-size: .7rem;
    }
  }

  .location {
        h2 {
      font-size: .7rem;
    }
  }

  .contactForm {
    width: 70vw;
  }

  .name, .email, .msg {
    font-size: 0.7rem;
    }

  .submitBtn {
    padding: 0.40rem 2rem;
    font-size: 0.7rem;
}


  }

}
`;






